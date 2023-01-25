import { BrowserRouter } from 'react-router-dom';
import { GenerateBrowserRouter } from './componets/component-library/generate-browser-router/generate-browser-router';
import { Theme } from './theme/theme-provider';

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
