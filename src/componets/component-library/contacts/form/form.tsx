import { useEffect, useState } from 'react';
import { TEXT, t } from '../../../../helpers/translate';
import styled from '../../../../theme/styled';
import { Contact } from '../../../../types';
import { Button } from '../../button/button';
import { ImageUploader } from '../../image-uploader/image-uploader';
import { InputField } from '../../input-field/input-field';
import { ContactListItemData } from '../contact-list/contact-list-item-data';
const Form = styled('form')(({ theme }) => ({
  h2: {
    ...theme.typography.H2,
    color: theme.colors.primary,
  },
  small: {
    ...theme.typography.P,
    color: theme.colors.error,
    textAlign: 'center',
  },
}));

const FormActions = styled('div')(({ theme }) => ({
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
}));

// const ImageHandler = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   gap: '1rem',
//   margin: '24px 0',
// }));

// const ImageModifier = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '8px',
// }));

// const Avatar = styled('div')(({ theme }) => ({
//   img: {
//     width: '88px',
//     height: '88px',
//     borderRadius: '44px',
//     border: `1px solid ${theme.colors.G70}`,
//   },
// }));

export enum ContactFormAction {
  EDIT = 'edit',
  ADD = 'add',
  DELETE = 'delete',
}

export type ContactFormProps = {
  action: ContactFormAction;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setFormAction: () => void;
  contact?: Contact | null;
};

export const ContactForm = (props: ContactFormProps) => {
  const [inputName, setInputName] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const [contact, setContact] = useState<Contact | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (props.contact) {
      setContact(props.contact);
      setInputName(props.contact.name);
      setInputPhone(props.contact.phone);
      setInputEmail(props.contact.email);
      setImage(props.contact.avatar);
    }
  }, [contact]);

  const setAction = () => {
    switch (props.action) {
      case ContactFormAction.ADD:
        {
          console.log('ADD new contact!');
        }
        break;
      case ContactFormAction.EDIT:
        {
          console.log('EDIT contact!');
        }
        break;
      case ContactFormAction.DELETE:
        {
          console.log('DELETE contact!');
        }
        break;
    }
  };

  const resetForm = () => {
    setInputName('');
    setInputPhone('');
    setInputEmail('');
  };

  const validateForm = (): boolean => {
    if (!inputName || !inputPhone || !inputEmail) {
      setValidationError(t(TEXT.forms.contactForms.errors.allFieldsRequired));
      return false;
    }
    return true;
  };

  const handleFormSubit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    setAction();
    resetForm();
  };

  return (
    <Form
      onSubmit={(e) => handleFormSubit(e)}
      onChange={() => {
        if (validationError) setValidationError(null);
      }}
    >
      <h2>{t(TEXT.forms.contactForms[props.action].title)}</h2>
      {props.action === ContactFormAction.DELETE && contact && (
        <ContactListItemData contact={contact} style={{ margin: '1rem' }} />
      )}
      {(props.action === ContactFormAction.ADD ||
        props.action === ContactFormAction.EDIT) && (
        <div>
          <ImageUploader
            image={image}
            fileName={fileName}
            setImage={setImage}
            setFileName={setFileName}
          />
          <InputField
            type={'text'}
            label={t(TEXT.forms.contactForms.inputFields.name.label)}
            placeholder={t(
              TEXT.forms.contactForms.inputFields.name.placeholder
            )}
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <InputField
            type={'phone'}
            label={t(TEXT.forms.contactForms.inputFields.phone.label)}
            placeholder={t(
              TEXT.forms.contactForms.inputFields.phone.placeholder
            )}
            value={inputPhone}
            onChange={(e) => setInputPhone(e.target.value)}
          />
          <InputField
            type={'email'}
            label={t(TEXT.forms.contactForms.inputFields.email.label)}
            placeholder={t(
              TEXT.forms.contactForms.inputFields.email.placeholder
            )}
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>
      )}
      {validationError && <small>{validationError}</small>}
      <FormActions>
        <Button
          type='button'
          variant='FLAT'
          theme='SECONDARY'
          label={t(TEXT.buttons.cancel)}
          onClick={props.setFormAction}
        />
        <Button
          type='submit'
          variant='FLAT'
          theme='PRIMARY'
          label={
            props.action === ContactFormAction.DELETE
              ? t(TEXT.buttons.remove)
              : t(TEXT.buttons.done)
          }
        />
      </FormActions>
    </Form>
  );
};
