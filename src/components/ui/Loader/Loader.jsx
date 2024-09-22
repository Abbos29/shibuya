import React, { useState, useEffect } from 'react';
import s from './Loader.module.scss';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          setIsLoaded(true);
          clearInterval(interval);
          return 100;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s.loader}>

      {!isLoaded && (
        <div className={s.loading}>
          <div className={s.progress_circle}>
            <div className={s.circle}>
              <div className={s.inner_circle}>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {isLoaded && (
        <div className={s.enter}>
          <h2>ENTER</h2>
          <h5>SHIBUYA STATION</h5>
        </div>
      )}




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
