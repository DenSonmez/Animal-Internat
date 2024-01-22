import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartPageComponent() {
  const navigate = useNavigate();

  const navigateToPetsPage = () => {
    navigate('/pets');
  };

  return (
    <>
      <div className="contact">
        <h1>Velkommen</h1>
        <h2> - det er dejligt du er her! </h2>
        <p>Vi har et stort udvalg af kæledyr <br></br> som alle mangler et trygt hjem</p>

        <button className="show-button" onClick={navigateToPetsPage}>
          Find nye venner
        </button>
            </div>
    </>
  );
}

export default StartPageComponent;
