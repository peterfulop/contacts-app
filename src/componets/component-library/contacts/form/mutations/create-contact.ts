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
  Signatures,
} from '../../../../../apollo/graphql-generated/types';
import { cloudinaryImageUploader } from '../../../../../helpers/cloud/cloudinary-image-uploader';
import { translate } from '../../../../../helpers/translate/translate';
import { TEXT } from '../../../../../helpers/translate/translate-object';
import { ContactCreateMutation } from '../../../../pages/contacts/graphql/contacts.generated';
import { validateForm } from '../validations/contacts.schema';

type ContactInputWithFile = Omit<Contact, 'id'> & {
  files: FileList | null;
};

type CreateContactMutationInput = {
  contactInput: ContactInputWithFile;
  signatures: Signatures;
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
  const { name, email, phone, image, files } = input.contactInput;
  if (!name || !email || !phone) {
    return input.setValidationError(
      translate(TEXT.forms.contactForms.errors.allFieldsRequired)
    );
  }
  const { data, error } = await validateForm(input.contactInput);
  if (error) {
    return input.setValidationError(error[0]);
  }
  if (!data) {
    return;
  }
  try {
    let imageId = '';
    if (files) {
      if (image) {
        const res = await cloudinaryImageUploader({
          ...input.signatures,
          files,
        });
        if (res) imageId = res?.public_id;
      }
    }
    const res = await input.contactCreateMutation({
      variables: {
        input: {
          ...data,
          image: imageId,
        },
      },
    });
    if (res.data?.contactCreate.userErrors.length) {
      return input.setValidationError(
        res.data?.contactCreate.userErrors[0].message
      );
    }
    input.disableModal();
  } catch (error: any) {
    return input.setValidationError('Internal server ERROR');
  }
};
