import React,{useEffect} from 'react';
import Route1 from './Template/Navigation/Rout';
import { useSelector } from 'react-redux';
import LoginRoute from "./Template/Navigation/LoginRoute";
// import 'react-toastify/dist/ReactToastify.css';
function App() {

  const sucess = useSelector((state:any) => state.loginData?.isSuccess)
  const Token = localStorage.getItem("AccessToken")
  useEffect(() => {
    
    
  }, [Token])
  return (
 <div>
   { sucess ? <Route1/>:<LoginRoute/> }
   
 </div>
  );
}

export default App;
