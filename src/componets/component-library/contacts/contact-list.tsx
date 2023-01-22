import styled from '../../../theme/styled';
import { Contact } from '../../pages/contacts';
import { ContactListItem } from './contact-list-item';

const List = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const ContactList = (props: { contacts: Contact[] }) => {
  return (
    <List>
      {props.contacts.map((contact, index) => {
        return <ContactListItem key={index} contact={contact} />;
      })}
    </List>
  );
};
