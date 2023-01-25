import { Contact } from '../../../../apollo/graphql-generated/types';
import DefaultImage from '../../../../assets/avatars/Default.png';
import styled from '../../../../theme/styled';

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
  a: {
    ...theme.typography.P,
    color: theme.colors.secondary,
    textDecoration: 'none',
  },
}));

type ContactListItemData = React.HTMLAttributes<HTMLDivElement> & {
  contact: Contact;
};

export const ContactListItemData = (props: ContactListItemData) => {
  return (
    <ContactData>
      <Avatar src={props.contact.image || DefaultImage} />
      <div>
        <h3>{props.contact.name}</h3>
        <a id={props.contact.id} href={`tel:+${props.contact.phone}`}>
          {props.contact.phone}
        </a>
      </div>
    </ContactData>
  );
};
