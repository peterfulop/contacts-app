import { MainLayout } from './componets/component-library/main-layout/main-layout';
import { Theme } from './theme/theme-provider';

function App() {
  return (
    <Theme>
      <MainLayout />
    </Theme>
  );
}

export default App;
