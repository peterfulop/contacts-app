import { useEffect, useState } from 'react';
import { ContactUpdateInput } from '../../../../apollo/graphql-generated/types';
import { TEXT, t } from '../../../../helpers/translate';
import styled from '../../../../theme/styled';
import { breakPoints } from '../../../../theme/theme';
import { ContactFormAction } from '../../../../types';
import { useGetContactsQuery } from '../../../pages/contacts/graphql/contacts.generated';
import { ContactListItem } from './contact-list-item';

const List = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '700px',
  overflow: 'auto',
  paddingBottom: '200px',
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    padding: '12px',
  },
});

type ContactListProps = {
  setFormAction: React.Dispatch<React.SetStateAction<ContactFormAction | null>>;
  setSelectedContact: React.Dispatch<
    React.SetStateAction<ContactUpdateInput | null>
  >;
};

export const ContactList = (props: ContactListProps) => {
  const [contacts, setContacts] = useState<ContactUpdateInput[] | null>(null);

  const { data, loading, error } = useGetContactsQuery();

  useEffect(() => {
    const res = data?.getContacts.contacts;
    if (res) {
      const typeSafeContacts = res.map(
        ({ name, email, phone, image }) =>
          ({
            name,
            email,
            phone,
            image,
          } as ContactUpdateInput)
      );
      setContacts(typeSafeContacts);
    }
  }, [data?.getContacts.contacts]);
  console.log(error);

  return (
    <List>
      {loading && <div>{t(TEXT.general.loading)}</div>}
      {error && <div>{t(TEXT.general.serverError)}</div>}
      {contacts?.length ? (
        contacts.map((contact, index) => {
          return (
            <ContactListItem
              key={index}
              contact={contact}
              setFormAction={props.setFormAction}
              setSelectedContact={props.setSelectedContact}
            />
          );
        })
      ) : (
        <div>{t(TEXT.pages.contacts.labels.noContacts)}</div>
      )}
    </List>
  );
};
