import styled from 'styled-components';
import { Contact } from '../../pages/contacts';
import { Button } from '../button/button';

const ContactItem = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',
  padding: '12px 0',
  h3: {
    ...theme.typography.H3,
  },
  p: {
    ...theme.typography.message,
    color: theme.colors.textSecondary,
  },
  ':hover :last-of-type': {
    visibility: 'visible',
  },
}));

const Avatar = styled('img')(({ theme }) => ({
  width: '40px',
  height: '40px',
  border: `1px solid ${theme.colors.G40}`,
  borderRadius: '20px',
}));

const ContactData = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
}));

const ContactActions = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2px',
  visibility: 'hidden',
}));

export const ContactListItem = (props: { contact: Contact }) => {
  return (
    <ContactItem>
      <ContactData>
        <Avatar src={props.contact.avatar} />
        <div>
          <h3>{props.contact.name}</h3>
          <p>{props.contact.phone}</p>
        </div>
      </ContactData>
      <ContactActions>
        <Button icon={'Mute'} variant={'FLAT'} theme={'SECONDARY'} />
        <Button icon={'Call'} variant={'FLAT'} theme={'SECONDARY'} />
        <Button icon={'More'} variant={'FLAT'} theme={'SECONDARY'} />
      </ContactActions>
    </ContactItem>
  );
};
