import { MainLayout } from './componets/component-library/main-layout/main-layout';
import { Contacts } from './componets/pages/contacts';
import { Theme } from './theme/theme-provider';

function App() {
  return (
    <Theme>
      <MainLayout>
        <Contacts />
      </MainLayout>
    </Theme>
  );
}

export default App;
