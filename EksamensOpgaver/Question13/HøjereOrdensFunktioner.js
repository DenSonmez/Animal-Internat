//Højere-ordens funktion er en funktion, der enten tager en anden funktion 
//som argument eller returnerer en funktion som resultat.
// formålet er er at øge fleksibiliteten og genbrugeligheden af funktioner.


function capitalize1(name) {
  return name.toUpperCase();
}

function amigosNames1(names) {
  let functionToTransformNames = [];
  for (let i = 0; i < names.length; i++) {
    functionToTransformNames.push(capitalize1(names[i])); 
  }
  return functionToTransformNames;
}


const names1 = ['Ras', 'Marcus', 'Victor'];

const namesToUpperCase1 = amigosNames1(names1);
console.log(namesToUpperCase1);
// Output: ['RAS', 'MARCUS', 'VICTOR']




// Højere-ordens funktion
function amigosNames(names, functionToTransformNames) { // callback funktion og  et argument
  return names.map(functionToTransformNames);
}

function capitalize(name) {
  return name.toUpperCase();
}
const names = ['Ras', 'Marcus', 'Victor'];

// Anvendelse af højere-ordens funktion
const namesToUpperCase = amigosNames(names, capitalize); // her gør smider vi capitalize funktionen ind i amigosNames funktionen
console.log(namesToUpperCase);
// Output: ['RAS', 'MARCUS', 'VICTOR']



// map og filter er højere-ordens funktioner bruges fordi


// Eksemoel 2
// Højere-ordens funktion
function filterList(list, conditionFunction) {
    return list.filter(conditionFunction);
  }
  
  // Almindelig betingelsesfunktion
  function isEven(number) {
    return number % 2 === 0;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Anvendelse af højere-ordens funktion
  const evenNumbers = filterList(numbers, isEven);
  console.log(evenNumbers);
  // Output: [2, 4, 6, 8, 10]