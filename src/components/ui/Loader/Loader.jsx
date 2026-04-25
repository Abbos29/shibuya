import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import s from './Loader.module.scss';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressTimer;
    let finishTimer;

    const completeLoader = () => {
      setProgress(100);
      finishTimer = window.setTimeout(() => {
        onComplete();
      }, 250);
    };

    progressTimer = window.setInterval(() => {
      setProgress((prev) => (prev >= 90 ? prev : prev + 5));
    }, 60);

    if (document.readyState === 'complete') {
      completeLoader();
    } else {
      window.addEventListener('load', completeLoader, { once: true });
      // Safety timeout: never block the app even if some resource hangs.
      finishTimer = window.setTimeout(completeLoader, 2200);
    }

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(finishTimer);
      window.removeEventListener('load', completeLoader);
    };
  }, [onComplete]);

  return (
    <div className={s.loader}>
      <div className={s.loading}>
        <div className={s.progress_circle}>
          <div className={s.circle}>
            <div className={s.inner_circle}>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className={s.enter}>
        <h2>SHIBUYA</h2>
        <h5>Loading station...</h5>
      </div>
    </div>
  );
};

Loader.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Loader;
