import { useState, useEffect } from 'react'
import {FallBack as Offline} from './fallback'
import ScreenLoader from './ScreenLoader'
import { supabase } from '../../src/client'
import { Data } from '../types';
import CardContainer from './CardContainer';
const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);
  const [links, setLinks] = useState<Data[]>([]);
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
  useEffect(()=>{
    async function fetchLinks() {
      try {
        const {data, error} = await supabase
          .from('links')
          .select('*')
          .order('id', { ascending: true })
        if (error) {
          throw new Error(error.message)
        }
        setLinks(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchLinks()
  }, [])
  const AppContainer = () => {
    return (
      <>
        Proof that the page is being rendered:
        {links.map((a) => (
          <p key={a.id}>
            {a.name} 
          </p>
        ))}
      </>
    )
  }
  return (
    <>
      {isLoading ? <ScreenLoader /> : isOnline ? <AppContainer /> : <Offline />}
    </>
  );
};
export default App