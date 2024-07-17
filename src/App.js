import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/LandingLayout/Login';
import Register from './pages/LandingLayout/Register';
import axios from './axiosConfig';
import { createContext, useEffect, useState } from 'react';

export const AppState = createContext();
function App() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const [user,setuser] = useState([])
  async function checkUser() {
    try {
      const { data } = 
     await axios.get("/users/check", {
        headers: { Authorization: `Bearer ${token}` },
      });
      // await axios.get('/users/get')
     setuser(data);
      // console.log(data)
     
    } catch (error) {
      navigate("/login");
      console.log(error.response);
    }
  }
  useEffect(()=>{
    checkUser()

  },[])

  return (
    <div >
      <AppState.Provider value={{ user, setuser }}>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>

      </Routes>
      </AppState.Provider>
    </div>
  );
}

export default App;
