import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page after a slight delay
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'  // Optional: can be 'auto' or 'smooth'
      });
    }, 100); // 100ms delay to ensure the component has fully mounted
  }, [pathname]);

  return null;
}

export default ScrollToTop;
