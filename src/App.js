import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.scss';

import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/second" element={<SecondPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
