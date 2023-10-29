import { useState, useEffect } from 'react';
import { FallBack as Offline } from './browser/dom-states/index';
import ScreenLoader from './browser/dom-states/ScreenLoader';
import Search from './Search';
import { Main } from './semantics/index';
import { SemanticLayout } from './layout/index';

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);
  const [roles, setRoles] = useState<string[] | null>(null);
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
  const loopText = (text: string[]) => {
    let i = 0;
    const interval = setInterval(() => {
      setRoles([text[i]]);
      i = (i + 1) % text.length;
    }, 2000);
    return () => clearInterval(interval);
  };
  useEffect(() => {
    const text = ['Developer', 'Designer', 'Creator', 'Student'];
    loopText(text);
  }, []);
  const Header = () => (
    <div className="flex items-center justify-center">
      <h1 className="px-10 text-3xl font-semibold select-none md:text-5xl lg:text-6xl sm:text-4xl">
        <span className="mr-3">I am a</span>
        {!roles ? 'Developer' : roles}
      </h1>
    </div>
  );
  const AppContainer = () => (
    <SemanticLayout>
      <Header />
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
