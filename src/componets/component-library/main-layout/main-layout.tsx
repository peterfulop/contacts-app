import styled from 'styled-components';
import { ThemeType } from '../../../theme/theme';
import { Icon } from '../icon-item/icon-item';

export const Layout = styled('section')((props: { theme: ThemeType }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: props.theme.colors.G100,
  minHeight: '100vh',
  color: 'white',
}));

export const SideBar = styled('div')((props: { theme: ThemeType }) => ({
  border: '1px solid gray',
  marginTop: '96px',
}));

export const Main = styled('div')((props: { theme: ThemeType }) => ({
  width: props.theme.mainLayout.width,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '96px',
}));

export const MainLayout = () => {
  return (
    <Layout>
      <SideBar>
        <Icon icon={'Add'} />
      </SideBar>
      <Main>
        <header>HEADSER</header>
        <main>main....</main>
      </Main>
      <SideBar>
        <p>settings</p>
      </SideBar>
    </Layout>
  );
};
