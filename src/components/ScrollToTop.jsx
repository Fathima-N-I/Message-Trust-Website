import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll position when the route changes (SPA default is to keep scroll).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}
