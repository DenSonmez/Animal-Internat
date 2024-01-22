// App.jsx
import React, { useState } from 'react';
import './index.css';
import MainLayout from './layouts/MainLayout';
import StartPageComponent from './components/StartPageComponent';
import AdminPage from './pages/AdminPage';
import AdminAddPage from './pages/AdminAddPage';
import ContactPage from './pages/ContactPage';
import FlexboxPage from './pages/FlexboxPage';
import GridPage from './pages/GridPage';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ViewPets from './pages/ViewPets';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const routes = createBrowserRouter( // tager en række konfigurationsparametre og returnerer en router.
    createRoutesFromElements( // array af React elementer og returnerer et array af ruter.
      <Route path="/" element={<MainLayout />}>
        <Route index element={<StartPageComponent />} />
        <Route path="admin" element={<AdminPage isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>} />
        <Route path="admin/add" element={<AdminAddPage isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>} />
        <Route path="contact" element={<ContactPage />}/>
        <Route path='pets' element={<ViewPets isAdmin={isAdmin} />}/>
        <Route path='flexbox' element={<FlexboxPage />} />
        <Route path='grid' element={<GridPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={routes} /> //  ( giver komponenttræet adgang til routinginformation.)
  );
}

export default App;
