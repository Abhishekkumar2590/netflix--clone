import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Home/Login/Login'
import Player from './Pages/Player/Player' // Ensure this import is correct and the component is capitalized
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase' // Ensure this import is correct
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {  


  const navigate = useNavigate();
  useEffect(() => {
     onAuthStateChanged( auth , async (user) => {
      if (user) {
        console.log(" Logged In:", user);
        navigate('/');
      } else {
        console.log(" logged out.");
        navigate('/login');
      }
    });
  }, [navigate]);
  return (
    <div>
       <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* Add the player route below, ensure the component is capitalized */}
        <Route path='/player/:id' element={<Player/>} />
      </Routes>
    </div>
  )
}

export default App

