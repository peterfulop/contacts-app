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
import { ServerSideError } from '../../../../../helpers/translate/translate.schema';
import { arrayToString } from '../../../../../utils/array-to-string';
import { validateForm } from '../validations/contacts.schema';

type ContactInputWithFile = Omit<Contact, 'id'> & {
  files: FileList | null;
};

type UpdateContactMutationInput = {
  id: string;
  contactInput: ContactInputWithFile;
  signatures: Signatures;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
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
    if (res.data?.contactUpdate.userErrors.length) {
      const error = res.data?.contactUpdate.userErrors[0]
        .message as ServerSideError;
      const errorValues = arrayToString(
        res.data?.contactUpdate?.userErrors[0]?.values
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
    return input.setError(String(error.message));
  }
};
