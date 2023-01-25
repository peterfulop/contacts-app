import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
} from '@apollo/client';
import {
  Contact,
  ContactInput,
  Exact,
} from '../../../../../apollo/graphql-generated/types';
import { ContactCreateMutation } from '../../../../pages/contacts/graphql/contacts.generated';
import { validateForm } from '../validations/contacts.schema';

type CreateContactMutationInput = {
  contactInput: Omit<Contact, 'id'>;
  setValidationError: React.Dispatch<React.SetStateAction<string | null>>;
  contactCreateMutation: (
    options?:
      | MutationFunctionOptions<
          ContactCreateMutation,
          Exact<{ input: ContactInput }>,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<ContactCreateMutation>>;
  disableModal: () => void;
};

export const createContactMutation = async (
  input: CreateContactMutationInput
) => {
  input.setValidationError(null);
  const { data, error } = await validateForm(input.contactInput);
  if (error) {
    input.setValidationError(error[0]);
  }
  if (!data) {
    return;
  }
  try {
    const res = await input.contactCreateMutation({
      variables: {
        input: {
          ...data,
        },
      },
    });
    if (res.data?.contactCreate.userErrors.length) {
      console.log(res.data?.contactCreate.userErrors);

      return input.setValidationError(
        res.data?.contactCreate.userErrors[0].message
      );
    }
    input.disableModal();
  } catch (error: any) {
    return input.setValidationError('Internal server ERROR');
  }
};
