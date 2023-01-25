import { ApolloContext } from '../../apollo';
import { DBErrorMessages } from '../../enum/db-error-messages.enum';
import { userError } from '../../helpers/user-error';
import { cloudinaryServiceFactory } from '../../services/cloudinary.service';
import {
  ContactPayload,
  MutationContactDeleteArgs,
} from '../../types/graphql-generated/graphql';
import { getImageId } from '../../utils/get-image-id';

export type DeleteContactInput = {
  args: MutationContactDeleteArgs;
  context: ApolloContext;
};

export const deleteContactUseCase = async (
  input: DeleteContactInput
): Promise<ContactPayload> => {
  const { id } = input.args;
  const { prisma } = input.context;
  const { deleteFile } = cloudinaryServiceFactory();

  const contactsPayload: ContactPayload = {
    userErrors: [],
    contact: null,
  };

  const contactsToDelete = await prisma.contacts.findUnique({ where: { id } });
  if (!contactsToDelete) {
    return {
      ...contactsPayload,
      userErrors: [{ ...userError, message: DBErrorMessages.MISSING_RECORD }],
    };
  }

  try {
    if (contactsToDelete.image) {
      const imageId = getImageId(contactsToDelete.image);
      if (imageId) await deleteFile(imageId);
    }
    await prisma.contacts.delete({ where: { id } });
  } catch (error) {
    return {
      ...contactsPayload,
      userErrors: [{ ...userError, message: DBErrorMessages.SERVER_ERROR }],
    };
  }
  return {
    ...contactsPayload,
    contact: contactsToDelete,
  };
};
