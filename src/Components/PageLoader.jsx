import React, { useState, useEffect } from 'react';

import LoadingSpinner from './LoadingSpinner';
import { useLocation } from 'react-router';

const PageLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); 
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <LoadingSpinner />;

  return children;
};

export default PageLoader;
