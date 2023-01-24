import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
} from '@apollo/client';
import {
  Contact,
  ContactUpdateInput,
  Exact,
} from '../../../../../apollo/graphql-generated/types';
import { ContactUpdateMutation } from '../../../../pages/contacts/graphql/contacts.generated';
import { validateForm } from '../validations/contacts.schema';

type UpdateContactMutationInput = {
  id: string;
  contactInput: Omit<Contact, 'id'>;
  setValidationError: React.Dispatch<React.SetStateAction<string | null>>;
  contactUpdateMutation: (
    options?:
      | MutationFunctionOptions<
          ContactUpdateMutation,
          Exact<{ contactUpdateInput: ContactUpdateInput }>,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<ContactUpdateMutation>>;
  disableModal: () => void;
};

export const updateContactMutation = async (
  input: UpdateContactMutationInput
) => {
  input.setValidationError(null);
  const { data, error } = await validateForm(input.contactInput);
  if (error) {
    input.setValidationError(String(error));
  }
  if (!data) {
    return;
  }
  try {
    const res = await input.contactUpdateMutation({
      variables: {
        contactUpdateInput: {
          id: input.id,
          ...data,
        },
      },
    });
    if (res.data?.contactUpdate.userErrors.length) {
      return input.setValidationError(
        res.data?.contactUpdate.userErrors[0].message
      );
    }
    input.disableModal();
  } catch (error: any) {
    return input.setValidationError(String(error.message));
  }
};
