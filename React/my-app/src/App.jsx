
import './App.css'
// import Login from './Components/Login';
// import { useState } from 'react';
// import Logout from './Components/Logout';
import Listitem from './Components/Listitem';
import Table from './Components/Table';
import Data from './Components/Data';
import Forms from './Components/Forms';
import Form from './Components/Form';
import SignUpForm from './Components/SignupForm';
import FormLib from './Components/FormLib';
import Effect from './Components/Effect';
import GitHubUsers from './Components/Users';
import Learn from './Components/Learn';
import Window from './Components/Window'; 
import Container from './Components/Container'; 

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if(isLoggedIn){
  //   return <Logout />
  // }else{
  //   return <Login />
  // }
  // return(
  //   <div>{isLoggedIn ? <Logout /> : <Login />}</div>
  // )
  // if(!isLoggedIn){
  //   return <Login />
  // }
  return (
    // <div>{isLoggedIn && <Logout />}</div>
    // <FormLib />
    <div>
      {/* <h2>I am coming from main app</h2> */}
      <Container />
    </div>
  )
   
}

export default App
