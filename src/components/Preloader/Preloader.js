import React, { useEffect, useState } from 'react';
import './Preloader.css'; // Import your CSS file

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div>
      {loading && (
        <div className="circle-preloader"></div>
      )}
      
    </div>
  );
};

export default Preloader;
