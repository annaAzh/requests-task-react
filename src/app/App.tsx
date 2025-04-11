import { RouteProvider } from './providers';
import { StoreProvider } from './providers/storeProvider';

export const App = () => {
  return (
    <StoreProvider>
      <RouteProvider />
    </StoreProvider>
  );
};

export default App;
