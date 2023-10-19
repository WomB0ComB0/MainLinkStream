import React, { useState, useEffect } from 'react'
import { FallBack as Offline} from './browser/dom-states/index'
import ScreenLoader from './browser/dom-states/ScreenLoader'
import Search from './Search';
const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);
  const [roles, setRoles] = useState<String[] | null>(null);
  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  },[])
  // useEffect(() => {
  //   const text = ['Developer', 'Designer', 'Creator', 'Student'];
  //   loopText(text);
  // }, []);
  // const loopText = (text: string[]) => {
  //   let i = 0;
  //   const interval = setInterval(() => {
  //     setRoles([text[i]]);
  //     i = (i + 1) % text.length;
  //   }, 2000);
  //   return () => clearInterval(interval);
  // };
  const handleOnline = () => { setIsOnline(true); };
  const handleOffline = () => { setIsOnline(false); };
  const Header = () => {
    return (
      <div className='flex items-center justify-center'>
        <h1 className='px-10 text-3xl font-semibold select-none md:text-5xl lg:text-6xl sm:text-4xl'>
          <span className='mr-3'>I am a</span>
          {!roles ? 'Developer' : roles}
        </h1>
      </div>
    )
  }
  const AppContainer = () => {
    return (
      <React.Fragment>
        <Header />
        <Search />
      </React.Fragment>
    )
  }
  return (
    <section className='w-full h-screen ml-auto mr-auto '>
      {isLoading ? <ScreenLoader /> : isOnline ? <AppContainer /> : <Offline />}
    </section>
  );
};
export default App