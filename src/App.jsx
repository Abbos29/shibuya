import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import IncubatorPage from './Pages/IncubatorPage';
import CapitalPage from './Pages/CapitalPage';
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop';

const App = () => {

  const location = useLocation(); 

  const getPageClass = () => {
    if (location.pathname === '/capital') return 'capital-page';
    // return 'default-page';
  };

  return (
    <>

    <div className={getPageClass()}>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/incubator" element={<IncubatorPage />} />
        <Route path="/capital" element={<CapitalPage />} />
      </Routes>
      
      <Footer />
    </div>
    </>
  );
};

export default App;
