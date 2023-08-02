

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import Header from './Components/Header';
import { useEffect } from 'react';
import { login } from './Services/authService';

import VideoDetail from "./Pages/VideoDetail"



function App() {
  useEffect(() => {
    login.setAxiosToken();
  }, []);

  return <>
    <Header/>
  <BrowserRouter>

    <Routes>
      <Route element={
        <Accueil />
      } path={"/"} />
      <Route element={
        <VideoDetail />
      } path={"/video/:id"} />
    </Routes>

          
  </BrowserRouter>
  </>;
  
}

export default App;