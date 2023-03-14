import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
