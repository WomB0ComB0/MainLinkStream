import { useLocation } from "react-router-dom";
export default function NotFound(){
  const location  = useLocation();
  const { statusText, message } = location.state as { statusText: string, message: string } || { statusText: '', message: '' };
  return (
    <div className="">
      <div>
        <i>{statusText || message}</i>
      </div>
    </div>
  )
}