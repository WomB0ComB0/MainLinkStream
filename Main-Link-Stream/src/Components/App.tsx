import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from './Routes/404'
import {FallBack as Offline} from './Cache/fallback'
import ScreenLoader from './Frontend/Extras/ScreenLoader'

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
      {!isOnline ? 
        (<Offline/>) : isLoading ? (<ScreenLoader/>) : 
          (<Router>
            <Routes>
              <Route path="*" element={<NotFound></NotFound>}/>
            </Routes>
          </Router>)
      }
    </>
  );
};

export default App