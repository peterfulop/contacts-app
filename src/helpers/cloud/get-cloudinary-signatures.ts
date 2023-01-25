import { ApolloClient, ApolloQueryResult } from '@apollo/client';
import { Signatures } from '../../apollo/graphql-generated/types';
import {
  GetSignatureDocument,
  GetSignatureQuery,
} from './graphql/image-upload.generated';

export const getCloudinraySignatures = async (
  apolloClient: ApolloClient<object>
): Promise<Signatures | undefined> => {
  const response: ApolloQueryResult<GetSignatureQuery> =
    await apolloClient.query({
      query: GetSignatureDocument,
    });
  if (response.data.getSignature) {
    const { signature, timestamp } = response.data.getSignature;
    if (signature && timestamp) {
      return {
        signature,
        timestamp,
      };
    }
  }
  return;
};
