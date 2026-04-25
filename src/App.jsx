import { Suspense, lazy, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop';
import Loader from './components/ui/Loader/Loader';
import useLenisReveal from './hooks/useLenisReveal';

const HomePage = lazy(() => import('./Pages/HomePage'));
const IncubatorPage = lazy(() => import('./Pages/IncubatorPage'));
const CapitalPage = lazy(() => import('./Pages/CapitalPage'));

const App = () => {
  const [loading, setLoading] = useState(() => sessionStorage.getItem('shibuya_loader_seen') !== '1');
  const location = useLocation();

  useLenisReveal(location.pathname);

  const getPageClass = () => {
    if (location.pathname === '/capital') return 'capital-page';
    return '';
  };

  const handleLoaderComplete = () => {
    sessionStorage.setItem('shibuya_loader_seen', '1');
    setLoading(false);
  };

  if (loading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

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
