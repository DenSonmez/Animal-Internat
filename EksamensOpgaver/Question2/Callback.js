
//En callback-funktion i JavaScript er en funktion, 
//der sendes som et argument til en anden funktion og udføres senere, når den pågældende funktion er færdig med sin opgave.
// formået er
// vi bruger callback i vores kode flere steder, især i forbindelse med fetch og eventhandlers (onClick, onChange osv.) i adminadd
//



const numbers = [1, 2, 3, 4, 5];
 
function mainFunction(callback) {
  console.log("Performing operation...");
  numbers.forEach(callback); 
}
 
// definer vi callback function
function callbackFunction(number) {
  console.log("Result: " + number);
}
 
// kalder main function med callback function
mainFunction(callbackFunction);



// Performing operation...
// Result: 1
// Result: 2
// Result: 3
// Result: 4
// Result: 5



function mainFunction1(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
      callback("Operation complete");
    }, 1000);
  }
   
  // Define the callback function
  function callbackFunction1(result) {
    console.log("Result: " + result);
  }
   
  // Call the main function with the callback function
  mainFunction1(callbackFunction1);
 

//   Performing operation...
//   Result: Operation complete






// i vores kode adminadd i useEffect, apiFacade osv