import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
} from '@apollo/client';
import {
  Exact,
  Signatures,
} from '../../../../../apollo/graphql-generated/types';
import { ContactDeleteMutation } from '../../../../pages/contacts/graphql/contacts.generated';

type DeleteContactMutationInput = {
  id: string;
  signatures: Signatures;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  contactDeleteMutation: (
    options?:
      | MutationFunctionOptions<
          ContactDeleteMutation,
          Exact<{ contactDeleteId: string }>,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<ContactDeleteMutation>>;
  disableModal: () => void;
};

export const deleteContactMutation = async (
  input: DeleteContactMutationInput
) => {
  input.setError(null);

  try {
    const res = await input.contactDeleteMutation({
      variables: {
        contactDeleteId: input.id,
      },
    });
    if (res.data?.contactDelete.userErrors.length) {
      return input.setError(res.data?.contactDelete.userErrors[0].message);
    }
    input.disableModal();
  } catch (error: any) {
    input.setError(String(error.message));
  }
};
