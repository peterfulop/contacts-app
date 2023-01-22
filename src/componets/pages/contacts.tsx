import { useEffect, useState } from 'react';
import Avatar from '../../assets/avatars/Photo.png';
import { TEXT, t } from '../../text';
import styled from '../../theme/styled';
import { Button } from '../component-library/button/button';
import { ContactList } from '../component-library/contacts/contact-list';
import { Icon } from '../component-library/icon-item/icon-item';

export type Contact = {
  name: string;
  phone: string;
  avatar: string;
};

const HeaderActions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.5rem',
});

const Header = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px',
  height: '96px',
  border: '1px solid',
  borderColor: theme.colors.G50,
  h1: {
    ...theme.typography.H1,
    color: theme.colors.textPrimary,
    ':first-letter': {
      textTransform: 'capitalize',
    },
  },
}));

const Main = styled('main')({
  padding: '12px 24px',
});

const Col = styled('div')({
  margin: '32px 36px',
});

const Section = styled('section')({
  maxWidth: '720px',
  width: '100%',
});

export const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[] | null>();

  useEffect(() => {
    const data = [
      {
        name: 'Timothy Lewis',
        phone: '+36 01 234 5678',
        avatar: 'src/assets/avatars/Timothy.png',
      },
      {
        name: 'Sarah Wright',
        phone: '+36 01 234 5678',
        avatar: 'src/assets/avatars/Sarah.png',
      },
      {
        name: 'Lucy Jones',
        phone: '+36 01 234 5678',
        avatar: 'src/assets/avatars/Lucy.png',
      },
      {
        name: 'Jake Perez',
        phone: '+36 01 234 5678',
        avatar: 'src/assets/avatars/Jake.png',
      },
      {
        name: 'Adebayo Rodriguez',
        phone: '+36 01 234 5678',
        avatar: 'src/assets/avatars/Adebayo.png',
      },
    ];
    setContacts(data);
  }, []);

  return (
    <>
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
            />
          </HeaderActions>
        </Header>
        <Main>
          {contacts ? (
            <ContactList contacts={contacts} />
          ) : (
            <div>no contacts yet...</div>
          )}
        </Main>
      </Section>
      <Col>
        <Icon icon={'LightMode'} />
      </Col>
    </>
  );
};
