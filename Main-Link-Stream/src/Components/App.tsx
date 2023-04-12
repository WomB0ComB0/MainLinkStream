import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from './Routes/404'
import {FallBack as Offline} from './Cache/fallback'

function Loading() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);
  return (
    <>
    {/* Have a transition animation */}
      {loading ? <div>loading...</div> : <div>loaded</div>}
    </>
  )
}
const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() =>{
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };

  },[])
  return (
    <>
      {!isOnline ?
        <Offline/> :
          <Router>
            <Routes>
              <Route path="*" element={<NotFound></NotFound>}/>
            
            </Routes>
          </Router>
      }
    </>
  )
}

export default App
export {Loading}