import { useEffect } from 'react';

const LENIS_KEY = '__shibuyaLenis';

const useLenisReveal = (dependencyKey) => {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let animationFrameId;
    let retryTimer;
    let attempts = 0;

    const startLenis = () => {
      if (window[LENIS_KEY]) {
        return;
      }

      const LenisConstructor = window.Lenis;
      if (!LenisConstructor) {
        if (attempts < 40) {
          attempts += 1;
          retryTimer = window.setTimeout(startLenis, 50);
        }
        return;
      }

      const lenis = new LenisConstructor({
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });

      const raf = (time) => {
        lenis.raf(time);
        animationFrameId = window.requestAnimationFrame(raf);
      };

      animationFrameId = window.requestAnimationFrame(raf);
      window[LENIS_KEY] = lenis;
    };

    startLenis();

    return () => {
      if (retryTimer) {
        window.clearTimeout(retryTimer);
      }
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'));

    document.body.classList.add('reveal-ready');

    revealNodes.forEach((element, index) => {
      element.classList.remove('is-revealed');
      element.style.setProperty('--reveal-delay', `${index * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    revealNodes.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [dependencyKey]);
};

export default useLenisReveal;
