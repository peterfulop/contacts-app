import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const Theme = (props: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
