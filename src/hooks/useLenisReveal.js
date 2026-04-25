import { useEffect } from 'react';

const useLenisReveal = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    const LenisConstructor = window.Lenis;
    if (!LenisConstructor) {
      return undefined;
    }

    const lenis = new LenisConstructor({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    let animationFrameId;

    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = window.requestAnimationFrame(raf);
    };

    animationFrameId = window.requestAnimationFrame(raf);

    const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'));

    revealNodes.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${index * 80}ms`);
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
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    revealNodes.forEach((element) => observer.observe(element));

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
      lenis.destroy();
    };
  }, []);
};

export default useLenisReveal;
