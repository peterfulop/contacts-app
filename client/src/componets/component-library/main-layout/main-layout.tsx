import styled from '../../../theme/styled';

const Body = styled('section')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.colors.G100,
  minHeight: '100vh',
  color: 'white',
}));

const Main = styled('div')({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '96px',
});

export const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <Body>
      <Main>{props.children}</Main>
    </Body>
  );
};
