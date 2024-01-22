
//forklar det role saten spiller i React?
//state er et objekt, der indeholder data, der er relevante for en komponent og som kan ændre sig over tid.

//props er eksterne data, der sendes til komponenten, mens state er interne data, der håndteres af komponenten selv.
//i vores kode bruger det i blandt i adminAddPage.jsx og Aps.jsx sammen med props



import React, { useState, useEffect } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // useEffect til at lytte efter ændringer i count
  useEffect(() => {
    // Handling, der skal udføres når count ændres
    console.log(`Count er blevet opdateret: ${count}`);

  }, [count]); // listen afhængigheder (dependencies) angiver, hvad useEffect skal lytte efter

  return (
    <div>
      <h2>Tæller: {count}</h2>
      <button onClick={increment}>Forøg</button>
      <button onClick={decrement}>Formindsk</button>
    </div>
  );
}

export default CounterApp;



function CarListApp() {
    const [cars, setCars] = useState(["KIA", "AUDI", "BMW"]);

  const addCar = (newCar) => {
      setCars([...cars, newCar]);
  };

  const removeCar = (index) => {
    // Fjerner bilen fra listen
    const updatedCars = [...cars];
    updatedCars.splice(index, 1); 
    setCars(updatedCars);
  };

  return (
    <div>
      <h2>Liste af Biler</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car}
            <button onClick={() => removeCar(index)}>Fjern</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Indtast en ny bil"
          onChange={(e) => addCar(e.target.value)}
        />
      </div>
    </div>
  );
}

export default CarListApp;
