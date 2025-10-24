import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png'
const LoadingSpinner = ({ loading, minDuration = 2000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShow(false), minDuration);
      return () => clearTimeout(timer);
    }
  }, [loading, minDuration]);

  if (!show) return null;

  return (
    <div className="spinner-container w-full my-20">
      <div className="spinner">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default LoadingSpinner;