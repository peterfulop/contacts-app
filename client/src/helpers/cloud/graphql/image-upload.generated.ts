/* eslint-disable */
import * as Types from '../../../apollo/graphql-generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetSignatureQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetSignatureQuery = { __typename?: 'Query', getSignature?: { __typename?: 'Signatures', signature: string, timestamp: string } | null };


export const GetSignatureDocument = gql`
    query GetSignature {
  getSignature {
    signature
    timestamp
  }
}
    `;

/**
 * __useGetSignatureQuery__
 *
 * To run a query within a React component, call `useGetSignatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSignatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSignatureQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSignatureQuery(baseOptions?: Apollo.QueryHookOptions<GetSignatureQuery, GetSignatureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSignatureQuery, GetSignatureQueryVariables>(GetSignatureDocument, options);
      }
export function useGetSignatureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSignatureQuery, GetSignatureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSignatureQuery, GetSignatureQueryVariables>(GetSignatureDocument, options);
        }
export type GetSignatureQueryHookResult = ReturnType<typeof useGetSignatureQuery>;
export type GetSignatureLazyQueryHookResult = ReturnType<typeof useGetSignatureLazyQuery>;
export type GetSignatureQueryResult = Apollo.QueryResult<GetSignatureQuery, GetSignatureQueryVariables>;