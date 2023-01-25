import { validate } from 'email-validator';
import { ApolloContext } from '../../apollo';
import { DBErrorMessages } from '../../enum/db-error-messages.enum';
import { prismaRequestErrorHandler } from '../../helpers/prisma-request-error-handler.helper';
import { userError } from '../../helpers/user-error';
import {
  ContactPayload,
  MutationContactUpdateArgs,
} from '../../types/graphql-generated/graphql';

import { cloudinaryServiceFactory } from '../../services/cloudinary.service';
import { reduceObjectNulls } from '../../utils/reduce-object';

export type UpdateContactInput = {
  args: MutationContactUpdateArgs;
  context: ApolloContext;
};

export const updateContactUseCase = async (
  input: UpdateContactInput
): Promise<ContactPayload> => {
  const { id, name, phone, email, image } = input.args.input;
  const { prisma } = input.context;
  const { updateImageOnly, rollbackImageMutation: rollBackImageMutation } =
    cloudinaryServiceFactory();

  const contactPayload: ContactPayload = {
    userErrors: [],
    contact: null,
  };

  const contactToUpdate = await prisma.contacts.findUnique({
    where: { id },
  });
  if (!id || !contactToUpdate) {
    await rollBackImageMutation(image);
    return {
      ...contactPayload,
      userErrors: [{ ...userError, message: DBErrorMessages.MISSING_RECORD }],
    };
  }

  const reducedInputs = reduceObjectNulls({ name, phone, email });

  if (!validate(email)) {
    await rollBackImageMutation(image);
    return {
      ...contactPayload,
      userErrors: [
        { ...userError, message: DBErrorMessages.INVALID_EMAIL_ADDRESS },
      ],
    };
  }

  try {
    await updateImageOnly({ id, image });
    const contact = await prisma.contacts.update({
      where: {
        id,
      },
      data: {
        ...reducedInputs,
        updatedAt: new Date(Date.now()),
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
