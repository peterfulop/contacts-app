import styled from 'styled-components';
import { Contact } from '../../pages/contacts';

const ContactItem = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '16px',
  padding: '12px 0',
  h3: {
    ...theme.typography.H3,
  },
  p: {
    ...theme.typography.message,
    color: theme.colors.textSecondary,
  },
}));

const Avatar = styled('img')(({ theme }) => ({
  width: '40px',
  height: '40px',
  border: `1px solid ${theme.colors.G40}`,
  borderRadius: '20px',
}));

export const ContactListItem = (props: { contact: Contact }) => {
  return (
    <ContactItem>
      <Avatar src={props.contact.avatar} />
      <div>
        <h3>{props.contact.name}</h3>
        <p>{props.contact.phone}</p>
      </div>
    </ContactItem>
  );
};
