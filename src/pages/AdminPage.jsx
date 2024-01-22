import { useEffect, useState } from "react";
import facade from "../util/apiFacade";
import { useNavigate } from "react-router-dom";

function AdminPage({ isAdmin, setIsAdmin }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [isLoggedIn, setIsLoggedIn] = useState(
      sessionStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && facade.getUserRoles() === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }

    console.log('isAdmin in AdminPage:', isAdmin);
    sessionStorage.setItem("isLoggedIn", isLoggedIn);
    
    sessionStorage.setItem("isLoggedIn", isLoggedIn);

  }, [isLoggedIn, setIsAdmin]);
  

  const performLogin = (evt) => {
    evt.preventDefault();
    facade.login(
      loginCredentials.username,
      loginCredentials.password,
      (isLoggedIn) => {
        if (isLoggedIn) {
          setIsLoggedIn(true);
          if (facade.getUserRoles() === "admin") {
            setIsAdmin(true);
          }
        }
      }
    );
  };

  const onChangeHandler = (evt) => {
    setLoginCredentials({
      ...loginCredentials, [evt.target.id]: evt.target.value, // evt.target.id er username eller password 
    });
  };

  return (
    <>
      <div className="contact">
        <h1>Admin login</h1>

        <div>
          {isLoggedIn ? (
            <div>
              <p>Velkommen til {facade.getUserRoles()} side!</p>
              {isAdmin && (
                <button
                  onClick={() => {
                    navigate("/admin/add", { state: { key: true } });
                  }}
                >
                  Tilføj dyr
                </button>
              )}
              <br />
              <br />
              <button
                onClick={() => {
                  facade.logout(setIsLoggedIn);
                  setIsAdmin(false);
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <form onChange={onChangeHandler}>
              <div>
                <label>
                  <span>Brugernavn:</span>
                  <input placeholder="User Name" id="username" />
                </label>
              </div>

              <div>
                <label>
                  <span>Password:</span>
                  <input placeholder="Password" id="password" />
                </label>
              </div>
              <button onClick={performLogin}>Login</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminPage;
