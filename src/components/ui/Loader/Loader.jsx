import React, { useState, useEffect } from 'react';
import s from './Loader.module.scss';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [canEnter, setCanEnter] = useState(false);

  useEffect(() => {
    let loadedItems = 0;
    const totalItems = document.querySelectorAll('img, script, link[rel="stylesheet"]').length;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntriesByType('resource')) {
        if (['img', 'link', 'script'].includes(entry.initiatorType)) {
          loadedItems += 1;
          setProgress(Math.floor((loadedItems / totalItems) * 100));
        }
      }
    });
    
    observer.observe({ entryTypes: ['resource'] });

    window.addEventListener('load', () => {
      setProgress(100);
      setIsLoaded(true);
    });

    return () => observer.disconnect();
  }, []);

  const handleEnter = () => {
    if (isLoaded) {
      setCanEnter(true);
      onComplete();
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && isLoaded) {
        handleEnter();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLoaded]);

  return (
    <div className={s.loader}>
      {/* Показываем .loading, пока не завершена загрузка */}
      <div className={`${s.loading} ${isLoaded ? s.hidden : ''}`}>
        <div className={s.progress_circle}>
          <div className={s.circle}>
            <div className={s.inner_circle}>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Показываем .enter, только когда загрузка завершена */}
      <div className={`${s.enter} ${isLoaded ? '' : s.hidden}`} onClick={handleEnter}>
        <h2>ENTER</h2>
        <h5>SHIBUYA STATION</h5>
      </div>

      {isLoaded && (
        <>
          <div className={s.loader_top}>
            <h3>次の駅は渋谷です！</h3>
          </div>

          <div className={s.loader_bottom}>
            <div className="container">
              <div className={s.box}>
                <p>The next station is Shibuya!</p>
                <p>Welcome to the pixel art collection, inspired by Japanese and anime culture.</p>
                <img src="/loader-bottom-icon.jpg" alt="icon" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Loader;
