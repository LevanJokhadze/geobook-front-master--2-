import React, { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  children: ReactNode;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
  const location = useLocation();
  const [prevPathname, setPrevPathname] = useState<string | null>(null);

  useEffect(() => {
    if (location.pathname !== prevPathname || !prevPathname) {
      window.scrollTo(0, 0);
    }
    setPrevPathname(location.pathname);
  }, [location.pathname, location.key, prevPathname]);

  return <>{children}</>;
};

export default ScrollToTop;