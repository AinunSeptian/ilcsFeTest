import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom'
import { SideNavigation } from './components';
import { Barang, Perusahaan } from './pages';
import classes from './App.module.css';

function App() {

  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active)
  }

  return (

    <Routes>
      <Route path='/' element={<Perusahaan />} />
      <Route path='/barang' element={<Barang />} />
    </Routes>
  );
}

export default App;
