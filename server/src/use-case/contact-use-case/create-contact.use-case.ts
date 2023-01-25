import { validate } from 'email-validator';
import { ApolloContext } from '../../apollo';
import { DBErrorMessages } from '../../enum/db-error-messages.enum';
import { prismaRequestErrorHandler } from '../../helpers/prisma-request-error-handler.helper';
import { userError } from '../../helpers/user-error';
import { cloudinaryServiceFactory } from '../../services/cloudinary.service';
import {
  ContactPayload,
  MutationContactCreateArgs,
} from '../../types/graphql-generated/graphql';
import { createCloudinaryUrl } from '../../utils/create-cloudinary-url';

export type CreateContactInput = {
  args: MutationContactCreateArgs;
  context: ApolloContext;
};

export const createContactUseCase = async (
  input: CreateContactInput
): Promise<ContactPayload> => {
  const { name, email, phone, image } = input.args.input;
  const { prisma } = input.context;
  const { rollbackImageMutation: rollBackImageMutation, updateImageOnly } =
    cloudinaryServiceFactory();

  const contactPayload: ContactPayload = {
    userErrors: [],
    contact: null,
  };

  if (!name || !email || !phone) {
    await rollBackImageMutation(image);
    return {
      ...contactPayload,
      userErrors: [{ ...userError, message: DBErrorMessages.MISSING_INPUTS }],
    };
  }

  if (!validate(email)) {
    await rollBackImageMutation(image);
    return {
      ...contactPayload,
      userErrors: [
        { ...userError, message: DBErrorMessages.INVALID_EMAIL_ADDRESS },
      ],
    };
  }

  let URL = '';
  try {
    if (image) {
      URL = createCloudinaryUrl(image);
    }
    const contact = await prisma.contacts.create({
      data: {
        name,
        email,
        phone,
        image: URL,
      },
    });
    return {
      ...contactPayload,
      contact,
    };
  } catch (error: unknown) {
    const { userErrors } = prismaRequestErrorHandler(error);
    await rollBackImageMutation(image);
    return {
      ...contactPayload,
      userErrors,
    };
  }
};
