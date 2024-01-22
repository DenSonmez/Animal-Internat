

// Beskriv formålet med props i React.?
// props er en måde at sende data fra en komponent til en anden komponent. 
//Formålet med props er give komponenter mulighed for modtage og bruge data fra en anden komponent,.

//props er eksterne data, der sendes til komponenten, mens state er interne data, der håndteres af komponenten selv.

// i vores kode bruger det i blandt i adminAddPage.jsx og Aps.jsx sammen med state




function App() {
    const carBrands = ["Toyota", "BWW", "Ford", "Chevrolet"];
    const info = "Bruger ooplysninger";
    const user = { name: "Thomas", age: 55 };
  
    return (
      <div>
        <ChildComponent1 brands={carBrands} />
        <ChildComponent2 info={info} user={user} />
      </div>
    );
  }
  
  // ChildComponent
  import React from 'react';
  
  function ChildComponent1(props) {
    return (
      <div>
        <h2>Bil Mærker</h2>
        <ul>
          {props.brands.map((brand, index) => (
            <li key={index}>{brand}</li> 
          ))}
        </ul>
      </div>
    );
  }
  
  // ChildComponent2
  import React from 'react';
  
  function ChildComponent2(props) {
    return (
      <div>
        <p>{props.info}</p>
        <p>{`Bruger: ${props.user.name}, Alder: ${props.user.age}`}</p>
      </div>
    );
  }
  






function CarListApp({ initialCars }) {
  const [cars, setCars] = useState(initialCars);

  const addCar = (newCar) => {
    setCars([...cars, newCar]);
  };

  const removeCar = (index) => {
    const updatedCars = [...cars];
    updatedCars.splice(index, 1);
    setCars(updatedCars);
  };

  useEffect(() => {
    console.log('Cars er blevet opdateret:', cars);
  }, [cars]);

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




function ParentComo() {
  const initialCarList = ["KIA", "AUDI", "BMW"];

  return (
    <div>
      <CarListApp initialCars={initialCarList} />
    </div>
  );
}