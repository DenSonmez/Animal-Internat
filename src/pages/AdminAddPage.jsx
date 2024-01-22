import React, { useEffect, useState } from "react";
import facade from "../util/apiFacade";
import { useNavigate } from "react-router-dom";


function AdminAddPage({ isAdmin }) {
  const [selectedType, setSelectedType] = useState("");
  const [animalData, setAnimalData] = useState({ //anialeData inderholder data omkring dyret og setAnimalData er en funktion der opdaterer dataen
    type: "",
    race: "",
    alder: "",
    navn: "",
    køn: "",
    imageURL: "",
    available: true,
  }); 

  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => { 
    if (!isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin, navigate]);//hvis de to ændre sig så skal den køre useEffect igen

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "type") {
      setSelectedType(value);
    } else {
      setAnimalData((prevData) => ({ ...prevData, [name]: value })); //oprette en kopi af det gamle state, og så overskrive det med det nye
    }
  };

  const handleAddAnimal = () => {
    const { race, alder, navn, køn, imageURL, available } = animalData;
    const type = selectedType;

    if (!type) {
      console.error("Vælg venligst en dyretype");
      return;
    }

    const updatedAnimalData = {
      type,
      race,
      alder,
      navn,
      køn,
      imageURL,
      available: !!available,
    };

    facade
      .addPet(updatedAnimalData)
      .then(() => {
        setSuccessMessage("Dyret blev tilføjet til databasen med succes!");
        setAnimalData({
          type: "",
          race: "",
          alder: "",
          navn: "",
          køn: "",
          imageURL: "",
          available: true,
        });
      })
      .catch((error) => {
        console.error("Fejl ved tilføjelsen af dyr:", error);
      });
  };

  return (
    <div className="admin-add-page">
      <h2>Tilføj nyt dyr</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <br />
      <form>
        <div className="form-row" key="type">
          <label>
            Type:
            <select
              name="type"
              value={selectedType}
              onChange={handleInputChange}
            >
              <option value="">Vælg dyretype</option>
              <option value="dog">Hund</option>
              <option value="cat">Kat</option>
              <option value="other">Andet</option>
            </select>
          </label>
        </div>
      
        {["race", "alder", "navn", "køn"].map((field) => (
          <div className="form-row" key={field}>
            <label>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
              <input
                type="text"
                name={field}
                value={animalData[field]}
                onChange={handleInputChange}
                placeholder={`Indtast dyrets ${field}`}
              />
            </label>
          </div>
        ))}

        <div className="form-row">
          <label>
            ImageURL:
            <input
              type="text"
              name="imageURL"
              value={animalData.imageURL}
              onChange={handleInputChange}
              placeholder="Indtast URL for dyrets billede"
            />
          </label>
        </div>

        <div className="form-row">
          <button type="button" onClick={handleAddAnimal}>
            Tilføj
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminAddPage;