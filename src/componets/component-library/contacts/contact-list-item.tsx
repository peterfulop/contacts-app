import { useState } from 'react';
import { TEXT, t } from '../../../text';
import styled from '../../../theme/styled';
import { theme } from '../../../theme/theme';
import { Contact } from '../../../types';
import { Button } from '../button/button';
import { Icon } from '../icon-item/icon-item';

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
  visibility: 'hidden',
  position: 'relative',
}));

const Buttons = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2px',
}));

const DropdownList = styled('div')(({ theme }) => ({
  position: 'absolute',
  marginTop: '8px',
  left: '105px',
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  width: '220px',
  background: theme.colors.G80,
  zIndex: 10,
}));

const DropdownListItem = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  img: {
    padding: '12px 0 12px 10px',
    opacity: '56%',
  },
  p: {
    color: theme.colors.textPrimary,
    fontFamily: 'Lexend Deca',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    ':first-letter': {
      textTransform: 'capitalize',
    },
  },
  ':hover': {
    cursor: 'pointer',
    background: theme.colors.G70,
  },
  ':hover:first-of-type': {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  ':hover:last-of-type': {
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  ':active': {
    background: theme.colors.G60,
  },
}));

export const ContactListItem = (props: { contact: Contact }) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
    <ContactItem onMouseLeave={() => setDropdownMenu(false)}>
      <ContactData>
        <Avatar src={props.contact.avatar} />
        <div>
          <h3>{props.contact.name}</h3>
          <p>{props.contact.phone}</p>
        </div>
      </ContactData>
      <ContactActions>
        <Buttons>
          <Button icon={'Mute'} variant={'FLAT'} theme={'SECONDARY'} />
          <Button icon={'Call'} variant={'FLAT'} theme={'SECONDARY'} />
          <Button
            icon={'More'}
            variant={'FLAT'}
            theme={'SECONDARY'}
            onClick={() => setDropdownMenu((prevState) => !prevState)}
            isActive={dropdownMenu}
            activeColor={theme.colors.G60}
          />
        </Buttons>
        {dropdownMenu && (
          <DropdownList
            onMouseLeave={() => {
              setDropdownMenu(false);
            }}
          >
            <DropdownListItem>
              <Icon icon='Settings' />
              <p>{t(TEXT.buttons.edit)}</p>
            </DropdownListItem>
            <DropdownListItem>
              <Icon icon='Favourite' />
              <p>{t(TEXT.buttons.favourite)}</p>
            </DropdownListItem>
            <DropdownListItem>
              <Icon icon='Delete' img={{ style: { marginLeft: '3px' } }} />
              <p>{t(TEXT.buttons.remove)}</p>
            </DropdownListItem>
          </DropdownList>
        )}
      </ContactActions>
    </ContactItem>
  );
};
