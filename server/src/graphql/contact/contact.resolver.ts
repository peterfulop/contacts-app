import { ApolloContext } from '../../apollo';
import {
  ContactPayload,
  ContactsPayload,
  MutationContactCreateArgs,
  MutationContactDeleteArgs,
  MutationContactUpdateArgs,
  QueryGetContactArgs,
} from '../../types/graphql-generated/graphql';
import { createContactUseCase } from '../../use-case/contact-use-case/create-contact.use-case';
import { deleteContactUseCase } from '../../use-case/contact-use-case/delete-contact.use-case';
import { getContactUseCase } from '../../use-case/contact-use-case/get-contact.use-case';
import { getContactsUseCase } from '../../use-case/contact-use-case/get-contacts.use-case';
import { updateContactUseCase } from '../../use-case/contact-use-case/update-contact.use-case';

export const contactGQLResolvers = {
  Query: {
    getContact: async (
      _parent: any,
      args: QueryGetContactArgs,
      context: ApolloContext
    ): Promise<ContactPayload> => {
      return await getContactUseCase({ args, context });
    },
    getContacts: async (
      _parent: any,
      _args: any,
      context: ApolloContext
    ): Promise<ContactsPayload> => {
      return await getContactsUseCase({ context });
    },
  },
  Mutations: {
    contactCreate: async (
      _parent: any,
      args: MutationContactCreateArgs,
      context: ApolloContext
    ): Promise<ContactPayload> => {
      return await createContactUseCase({ args, context });
    },
    contactUpdate: async (
      _parent: any,
      args: MutationContactUpdateArgs,
      context: ApolloContext
    ): Promise<ContactPayload> => {
      return await updateContactUseCase({ args, context });
    },
    contactDelete: async (
      _parent: any,
      args: MutationContactDeleteArgs,
      context: ApolloContext
    ): Promise<ContactPayload> => {
      return await deleteContactUseCase({ args, context });
    },
  },
};
