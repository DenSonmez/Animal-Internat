import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => { // her opretter vi en error boundary med vores children som prop
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // The effect runs when an error occurs in any child component

    
    const handleError = (error, info) => {
      console.error('Error caught by error boundary:', error, info);
      setHasError(true);
    };

    // her tilføjer vi en eventlistener til vores window, der lytter efter om der sker en fejl
    window.addEventListener('error', handleError);

    // her fjerner vi eventlisteneren igen når komponenten bliver unmounted
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  if (hasError) {
    // Render fallback UI when an error occurs
    return <h1>Something went wrong.</h1>;
  }

  // Render children as usual if no error occurred
  return children;
};

// Example usage of the error boundary
const MyComponent = () => {
  // her bruger vi vores error boundary til at wrappe vores komponent
  return (
    <ErrorBoundary>
      {/* The rest of the component tree goes here */}
    </ErrorBoundary>
  );
};