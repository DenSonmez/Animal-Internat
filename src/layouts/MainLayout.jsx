// MainLayout.jsx
import React from 'react';
import '../index.css';
import NavBar from '../components/NavBar';
import { Outlet, useLocation } from 'react-router-dom';



function MainLayout() {
  const location = useLocation();

  
  const isPetsPage = location.pathname === '/pets';

  const boxClass = isPetsPage ? "rounded-box large-rounded-box" : "rounded-box small-box";

  return (
    <>
      <NavBar />
        <div className={boxClass} id="animalContainer">
          <Outlet /> 
        </div>
      
    </>
  );
}

export default MainLayout;

