import styled from 'styled-components';
import { ThemeType } from '../../../theme/theme';

export const Layout = styled('section')((props: { theme: ThemeType }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: props.theme.colors.G100,
  minHeight: '100vh',
  color: 'white',
}));

export const SideBar = styled('div')((props: { theme: ThemeType }) => ({
  border: '1px solid gray',
}));

export const Main = styled('div')((props: { theme: ThemeType }) => ({
  width: props.theme.mainLayout.width,
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}));

export const MainLayout = () => {
  return (
    <Layout>
      <SideBar>
        <p>back</p>
      </SideBar>
      <Main>CONTENT HERE</Main>
      <SideBar>
        <p>settings</p>
      </SideBar>
    </Layout>
  );
};
