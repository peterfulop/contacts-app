import { ApolloContext } from '../../apollo';
import { cloudinaryServiceFactory } from '../../services/cloudinary.service';
import {
  QueryGetContactArgs,
  Signatures,
} from '../../types/graphql-generated/graphql';

export const fileUploadGQLResolvers = {
  Query: {
    getSignature: async (
      _parent: any,
      _args: QueryGetContactArgs,
      _context: ApolloContext
    ): Promise<Signatures | undefined> => {
      const { generateSignatures } = cloudinaryServiceFactory();
      return generateSignatures();
    },
  },
};
