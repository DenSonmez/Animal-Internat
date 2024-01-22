// JSX og den forskel på HTML
// JSX er en udvidelse af JavaScript, som gør det muligt at skrive HTML direkte i JavaScript. 
//JSX tillade JS-udtryk at skrives inde i krøllede parenteser {}, og det tillader også HTML-tags at skrives direkte i JavaScript. 
// Error besked vil ofte pege på den linje, hvor fejlen er opstået.
//Lukket alle tags
////camelCase, className






const Oplysninger = () => {
  const brugernavn = "CPH";
  
  return (
    <div className="container">
      <h1>Velkommen til, {brugernavn}!</h1>
      <input type="text" placeholder="Skriv noget" />
    </div>
  );
};


// HTML eksempel
const htmlElement = 
  <div class="container">
    <h1>Velkommen til, CPH!</h1>
    <input type="text" placeholder="Skriv noget">
  </div>;




// forskellen er at JSX er nemmere at læse og skrive, og det er nemmere at arbejde med i React.




// eksempel 2


// JSX eksempel

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>JSX Form</h2>
      <form>
        <label>
          Indtast noget:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <p>Du har indtastet: {inputValue}</p>
      </form>
    </div>
  );
};


// HTML eksempel

<div>
    <h2>HTML Form</h2>
    <form>
      <label for="inputField">Indtast noget:</label>
      <input type="text" id="inputField" value="" oninput="showInputValue()" />
      <p>Du har indtastet: <span id="outputValue"></span></p>
    </form>

    <script>
      function showInputValue() {
        const inputValue = document.getElementById('inputField').value; // her henter vi værdien fra inputfeltet
        document.getElementById('outputValue').innerText = inputValue; // her sætter vi værdien af vores span til at være den værdi der er i vores inputfelt
      }
    </script>
  </div>