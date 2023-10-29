import { useState, useEffect } from 'react';
import { FallBack as Offline } from './browser/dom-states/index';
import ScreenLoader from './browser/dom-states/ScreenLoader';
import Search from './Search';
import { Main } from './semantics/index';
import { SemanticLayout } from './layout/index';

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);
  const handleOnline = () => {
    setIsOnline(true);
  };
  const handleOffline = () => {
    setIsOnline(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 99999);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  const AppContainer = () => (
    <SemanticLayout>
      {/* <Header /> */}
      <Search />
    </SemanticLayout>
  );
  return (
    <Main className="w-full h-screen ml-auto mr-auto ">
      {isLoading && <ScreenLoader />}
      {!isLoading && isOnline && <AppContainer />}
      {!isLoading && !isOnline && <Offline />}
    </Main>
  );
};
export default App;
