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
import { ServerSideError } from '../../../../../helpers/translate/translate.schema';
import { arrayToString } from '../../../../../utils/array-to-string';
import { ContactCreateMutation } from '../../../../pages/contacts/graphql/contacts.generated';
import { validateForm } from '../validations/contacts.schema';

type ContactInputWithFile = Omit<Contact, 'id'> & {
  files: FileList | null;
};

type CreateContactMutationInput = {
  contactInput: ContactInputWithFile;
  signatures: Signatures;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
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
  input.setError(null);
  const { name, email, phone, image, files } = input.contactInput;
  if (!name || !email || !phone) {
    return input.setError(
      translate(TEXT.forms.contactForms.errors.allFieldsRequired)
    );
  }
  const { data, error } = await validateForm(input.contactInput);
  if (error) {
    const err = error[0] as ServerSideError;
    return input.setError(
      translate(
        TEXT.forms.contactForms.errors.serverSideErrors[
          err || ServerSideError.SERVER_ERROR
        ]
      )
    );
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
      const error = res.data?.contactCreate.userErrors[0]
        .message as ServerSideError;
      const errorValues = arrayToString(
        res.data?.contactCreate?.userErrors[0]?.values
      );
      return input.setError(
        translate(
          TEXT.forms.contactForms.errors.serverSideErrors[
            error || ServerSideError.SERVER_ERROR
          ],
          errorValues
        )
      );
    }
    input.disableModal();
  } catch (error: any) {
    return input.setError(
      translate(TEXT.forms.contactForms.errors.serverSideErrors.SERVER_ERROR)
    );
  }
};
