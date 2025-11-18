import { AppProviders } from '@/core/contexts/app';
import { AppRouter } from '@/router';

/**
 * @component App
 * @summary Root application component that wraps the entire app with providers and routing
 * @domain core
 * @type root-component
 * @category application
 */
function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;
