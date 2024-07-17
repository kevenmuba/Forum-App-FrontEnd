import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './Components/users/Login';
import Register from './Components/users/Register';
import axios from './axiosConfig';
import { createContext, useContext, useEffect, useState } from 'react';
import AskQuestion from './Components/questions/AskQuestion';
import Answers from './Components/answers/Answers';

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
        <Route path='/questions' element = {<AskQuestion/>}/>
        <Route path='/answers' element = {<Answers/>}/>
       

      </Routes>
      </AppState.Provider>
    </div>
  );
}

export default App;
