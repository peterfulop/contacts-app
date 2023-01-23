import styled from '../../../../theme/styled';
import { breakPoints } from '../../../../theme/theme';
import { Contact } from '../../../../types';
import { ContactFormAction } from '../form/form';
import { ContactListItem } from './contact-list-item';

const List = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '700px',
  overflow: 'auto',
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    padding: '12px',
  },
});

type ContactListProps = {
  contacts: Contact[];
  setFormAction: React.Dispatch<React.SetStateAction<ContactFormAction | null>>;
  setSelectedContact: React.Dispatch<React.SetStateAction<Contact | null>>;
};

export const ContactList = (props: ContactListProps) => {
  return (
    <List>
      {props.contacts.map((contact, index) => {
        return (
          <ContactListItem
            key={index}
            contact={contact}
            setFormAction={props.setFormAction}
            setSelectedContact={props.setSelectedContact}
          />
        );
      })}
    </List>
  );
};
