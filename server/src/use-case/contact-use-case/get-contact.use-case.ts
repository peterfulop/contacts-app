import { ApolloContext } from '../../apollo';
import { DBErrorMessages } from '../../enum/db-error-messages.enum';
import { userError } from '../../helpers/user-error';
import {
  ContactPayload,
  QueryGetContactArgs,
} from '../../types/graphql-generated/graphql';

export type GetContactInput = {
  args: QueryGetContactArgs;
  context: ApolloContext;
};

export const getContactUseCase = async (
  input: GetContactInput
): Promise<ContactPayload> => {
  const { prisma } = input.context;
  const { id } = input.args;

  const contactPayload: ContactPayload = {
    userErrors: [],
    contact: null,
  };

  const contact = await prisma.contacts.findUnique({
    where: {
      id,
    },
  });

  if (!contact) {
    return {
      ...contactPayload,
      userErrors: [{ ...userError, message: DBErrorMessages.MISSING_RECORD }],
    };
  }

  return {
    ...contactPayload,
    contact,
  };
};
