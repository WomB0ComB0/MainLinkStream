import { useState, useEffect } from 'react'
import NotFound from './404'
import {FallBack as Offline} from './fallback'
import ScreenLoader from './ScreenLoader'

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);
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
  const handleOnline = () => { setIsOnline(true); };
  const handleOffline = () => { setIsOnline(false); };
  return (
    <>
     
    </>
  );
};

export default App