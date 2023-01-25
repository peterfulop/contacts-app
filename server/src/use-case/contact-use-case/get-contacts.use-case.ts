import { ApolloContext } from '../../apollo';
import { ContactsPayload } from '../../types/graphql-generated/graphql';

export type GetContactsInput = {
  context: ApolloContext;
};

export const getContactsUseCase = async (
  input: GetContactsInput
): Promise<ContactsPayload> => {
  const { prisma } = input.context;
  const contactsPayload: ContactsPayload = {
    userErrors: [],
    contacts: null,
  };

  const contacts = await prisma.contacts.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  });

  return {
    ...contactsPayload,
    contacts,
  };
};
