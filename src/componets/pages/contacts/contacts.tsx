import { useEffect, useState } from 'react';
import { ContactUpdateInput } from '../../../apollo/graphql-generated/types';
import Avatar from '../../../assets/avatars/Photo.png';
import { TEXT, t } from '../../../helpers/translate';
import { Button } from '../../component-library/button/button';
import { ContactList } from '../../component-library/contacts/contact-list/contact-list';
import {
  ContactForm,
  ContactFormAction,
} from '../../component-library/contacts/form/form';
import Modal from '../../component-library/modal/modal';
import { useGetContactsQuery } from './graphql/contacts.generated';
import {
  Col,
  Header,
  HeaderActions,
  HeaderContent,
  IconList,
  Main,
  Section,
} from './styled-components';

export const Contacts = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formAction, setFormAction] = useState<ContactFormAction | null>(null);
  const [selectedContact, setSelectedContact] =
    useState<ContactUpdateInput | null>(null);

  const { refetch } = useGetContactsQuery();

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
            disableModal={disableModal}
            contact={selectedContact}
            refetch={refetch}
          />
        </Modal>
      )}
      <Col>
        <Button variant={'FLAT'} theme={'SECONDARY'} icon={'BackArrow'} />
      </Col>
      <Section>
        <Header>
          <HeaderContent>
            <Button variant={'FLAT'} theme={'SECONDARY'} icon={'BackArrow'} />
            <h1>{t(TEXT.pages.contacts.labels.title)}</h1>
            <Button variant={'FLAT'} theme={'SECONDARY'} icon={'LightMode'} />
          </HeaderContent>
          <HeaderActions>
            <IconList>
              <Button variant={'FLAT'} theme={'SECONDARY'} icon={'Settings'} />
              <img src={Avatar} width={22} height={22} />
            </IconList>
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
          <ContactList
            setFormAction={setFormAction}
            setSelectedContact={setSelectedContact}
          />
        </Main>
      </Section>
      <Col>
        <Button variant={'FLAT'} theme={'SECONDARY'} icon={'LightMode'} />
      </Col>
    </>
  );
};
