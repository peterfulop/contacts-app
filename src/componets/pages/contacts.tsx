import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Avatar from '../../assets/avatars/Photo.png';
import { TEXT, t } from '../../text';
import { Button } from '../component-library/button/button';
import { ContactList } from '../component-library/contacts/contact-list';
import { Icon } from '../component-library/icon-item/icon-item';

export const Navbar = styled('header')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const NavbarCenter = styled('div')(({ theme }) => ({
  maxWidth: '768px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  height: '96px',
  border: '1px solid',
  padding: '24px',
  borderColor: theme.colors.G50,
  h1: {
    ...theme.typography.H1,
    color: theme.colors.textPrimary,
  },
}));

export const NavbarActions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.5rem',
});

export const NavbarAvatar = styled('div')({
  width: '10px',
  margin: '32px 36px',
});

export const NavbarSide = styled('div')({
  margin: '32px 36px',
});

export const Content = styled('main')({
  maxWidth: '768px',
  margin: '0 auto',
  display: 'flex',
  width: '100%',
  padding: '12px 24px',
});

export type Contact = {
  name: string;
  phone: string;
  avatar: string;
};

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
      <Navbar>
        <NavbarSide>
          <Icon icon={'BackArrow'} />
        </NavbarSide>
        <NavbarCenter>
          <h1>{t(TEXT.pages.contacts.labels.title)}</h1>
          <NavbarActions>
            <Icon icon={'Settings'} />
            <img src={Avatar} width={22} height={22} />
            <Button
              variant={'BORDERED'}
              theme={'PRIMARY'}
              icon={'Add'}
              label={t(TEXT.buttons.addNew)}
            />
          </NavbarActions>
        </NavbarCenter>
        <NavbarSide>
          <Icon icon={'LightMode'} />
        </NavbarSide>
      </Navbar>
      <Content>
        {contacts ? (
          <ContactList contacts={contacts} />
        ) : (
          <div>no contacts yet...</div>
        )}
      </Content>
    </>
  );
};
