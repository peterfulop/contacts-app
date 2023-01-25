import { ApolloQueryResult } from '@apollo/client';
import { useEffect, useState } from 'react';
import {
  ContactUpdateInput,
  Exact,
} from '../../../../apollo/graphql-generated/types';
import { translate } from '../../../../helpers/translate/translate';
import { TEXT } from '../../../../helpers/translate/translate-object';
import { ContactFormAction } from '../../../../types/enums';
import {
  GetContactsQuery,
  useContactCreateMutation,
  useContactDeleteMutation,
  useContactUpdateMutation,
} from '../../../pages/contacts/graphql/contacts.generated';
import { Button } from '../../button/button';
import { ImageUploader } from '../../image-uploader/image-uploader';
import { InputField } from '../../input-field/input-field';
import { ContactListItemData } from '../contact-list/contact-list-item-data';
import { createContactMutation } from './mutations/create-contact';
import { deleteContactMutation } from './mutations/delete-contact';
import { updateContactMutation } from './mutations/update-contact';
import { Form, FormActions } from './styled-components';

export type ContactFormProps = {
  action: ContactFormAction;
  disableModal: () => void;
  contact?: ContactUpdateInput | null;
  refetch: (
    variables?:
      | Partial<
          Exact<{
            [key: string]: never;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<GetContactsQuery>>;
};

export const ContactForm = (props: ContactFormProps) => {
  const { action, contact, disableModal } = props;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [currContact, setCurrContact] = useState<ContactUpdateInput | null>(
    null
  );
  const [validationError, setValidationError] = useState<string | null>(null);

  const [contactCreateMutation] = useContactCreateMutation();
  const [contactUpdateMutation] = useContactUpdateMutation();
  const [contactDeleteMutation] = useContactDeleteMutation();

  useEffect(() => {
    if (contact) {
      setCurrContact(contact);
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
      setImage(contact.image);
    }
  }, [contact]);

  const setAction = async () => {
    const contactInput = { name, email, phone, image };
    switch (action) {
      case ContactFormAction.ADD:
        await createContactMutation({
          contactInput,
          setValidationError,
          contactCreateMutation,
          disableModal,
        });
        break;
      case ContactFormAction.UPDATE:
        await updateContactMutation({
          id: currContact?.id as string,
          contactInput,
          setValidationError,
          contactUpdateMutation,
          disableModal,
        });
        break;
      case ContactFormAction.DELETE:
        await deleteContactMutation({
          id: currContact?.id as string,
          setValidationError,
          contactDeleteMutation,
          disableModal,
        });
        break;
    }
  };

  const handleFormSubit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await setAction();
    await props.refetch();
  };

  return (
    <Form
      onSubmit={(e) => handleFormSubit(e)}
      onChange={() => {
        if (validationError) setValidationError(null);
      }}
    >
      <h2>{translate(TEXT.forms.contactForms[action].title)}</h2>
      {action === ContactFormAction.DELETE && currContact && (
        <ContactListItemData contact={currContact} style={{ margin: '1rem' }} />
      )}
      {(action === ContactFormAction.ADD ||
        action === ContactFormAction.UPDATE) && (
        <div>
          <ImageUploader
            image={image}
            fileName={fileName}
            setImage={setImage}
            setFileName={setFileName}
          />
          <InputField
            type={'text'}
            label={translate(TEXT.forms.contactForms.inputFields.name.label)}
            placeholder={translate(
              TEXT.forms.contactForms.inputFields.name.placeholder
            )}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
          <InputField
            type={'phone'}
            label={translate(TEXT.forms.contactForms.inputFields.phone.label)}
            placeholder={translate(
              TEXT.forms.contactForms.inputFields.phone.placeholder
            )}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required={true}
          />
          <InputField
            type={'email'}
            label={translate(TEXT.forms.contactForms.inputFields.email.label)}
            placeholder={translate(
              TEXT.forms.contactForms.inputFields.email.placeholder
            )}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </div>
      )}
      {validationError && <small>{validationError}</small>}
      <FormActions>
        <Button
          type='button'
          variant='FLAT'
          theme='SECONDARY'
          label={translate(TEXT.buttons.cancel)}
          onClick={disableModal}
        />
        <Button
          type='submit'
          variant='FLAT'
          theme='PRIMARY'
          label={
            action === ContactFormAction.DELETE
              ? translate(TEXT.buttons.remove)
              : translate(TEXT.buttons.done)
          }
        />
      </FormActions>
    </Form>
  );
};
