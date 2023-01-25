import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { CustomTheme } from './theme';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as any as ThemedStyledComponentsModule<CustomTheme>;

export { css, keyframes, ThemeProvider };
export default styled;
