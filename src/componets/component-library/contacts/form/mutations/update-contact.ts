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
  Signatures,
} from '../../../../../apollo/graphql-generated/types';
import { translate } from '../../../../../helpers/translate/translate';
import { TEXT } from '../../../../../helpers/translate/translate-object';
import { ContactUpdateMutation } from '../../../../pages/contacts/graphql/contacts.generated';

import { cloudinaryImageUploader } from '../../../../../helpers/cloud/cloudinary-image-uploader';
import { validateForm } from '../validations/contacts.schema';

type ContactInputWithFile = Omit<Contact, 'id'> & {
  files: FileList | null;
};

type UpdateContactMutationInput = {
  id: string;
  contactInput: ContactInputWithFile;
  signatures: Signatures;
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
  const { name, email, phone, image, files } = input.contactInput;
  if (!name || !email || !phone) {
    return input.setValidationError(
      translate(TEXT.forms.contactForms.errors.allFieldsRequired)
    );
  }
  const { data, error } = await validateForm(input.contactInput);
  if (error) {
    input.setValidationError(String(error));
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
        if (res) {
          imageId = res.public_id;
        }
      }
    } else {
      imageId = image || '';
    }
    const res = await input.contactUpdateMutation({
      variables: {
        contactUpdateInput: {
          id: input.id,
          ...data,
          image: imageId,
        },
      },
    });

    console.log(res);

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
