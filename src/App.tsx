import { BrowserRouter } from 'react-router-dom';
import { GenerateBrowserRouter } from './componets/component-library/generate-browser-router/generate-browser-router';
import styled from './theme/styled';
import { breakPoints } from './theme/theme';
import { Theme } from './theme/theme-provider';

const Div = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  marginTop: '96px',
  [`@media screen and (max-width: ${breakPoints.lg})`]: {
    marginTop: '48px',
  },
  [`@media screen and (max-width: ${breakPoints.md})`]: {
    marginTop: '24px',
  },
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    marginTop: '0px',
  },
});

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GenerateBrowserRouter />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
