// promise er et objekt der repræsenterer en asynkron operation, der enten er fuldført eller fejlet.




    // i vores kode bruger vi det i apiFacade linje 19 og ved login linje 35

    const handleHttpErrors = (res) => {
      if (res.status === 204) {
        // Hvis responsen er "204 No Content", returner en tom JSON-objekt
        return Promise.resolve({});
      }
      if (!res.ok) {
        // Hvis responsen ikke er ok, afvis Promise med status og fuld fejlmeddelelse
        return Promise.reject({ status: res.status, fullError: res.json() });
      }
      // Hvis alt er i orden, returner resultatet af at løse JSON fra responsen
      return res.json();
    };
    


// i vores kode bruger vi det i apiFacade linje 19
// forskellen på callback og promise er at callback er en funktion der bliver kaldt når en asynkron operation er fuldført
// hvorimod en promise er et objekt der repræsenterer en asynkron operation, der enten er fuldført eller fejlet.