// What is the spread operator in JavaScript and how does it differ from the rest operator?


// Spread operatoren: Det bruges ofte til at kopiere arrays, kombinere dem eller sprede værdier i funktioner eller objekter.
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];

console.log(array2); // Output vil være: [1, 2, 3, 4, 5]


const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };

console.log(obj2); // Output vil være: { a: 1, b: 2, c: 3, d: 4 }



const str = "Hello";
const strArray = [...str];

console.log(strArray); // Output se sådan her ud: ["H", "e", "l", "l", "o"]




//Rest 
// Rest parameteret gør det muligt at samle en række argumenter i et array uden at skulle angive dem enkeltvis som argumenter til funktionen.

// Uden rest-operatoren
function exampleFunctionWithoutRest(firstArg, secondArg, thirdArg, fourthArg, fifthArg) {
  console.log(`Første argument: ${firstArg}`);
  console.log(`Andet argument: ${secondArg}`);
  console.log(`Tredje argument: ${thirdArg}`);
  console.log(`Fjerde argument: ${fourthArg}`);
  console.log(`Femte argument: ${fifthArg}`);
}

exampleFunctionWithoutRest('A', 'B', 'C', 'D', 'E');




// Med rest-operatoren
function exampleFunctionWithRest(firstArg, secondArg, ...restArgs) {
  console.log(`Første argument: ${firstArg}`);
  console.log(`Andet argument: ${secondArg}`);
  console.log(`Resten af argumenterne: ${restArgs}`);
}

exampleFunctionWithRest('A', 'B', 'C', 'D', 'E');

// Output vil være:
// Første argument: A
// Andet argument: B
// Resten af argumenterne: C,D,E



// Eksempel med funktion og rest-operatoren
function printColors(primaryColor, secondaryColor, ...additionalColors) {
  console.log(`Primary Color: ${primaryColor}`);
  console.log(`Secondary Color: ${secondaryColor}`);
  console.log(`Additional Colors: ${additionalColors.join(', ')}`);
}

printColors('Red', 'Blue', 'Green', 'Yellow', 'Purple');

// Resultat:
// Primary Color: Red
// Secondary Color: Blue
// Additional Colors: Green, Yellow, Purple











function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0); // reduce() metoden reducerer et array til en enkelt værdi. Den udfører en funktion for hvert element i arrayet.
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output vi være: 15
  




function concatenateStrings(separator, ...strings) {
    return strings.join(separator); // join() metoden returnerer et nyt string objekt, der indeholder en streng af elementerne i et array.
  }
  
  const result = concatenateStrings("-", "apple", "orange", "banana");
  console.log(result); // Output vil se sådan her ud: "apple-orange-banana"
  



function displayColors(background, ...colors) { // denen funktion tager en baggrundsfarve og en liste af farver som argumenter.
  console.log("Baggrundsfarve:", background);
  console.log("Andre farver:", colors);
}

displayColors("Hvid", "Blå", "Rød", "Grøn"); 


//adminadd og contact