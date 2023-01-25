import { contactGQLResolvers } from './contact/contact.resolver';
import { contactTypeDefs } from './contact/contact.schema';
import { fileUploadGQLResolvers } from './file-upload/file-upload.resolver';
import { fileUploadTypeDefs } from './file-upload/file-upload.schema';

const BASE_TYPE_DEF = `#graphql
 type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }

  type UserError {
    message: String!
    values: [String]
  }
`;

export const typeDefs = [BASE_TYPE_DEF, contactTypeDefs, fileUploadTypeDefs];

const { Query: contactQueries, Mutations: contactMutations } =
  contactGQLResolvers;

const { Query: fileUploadQueires } = fileUploadGQLResolvers;

export const resolvers = {
  Query: {
    ...contactQueries,
    ...fileUploadQueires,
  },
  Mutation: {
    ...contactMutations,
  },
};
