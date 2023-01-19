import styled from 'styled-components';
import { ThemeType } from '../../../theme/theme';

export const Content = styled('main')((props: { theme: ThemeType }) => ({
  //   backgroundColor: props.theme.colors.G100,
  width: props.theme.mainLayout.width,
}));
