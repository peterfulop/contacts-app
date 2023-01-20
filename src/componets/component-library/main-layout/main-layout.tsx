import styled from 'styled-components';
import { ThemeType } from '../../../theme/theme';
import { Icon } from '../icon-item/icon-item';

export const Body = styled('section')((props: { theme: ThemeType }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: props.theme.colors.G100,
  minHeight: '100vh',
  color: 'white',
}));

export const Main = styled('div')((props: { theme: ThemeType }) => ({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '96px',
}));

export const Navbar = styled('header')((props: { theme: ThemeType }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

export const NavbarCenter = styled('div')((props: { theme: ThemeType }) => ({
  maxWidth: props.theme.mainLayout.width,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  height: '96px',
  border: '1px solid',
  padding: '24px',
  borderColor: props.theme.colors.G50,
  h1: {
    ...props.theme.typography.H1,
    color: props.theme.colors.textPrimary,
  },
}));

export const NavbarActions = styled('div')((props: { theme: ThemeType }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.5rem',
}));

export const NavbarAvatar = styled('div')((props: { theme: ThemeType }) => ({
  width: '10px',
  margin: '32px 36px',
}));

export const NavbarSide = styled('div')((props: { theme: ThemeType }) => ({
  margin: '32px 36px',
}));

export const Content = styled('main')((props: { theme: ThemeType }) => ({
  maxWidth: props.theme.mainLayout.width,
  margin: '0 auto',
  display: 'flex',
  width: '100%',
  padding: '24px',
}));

export const Button = styled('div')((props: { theme: ThemeType }) => ({
  fontWeight: '400',
  fontSize: '14px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '120px',
  height: '40px',
  borderRadius: '20px',
  color: props.theme.colors.textPrimary,
  background:
    'linear-gradient(180deg, rgba(60, 60, 60, 1) 0%, rgba(60, 60, 60, 0) 100%)',
  padding: '1px',
  div: {
    background:
      'linear-gradient(360deg,rgba(40, 40, 40, 0.7) 0%,rgba(40, 40, 40, 1) 70%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    padding: '16px',
  },
  ':hover': {
    background: props.theme.colors.G50,
  },
}));

import Avatar from '../../../assets/avatars/Photo.png';

export const MainLayout = () => {
  return (
    <Body>
      <Main>
        <Navbar>
          <NavbarSide>
            <Icon icon={'BackArrow'} />
          </NavbarSide>
          <NavbarCenter>
            <h1>Contacts</h1>
            <NavbarActions>
              <Icon icon={'Settings'} />
              <img src={Avatar} width={22} height={22} />
              <Button>
                <div>
                  <Icon icon={'Add'} />
                  Add new
                </div>
              </Button>
            </NavbarActions>
          </NavbarCenter>
          <NavbarSide>
            <Icon icon={'LightMode'} />
          </NavbarSide>
        </Navbar>
        <Content>main....</Content>
      </Main>
    </Body>
  );
};
