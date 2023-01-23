import { useEffect, useState } from 'react';
import Avatar from '../../assets/avatars/Photo.png';
import { TEXT, t } from '../../helpers/translate';
import { Contact } from '../../types';
import { Button } from '../component-library/button/button';
import { ContactList } from '../component-library/contacts/contact-list/contact-list';
import {
  ContactForm,
  ContactFormAction,
} from '../component-library/contacts/form/form';
import { Icon } from '../component-library/icon/icon';
import Modal from '../component-library/modal/modal';
import { Col, Header, HeaderActions, Main, Section } from './styled-components';

export const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[] | null>();
  const [modalVisible, setModalVisible] = useState(false);
  const [formAction, setFormAction] = useState<ContactFormAction | null>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    const data = [
      {
        name: 'Timothy Lewis',
        phone: '+36 01 234 5678',
        email: 'timothy@email.com',
        avatar: 'src/assets/avatars/Timothy.png',
        id: '9245fa9f-8fb7-4208-9e22-226c6e0975b0',
      },
      {
        name: 'Sarah Wright',
        phone: '+36 01 234 5678',
        email: 'sarah@email.com',
        avatar: '',
        id: '0d921dc8-8f01-4cc9-86dc-5e9d58bfe6a8',
      },
      {
        name: 'Lucy Jones',
        phone: '+36 01 234 5678',
        email: 'lucy@email.com',
        avatar: 'src/assets/avatars/Lucy.png',
        id: '7ec16465-4bd8-45fa-9ef3-9bb78e7d6eca',
      },
      {
        name: 'Jake Perez',
        phone: '+36 01 234 5678',
        email: 'jake@email.com',
        avatar: 'src/assets/avatars/Jake.png',
        id: '607b9d62-9398-4ab7-82bd-9b76bed01d71',
      },
      {
        name: 'Adebayo Rodriguez',
        phone: '+36 01 234 5678',
        email: 'adebayo@email.com',
        avatar: 'src/assets/avatars/Adebayo.png',
        id: '3abd56e3-b712-4426-9ee9-beee67adb7ad',
      },
    ];
    setContacts(data);
  }, []);

  const disableModal = () => {
    setModalVisible(false);
    setFormAction(null);
    setSelectedContact(null);
  };

  useEffect(() => {
    setModalVisible(true);
  }, [formAction]);

  return (
    <>
      {modalVisible && formAction && (
        <Modal onClose={disableModal}>
          <ContactForm
            action={formAction}
            setModalVisible={setModalVisible}
            setFormAction={disableModal}
            contact={selectedContact}
          />
        </Modal>
      )}
      <Col>
        <Icon icon={'BackArrow'} />
      </Col>
      <Section>
        <Header>
          <h1>{t(TEXT.pages.contacts.labels.title)}</h1>
          <HeaderActions>
            <Icon icon={'Settings'} />
            <img src={Avatar} width={22} height={22} />
            <Button
              variant={'BORDERED'}
              theme={'PRIMARY'}
              icon={'Add'}
              label={t(TEXT.buttons.addNew)}
              onClick={() => setFormAction(ContactFormAction.ADD)}
            />
          </HeaderActions>
        </Header>
        <Main>
          {contacts ? (
            <ContactList
              contacts={contacts}
              setFormAction={setFormAction}
              setSelectedContact={setSelectedContact}
            />
          ) : (
            <div>{t(TEXT.pages.contacts.labels.noContacts)}</div>
          )}
        </Main>
      </Section>
      <Col>
        <Icon icon={'LightMode'} />
      </Col>
    </>
  );
};
