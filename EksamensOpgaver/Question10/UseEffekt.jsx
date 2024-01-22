//What is the purpose of the useEffect hook?

// useEffect er en hook, der gør det muligt at udføre sideeffekter i funktionelle komponenter.
// også bruges til at håndtere livscyklusmetoder i funktionelle komponenter.

// Explain the need for the dependencies array in the useEffect hook.

// det er en liste over variabler, der bruges i useEffect hook. Hvis en af disse variabler ændres, udføres useEffect igen.






import React, { useState, useEffect } from 'react';

const ClickCounterComponent = () => {
  const [clickCount, setClickCount] = useState(0);

  // useEffect bruges til at lytte efter ændringer i clickCount
  useEffect(() => {
    // Simulering af en handling, der udføres, når clickCount ændres
    console.log(`Antal klik: ${clickCount}`);
  }, [clickCount]);

  
  return (
    <div>
      <h2>Click Counter</h2>
      <p>Antal klik: {clickCount}</p>
      <button onClick={() => setClickCount((prevCount) => prevCount + 1)}>
        Klik her
      </button>
    </div>
  );
};

export default ClickCounterComponent;

































import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);

  // useEffect bruges til at håndtere asynkron datahentning ved komponentens indlæsning
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulering af asynkron API-anmodning med fetch
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        
        // Opdatering af React-state med de modtagne data
        setData(result);
      } catch (error) {
        console.error('Fejl ved hentning af data:', error);
      }
    };

    fetchData(); // Kald fetchData ved komponentens indlæsning

    // useEffect uden dependencies array, så det udføres kun ved komponentens indlæsning
  }, []);

  // Resten af komponentens kode
  return (
    <div>
      <h2>Data Hentning</h2>
      {data ? (
        <p>Data modtaget: {JSON.stringify(data)}</p>
      ) : (
        <p>Henter data...</p>
      )}
    </div>
  );
};

export default DataFetchingComponent;







import React, { useState, useEffect } from 'react';

const ClickCounterComponent = () => {
  const [clickCount, setClickCount] = useState(0);

  // useEffect bruges til at lytte efter ændringer i clickCount
  useEffect(() => {
    // Simulering af en handling, der udføres, når clickCount ændres
    console.log(`Antal klik: ${clickCount}`);
  }, [clickCount]);


  return (
    <div>
      <h2>Click Counter</h2>
      <p>Antal klik: {clickCount}</p>
      <button onClick={() => setClickCount((prevCount) => prevCount + 1)}>
        Klik her
      </button>
    </div>
  );
};

export default ClickCounterComponent;