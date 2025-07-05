
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-corporate-blue border-t-transparent mx-auto mb-4"></div>
        <p className="text-corporate-blue font-montserrat text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
