const URL = "http://localhost:7070/api/v1/";
const PetROUTE = "pet";
const AUTHENTICATION_ROUTE = "auth/login";

function apiFacade() {
  const setToken = (token) => {
    sessionStorage.setItem("jwtToken", token);
  };
  
  const getToken = () => {
    return sessionStorage.getItem("jwtToken");
  };
  
  const logout = (callback) => {
    sessionStorage.removeItem("jwtToken");
    callback(false);
  };

  const handleHttpErrors = (res) => {
    if (res.status === 204) {
      // Hvis responsen er "204 No Content", returner en tom JSON-objekt
      return Promise.resolve({});
    }
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  };

  const login = (user, password, callback) => {
    console.log("Du er nu looget ind", user, password);

    const payload = { username: user, password: password };

    const options = makeOptions("POST", payload);

    return fetch(URL + AUTHENTICATION_ROUTE, options)
      .then(handleHttpErrors) // hof
      .then((json) => {
        callback(true); 
        setToken(json.token);// gemmer token i session storage
      })
      .catch((error) => {
        if (error.status) {
          error.fullError.then((e) => console.log(JSON.stringify(e)));
        } else {
          console.log("seriøs fejl", error);
        }
      });
  };

  const makeOptions = (method, payload, useAuth) => { 
    const opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (useAuth) {
      opts.headers["Authorization"] = `Bearer ${getToken()}`;
    }

    if (payload) {
      opts.body = JSON.stringify(payload);
    }

    return opts;
  };

  const getUserRoles = () => {
    const token = getToken();
    if (token != null) {
      const payloadBase64 = getToken().split(".")[1];
      const decodedClaims = JSON.parse(window.atob(payloadBase64));
      const roles = decodedClaims.roles;
      return roles;
    } else return "";
  };

  const hasUserAccess = (neededRole, loggedIn) => {
    const roles = getUserRoles().split(",");
    return loggedIn && roles.includes(neededRole);
  };

  const addPet = (petData) => {
    const options = makeOptions("POST", petData, true);
    return fetch(URL + PetROUTE, options).then(handleHttpErrors);
  };

  const fetchPets = () => {
    return fetch(URL + PetROUTE, makeOptions("GET", null, true)).then(
      handleHttpErrors
    );
  };

  const updatePetAdoptionStatus = (petId, newStatus) => {
    const payload = { available: newStatus };
    const options = makeOptions("PUT", payload, true); // Brug PUT-metoden
    return fetch(`${URL + PetROUTE}/${petId}`, options).then(handleHttpErrors);
  };

  const deletePet = (petId) => {
    const options = makeOptions("DELETE", null, true); // Brug DELETE-metoden
    return fetch(`${URL + PetROUTE}/${petId}`, options).then(handleHttpErrors);
  };

  return {
    makeOptions,
    setToken,
    getToken,
    logout,
    login,
    getUserRoles,
    hasUserAccess,
    addPet,
    fetchPets,
    updatePetAdoptionStatus,
    deletePet
  };
}

const facade = apiFacade();

export default facade;
