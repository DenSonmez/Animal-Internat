//Tjek drawio for at se flowchartet

//ellers api facede

// Synchron og asynkron

// Async/await er ikke-blokerende, bygget oven på løfter og kan ikke bruges i almindelige tilbagekald.
// Asynkronfunktionen returnerer altid et løfte.
// Nøgleordet awaitbruges til at vente på, at løftet afvikles. Det kan kun bruges inde i en async-funktion.
// En try...catch-blok kan bruges til at fange både asynkrone og synkrone (syntaks, runtime) fejl inde i en asynkronfunktion.const eagle = () => {










const eagle = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🦅");
    }, 2000);
  });
};

const duck = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🦆");
    }, 4000);
  });
};

const owl = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🦉");
    }, 6000);
  });
};

const planet1 = async () => {
  try {
    const e = await eagle();
    const d = await duck();
    const o = await owl();

    console.log(`Birds1: ${e} ${d} ${o}`);
  } catch (error) {
    console.error("Error:", error);
  }
};

planet1();

//eller for at gøre det hurtigere
const planet = async () => {
  Promise.all([eagle(), duck(), owl()])
    .then(([e, d, o]) => {
      console.log(`Birds: ${e} ${d} ${o}`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

planet();





