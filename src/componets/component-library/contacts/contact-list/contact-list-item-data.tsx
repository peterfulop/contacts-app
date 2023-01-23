import DefaultImage from '../../../../assets/avatars/Default.png';
import styled from '../../../../theme/styled';
import { Contact } from '../../../../types';

const Avatar = styled('img')(({ theme }) => ({
  width: '40px',
  height: '40px',
  border: `1px solid ${theme.colors.G40}`,
  borderRadius: '20px',
}));

const ContactData = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
  h3: {
    ...theme.typography.H3,
  },
  p: {
    ...theme.typography.P,
    color: theme.colors.secondary,
  },
}));

type ContactListItemData = React.HTMLAttributes<HTMLDivElement> & {
  contact: Contact;
};

export const ContactListItemData = (props: ContactListItemData) => {
  return (
    <ContactData>
      <Avatar src={props.contact.avatar || DefaultImage} />
      <div {...props}>
        <h3>{props.contact.name}</h3>
        <p>{props.contact.phone}</p>
      </div>
    </ContactData>
  );
};
