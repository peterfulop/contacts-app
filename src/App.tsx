import { Contacts } from './componets/pages/contacts';
import { Theme } from './theme/theme-provider';

import { useState } from 'react';
import Modal from './componets/component-library/modal/modal';
import styled from './theme/styled';

export const Div = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '60px',
  justifyContent: 'center',
  width: '100%',
});

export const Col = styled('div')({
  margin: '32px 36px',
});

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Theme>
      {modalVisible && <Modal onClose={() => setModalVisible(false)} />}
      <Div>
        <Contacts onShowModal={setModalVisible} />
      </Div>
    </Theme>
  );
}

export default App;
