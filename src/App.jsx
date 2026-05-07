import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop';
import Loader from './components/ui/Loader/Loader';
import useLenisReveal from './hooks/useLenisReveal';

const App = () => {
  const [loading, setLoading] = useState(() => sessionStorage.getItem('shibuya_loader_seen') !== '1');
  const location = useLocation();

  useLenisReveal();

  const getPageClass = () => {
    if (location.pathname === '/capital') return 'capital-page';
    return '';
  };

  const handleLoaderComplete = () => {
    sessionStorage.setItem('shibuya_loader_seen', '1');
    setLoading(false);
  };

  return (
    <div className={getPageClass()}>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<div className="page-loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/incubator" element={<IncubatorPage />} />
          <Route path="/capital" element={<CapitalPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
