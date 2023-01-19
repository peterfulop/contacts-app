import styled from 'styled-components';
import { ThemeType } from '../../../theme/theme';

export const MyHeader = styled('header')((props: { theme: ThemeType }) => ({
  width: '100%',
  color: 'white',
  marginTop: '96px',
  height: '96px',
  border: '1px solid',
  borderColor: props.theme.colors.G50,
  h1: {
    ...props.theme.typography.H1,
    color: props.theme.colors.textPrimary,
  },
  h2: {
    ...props.theme.typography.H2,
    color: props.theme.colors.textPrimary,
  },
  h3: {
    ...props.theme.typography.H3,
    color: props.theme.colors.textPrimary,
  },
}));

export const Header = () => {
  return (
    <MyHeader>
      <h1>Contacts</h1>
      <h2>Contacts</h2>
      <h3>Contacts</h3>
    </MyHeader>
  );
};
