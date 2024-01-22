// vores kode indeholder en masse komponenter, som vi kan genbruge i andre komponenter, 
//og derfor er det en god ide at lave dem som en klasse, så vi kan importere dem i andre komponenter

//Samlet set giver brugen af komponenter en mere struktureret, genanvendelig og vedligeholdelig tilgang til at bygge webapplikationer, 
//hvilket gør udviklingsprocessen mere effektiv og konsistent.



//Explain the benefits of using components compared to how you would build a web application in vanilla javascript.



const ButtonComponent = () => {
  const handleButtonClick = () => {
    console.log('Button clicked in React!');
    document.body.style.backgroundColor = '#e6e6e6';
  };

  return (
    <button onClick={handleButtonClick}>
      Click me in React
    </button>
  );
};


const App = () => {
    return (
      <div>
        <h1>React App</h1>
        <ButtonComponent />
      </div>
    );
  };




    // vanilla javascript.


    function handleButtonClick() {
        console.log('Button clicked!');
        document.body.style.backgroundColor = '#e6e6e6';
      }
      
      function renderApp() {
        const appContainer = document.getElementById('app');
        const button = document.createElement('button');
        button.textContent = 'Click me in Vanilla JS';
        button.addEventListener('click', handleButtonClick);
      
        appContainer.appendChild(button);
      }
      
      renderApp();

      //uden komponeter:

      // kan det være mere udfordrende at genbruge kode
      // kan det være svært at vedligeholde kode
      //den komponenter kan det være mere udfordrende at lokalisere og løse fejl, især i større koderbasen.