import { Contacts } from './componets/pages/contacts';
import { Theme } from './theme/theme-provider';

import styled from './theme/styled';
import { breakPoints } from './theme/theme';

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
    <Theme>
      <Div>
        <Contacts />
      </Div>
    </Theme>
  );
}

export default App;
