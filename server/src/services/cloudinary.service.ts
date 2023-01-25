import { PrismaClient } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import { config } from '../config/config';
import { DBErrorMessages } from '../enum/db-error-messages.enum';
import { prismaRequestErrorHandler } from '../helpers/prisma-request-error-handler.helper';
import { userError } from '../helpers/user-error';
import {
  ContactPayload,
  ContactUpdateInput,
  Signatures,
} from '../types/graphql-generated/graphql';
import { createCloudinaryUrl } from '../utils/create-cloudinary-url';
import { getImageId } from '../utils/get-image-id';
import { mockData } from './mock/clients.mock';

const prisma = new PrismaClient();

type UpdateImageOnlyInput = {
  image: string;
  id: string;
};

export interface ICloudinaryService {
  generateSignatures: () => Signatures | undefined;
  deleteFile: (imageId: string) => Promise<void>;
  updateImageOnly: (input: UpdateImageOnlyInput) => Promise<ContactPayload>;
  rollbackImageMutation: (image: string) => Promise<void>;
  generateMockData: () => Promise<void>;
}

const cloudinaryConfig = cloudinary.config({
  cloud_name: config.cloudinary.credentials.cloudName,
  api_key: config.cloudinary.credentials.apiKey,
  api_secret: config.cloudinary.credentials.apiSecret,
  secure: true,
});

export const cloudinaryServiceFactory = (): ICloudinaryService => {
  const generateSignatures: ICloudinaryService['generateSignatures'] = () => {
    try {
      const timestamp = String(Math.round(new Date().getTime() / 1000));
      const signature = cloudinary.utils.api_sign_request(
        {
          timestamp: timestamp,
        },
        cloudinaryConfig.api_secret as string
      );
      return {
        timestamp,
        signature,
      };
    } catch (error) {
      return;
    }
  };
  const deleteFile: ICloudinaryService['deleteFile'] = async (
    imageId: string
  ) => {
    await cloudinary.uploader.destroy(imageId);
  };
  const updateImageOnly: ICloudinaryService['updateImageOnly'] = async (
    input: UpdateImageOnlyInput
  ) => {
    const { id, image } = input;
    const contactPayload: ContactPayload = {
      userErrors: [],
      contact: null,
    };
    try {
      const contactToUpdate = await prisma.contacts.findUnique({
        where: {
          id,
        },
      });
      if (!contactToUpdate) {
        return {
          ...contactPayload,
          userErrors: [
            { ...userError, message: DBErrorMessages.MISSING_RECORD },
          ],
        };
      }

      let URL = '';
      const storedImageId = getImageId(contactToUpdate.image);
      if (image) {
        if (storedImageId && storedImageId === getImageId(image)) {
          URL = contactToUpdate.image;
        } else if (!storedImageId) {
          URL = createCloudinaryUrl(image);
        } else {
          await deleteFile(storedImageId);
          URL = createCloudinaryUrl(image);
        }
      } else if (!image && storedImageId) {
        await deleteFile(storedImageId);
      } else {
        URL = contactToUpdate.image;
      }

      const updatedContact = await prisma.contacts.update({
        where: {
          id,
        },
        data: {
          image: URL,
        },
      });
      return {
        ...contactPayload,
        contact: updatedContact,
      };
    } catch (error) {
      const { userErrors } = prismaRequestErrorHandler(error);
      return {
        ...contactPayload,
        userErrors,
      };
    }
  };
  const rollbackImageMutation: ICloudinaryService['rollbackImageMutation'] =
    async (image: string) => {
      const imageId = getImageId(image);
      if (imageId) await deleteFile(imageId);
    };
  const generateMockData: ICloudinaryService['generateMockData'] = async () => {
    const mockDataEnv = config.mockData;
    const count = await prisma.contacts.count();
    if (mockDataEnv) {
      if (count > 0) {
        return console.log(
          `🔒 Mock data generation is not possible! Number of contacts: ${count}`
        );
      } else if (count === 0) {
        try {
          const mockDataWithImages = await Promise.all(
            mockData.map(async (contact): Promise<ContactUpdateInput> => {
              let URL = '';
              if (contact.image) {
                const filePath = path.join('./assets/avatars', contact.image);
                const extension = filePath.split('.').pop();
                const upload = await cloudinary.uploader.upload(filePath);
                URL = createCloudinaryUrl(`${upload.public_id}.${extension}`);
              }
              return {
                id: contact.id,
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                image: URL,
              };
            })
          );
          const result = await prisma.contacts.createMany({
            data: [...mockDataWithImages],
            skipDuplicates: true,
          });
          console.log(
            `🎉 Mock data generation is ready! Generated contacts: ${result.count}`
          );
        } catch (error: any) {
          console.log(error.message);
        }
      }
    }
  };
  return {
    generateSignatures,
    deleteFile,
    updateImageOnly,
    rollbackImageMutation,
    generateMockData,
  };
};
