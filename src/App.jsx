import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import IncubatorPage from './Pages/IncubatorPage';
import CapitalPage from './Pages/CapitalPage';
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop';
import HomePage from './Pages/HomePage';
import Loader from './components/ui/Loader/Loader';

const App = () => {

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); 

    return () => clearTimeout(timer);
  }, []);

  const getPageClass = () => {
    if (location.pathname === '/capital') return 'capital-page';
    // return 'default-page';
  };

  if (loading) {
    return <Loader />;  
  }

  return (
    <>

      <div className={getPageClass()}>
        <Header />
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/incubator" element={<IncubatorPage />} />
          <Route path="/capital" element={<CapitalPage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
