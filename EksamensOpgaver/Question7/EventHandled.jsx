//tjek contact.jsx

//I React håndteres begivenheder (events) lidt anderledes end i almindelig JavaScript.
// I stedet for at tilføje hændelseslyttere direkte til HTML-elementer som i vanilla JavaScript, 
//bruger React JSX-syntaks til at tilføje hændelseslyttere som egenskaber til komponenter.


//onSubmit



const SubmitEvent = () => {
    const handleSubmit = (event) => {
      event.preventDefault(); 
      console.log('Formular indsendt!');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Indsend formular</button>
      </form>
    );
  };
  

  

  //onChange

  import React, { useState } from 'react';

const ChangeEvent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    // Opdaterer tilstanden med inputværdien, når der er ændringer
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Skriv noget..."
    />
  );
};


















<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla JavaScript Form Handling</title>
</head>
<body>

<form id="myForm">
    <label for="myInput">Indtast tekst: </label>
    <input type="text" id="myInput" />
    <button type="submit">Indsend</button>
  </form>

  <script>
    // Global variable til at simulere state
    let inputValue = '';

    // Event listener for inputændringer
    document.getElementById('myInput').addEventListener('input', function(event) {
      inputValue = event.target.value;
      console.log('Input ændret:', inputValue);
    });

    // Event listener for formularsubmit
    document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Forhindrer standardformularsubmit

      console.log('Formular indsendt med værdi:', inputValue);
    });
  </script>

</body>
</html>

