import { Contacts } from './componets/pages/contacts';
import { Theme } from './theme/theme-provider';

import styled from './theme/styled';

const Div = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  marginTop: '96px',
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
