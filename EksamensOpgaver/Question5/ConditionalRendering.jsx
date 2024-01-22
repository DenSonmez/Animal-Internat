
// Describe how conditional rendering is achieved in React.
// React opnås betinget rendering ved at bruge JavaScript's logik inden for JSX. For at bestemme om en komponet skal renders eller ej.
//Man kan bruge forskellige metoder til betinget rendering af komponenter baseret på betingelser.
// her det metoder man kan bruge: if/else, ternary operator, switch/case, && operator.


//Provide an example of using the ternary operator for conditional rendering.
// vi bruger det i vores kode i blandt andet i adminAdd ved loging






import React from 'react';

const UserCard = ({ isLoggedIn, username }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Velkommen, {username}!</h2>
          <p>Du har adgang til eksklusive funktioner.</p>
        </div>
      ) : (
        <div>
          <h2>Log ind for at få adgang</h2>
          <p>Har du ikke en konto? Registrer dig nu!</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;






const TemperatureDisplay = ({ temperature }) => {
  return (
    <div>
      <p>
        Udendørstemperaturen er {temperature >= 20 ? 'varm' : 'ko1ld'}.
      </p>
    </div>
  );
};

export default TemperatureDisplay;
