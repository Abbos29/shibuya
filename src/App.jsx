// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import IncubatorPage from './Pages/IncubatorPage';
import CapitalPage from './Pages/CapitalPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/incubator" element={<IncubatorPage />} />
        <Route path="/capital" element={<CapitalPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
