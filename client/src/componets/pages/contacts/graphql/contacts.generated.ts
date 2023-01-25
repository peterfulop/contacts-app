/* eslint-disable */
import * as Types from '../../../../apollo/graphql-generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetContactsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetContactsQuery = { __typename?: 'Query', getContacts: { __typename?: 'ContactsPayload', contacts?: Array<{ __typename?: 'Contact', id: string, email?: string | null, name?: string | null, image?: string | null, phone?: string | null }> | null } };

export type ContactCreateMutationVariables = Types.Exact<{
  input: Types.ContactInput;
}>;


export type ContactCreateMutation = { __typename?: 'Mutation', contactCreate: { __typename?: 'ContactPayload', userErrors: Array<{ __typename?: 'UserError', message: string, values?: Array<string | null> | null }>, contact?: { __typename?: 'Contact', id: string, email?: string | null, name?: string | null, image?: string | null, phone?: string | null } | null } };

export type ContactDeleteMutationVariables = Types.Exact<{
  contactDeleteId: Types.Scalars['ID'];
}>;


export type ContactDeleteMutation = { __typename?: 'Mutation', contactDelete: { __typename?: 'ContactPayload', userErrors: Array<{ __typename?: 'UserError', message: string }>, contact?: { __typename?: 'Contact', id: string } | null } };

export type ContactUpdateMutationVariables = Types.Exact<{
  contactUpdateInput: Types.ContactUpdateInput;
}>;


export type ContactUpdateMutation = { __typename?: 'Mutation', contactUpdate: { __typename?: 'ContactPayload', userErrors: Array<{ __typename?: 'UserError', message: string, values?: Array<string | null> | null }>, contact?: { __typename?: 'Contact', id: string, email?: string | null, name?: string | null, image?: string | null, phone?: string | null } | null } };


export const GetContactsDocument = gql`
    query GetContacts {
  getContacts {
    contacts {
      id
      email
      name
      image
      phone
    }
  }
}
    `;

/**
 * __useGetContactsQuery__
 *
 * To run a query within a React component, call `useGetContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContactsQuery(baseOptions?: Apollo.QueryHookOptions<GetContactsQuery, GetContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactsQuery, GetContactsQueryVariables>(GetContactsDocument, options);
      }
export function useGetContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactsQuery, GetContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactsQuery, GetContactsQueryVariables>(GetContactsDocument, options);
        }
export type GetContactsQueryHookResult = ReturnType<typeof useGetContactsQuery>;
export type GetContactsLazyQueryHookResult = ReturnType<typeof useGetContactsLazyQuery>;
export type GetContactsQueryResult = Apollo.QueryResult<GetContactsQuery, GetContactsQueryVariables>;
export const ContactCreateDocument = gql`
    mutation ContactCreate($input: ContactInput!) {
  contactCreate(input: $input) {
    userErrors {
      message
      values
    }
    contact {
      id
      email
      name
      image
      phone
    }
  }
}
    `;
export type ContactCreateMutationFn = Apollo.MutationFunction<ContactCreateMutation, ContactCreateMutationVariables>;

/**
 * __useContactCreateMutation__
 *
 * To run a mutation, you first call `useContactCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactCreateMutation, { data, loading, error }] = useContactCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useContactCreateMutation(baseOptions?: Apollo.MutationHookOptions<ContactCreateMutation, ContactCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContactCreateMutation, ContactCreateMutationVariables>(ContactCreateDocument, options);
      }
export type ContactCreateMutationHookResult = ReturnType<typeof useContactCreateMutation>;
export type ContactCreateMutationResult = Apollo.MutationResult<ContactCreateMutation>;
export type ContactCreateMutationOptions = Apollo.BaseMutationOptions<ContactCreateMutation, ContactCreateMutationVariables>;
export const ContactDeleteDocument = gql`
    mutation ContactDelete($contactDeleteId: ID!) {
  contactDelete(id: $contactDeleteId) {
    userErrors {
      message
    }
    contact {
      id
    }
  }
}
    `;
export type ContactDeleteMutationFn = Apollo.MutationFunction<ContactDeleteMutation, ContactDeleteMutationVariables>;

/**
 * __useContactDeleteMutation__
 *
 * To run a mutation, you first call `useContactDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactDeleteMutation, { data, loading, error }] = useContactDeleteMutation({
 *   variables: {
 *      contactDeleteId: // value for 'contactDeleteId'
 *   },
 * });
 */
export function useContactDeleteMutation(baseOptions?: Apollo.MutationHookOptions<ContactDeleteMutation, ContactDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContactDeleteMutation, ContactDeleteMutationVariables>(ContactDeleteDocument, options);
      }
export type ContactDeleteMutationHookResult = ReturnType<typeof useContactDeleteMutation>;
export type ContactDeleteMutationResult = Apollo.MutationResult<ContactDeleteMutation>;
export type ContactDeleteMutationOptions = Apollo.BaseMutationOptions<ContactDeleteMutation, ContactDeleteMutationVariables>;
export const ContactUpdateDocument = gql`
    mutation ContactUpdate($contactUpdateInput: ContactUpdateInput!) {
  contactUpdate(input: $contactUpdateInput) {
    userErrors {
      message
      values
    }
    contact {
      id
      email
      name
      image
      phone
    }
  }
}
    `;
export type ContactUpdateMutationFn = Apollo.MutationFunction<ContactUpdateMutation, ContactUpdateMutationVariables>;

/**
 * __useContactUpdateMutation__
 *
 * To run a mutation, you first call `useContactUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUpdateMutation, { data, loading, error }] = useContactUpdateMutation({
 *   variables: {
 *      contactUpdateInput: // value for 'contactUpdateInput'
 *   },
 * });
 */
export function useContactUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ContactUpdateMutation, ContactUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContactUpdateMutation, ContactUpdateMutationVariables>(ContactUpdateDocument, options);
      }
export type ContactUpdateMutationHookResult = ReturnType<typeof useContactUpdateMutation>;
export type ContactUpdateMutationResult = Apollo.MutationResult<ContactUpdateMutation>;
export type ContactUpdateMutationOptions = Apollo.BaseMutationOptions<ContactUpdateMutation, ContactUpdateMutationVariables>;