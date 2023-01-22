import { Contacts } from './componets/pages/contacts';
import { Theme } from './theme/theme-provider';

import styled from './theme/styled';

export const Div = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '120px',
  justifyContent: 'center',
  width: '100%',
});

export const Col = styled('div')({
  margin: '32px 36px',
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
