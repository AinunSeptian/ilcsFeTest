import React from 'react';

import { Route, Routes } from 'react-router-dom'
import { Barang, Perusahaan } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Perusahaan />} />
      <Route path='/barang' element={<Barang />} />
    </Routes>
  );
}

export default App;
