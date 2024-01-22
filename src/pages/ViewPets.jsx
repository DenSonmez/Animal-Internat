import React, { useState, useEffect } from "react";
import facade from "../util/apiFacade.js";
import "../index.css";

export default function ViewPets({ isAdmin }) {
  const [selectedType, setSelectedType] = useState("all");
  const [showUnavailableOnly, setShowUnavailableOnly] = useState(false);
  const [displayPets, setDisplayPets] = useState([]);
  const [count, setCount] = useState({ all: 0, dog: 0, cat: 0, other: 0 });

  useEffect(() => { // det der sker er at den henter data fra apiFacade.js og sortere dem efter id
    facade
      .fetchPets()
      .then((petsData) => {
        petsData.sort((a, b) => a.id - b.id);

        const filteredByAvailability = showUnavailableOnly
          ? petsData.filter((pet) => !pet.available)
          : petsData;

        const counts = {
          all: filteredByAvailability.length,
          dog: filteredByAvailability.filter(
            (pet) => pet.type.toLowerCase() === "dog"
          ).length,
          cat: filteredByAvailability.filter(
            (pet) => pet.type.toLowerCase() === "cat"
          ).length,
          other: filteredByAvailability.filter(
            (pet) =>
              pet.type.toLowerCase() !== "dog" &&
              pet.type.toLowerCase() !== "cat"
          ).length,
        };

        setCount(counts);

        let filteredPets = filteredByAvailability;
        switch (selectedType) {
          case "dog":
            filteredPets = filteredPets.filter(
              (pet) => pet.type.toLowerCase() === "dog"
            );
            break;
          case "cat":
            filteredPets = filteredPets.filter(
              (pet) => pet.type.toLowerCase() === "cat"
            );
            break;
          case "other":
            filteredPets = filteredPets.filter(
              (pet) =>
                pet.type.toLowerCase() !== "dog" &&
                pet.type.toLowerCase() !== "cat"
            );
            break;
          default:
            break;
        }

        setDisplayPets(filteredPets);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [selectedType, showUnavailableOnly]);

  const toggleUnavailablePets = () => {
    setShowUnavailableOnly(!showUnavailableOnly);
  };

  const toggleAdoption = (petId) => {
    const pet = displayPets.find((pet) => pet.id === petId);
    if (!pet) return;

    const newStatus = !pet.available;

    facade
      .updatePetAdoptionStatus(petId, newStatus)
      .then(() => {
        setDisplayPets((prevPets) =>
          prevPets.map((pet) =>
            pet.id === petId ? { ...pet, available: newStatus } : pet
          )
        );
      })
      .catch((error) => {
        console.error("Error updating pet adoption status: ", error);
      });
  };

  const deletePet = (petId) => {
    // Send DELETE-anmodningen
    facade
      .deletePet(petId)
      
      .catch((error) => {
        console.error("Fejl ved sletning af kæledyr: ", error);
      });

      setDisplayPets((prevPets) =>
            prevPets.filter((pet) => pet.id !== petId)
          );
  };
  
  

  return (
    <>
      <div className="button-spacing">
        <button
          onClick={toggleUnavailablePets}
          className={`toggle-available-button ${
            showUnavailableOnly ? "not-available" : "available"
          }`}
        >
          {showUnavailableOnly ? "Vis alle dyr" : "Vis kun ikke-adopterende dyr"}
        </button>
        <br />

        <button onClick={() => setSelectedType("all")}>
          Alle ({count.all})
        </button>
        <button onClick={() => setSelectedType("dog")}>
          Hunde ({count.dog})
        </button>
        <button onClick={() => setSelectedType("cat")}>
          Katte ({count.cat})
        </button>
        <button onClick={() => setSelectedType("other")}>
          Andet ({count.other})
        </button>
      </div>

      <div className="petContainer large-rounded-box">
        {displayPets.map((pet) => ( // her laver vi en map funktion, som gør at vi kan vise alle vores dyr
          <div key={pet.id} className="petBox">
            <img // identificere hvert dyr
              src={pet.imageURL || "path/to/default-image.jpg"}
              alt={`Billede af ${pet.navn}`}
              className="petImage"
            />
            <div className="petInfo">
              <h2>{pet.navn}</h2>
              <p>Type: {pet.type}</p>
              <p>Race: {pet.race}</p>
              <p>Alder: {pet.alder}</p>
              <p>Køn: {pet.køn}</p>
              <p>
                Status på adoption:{" "}
                {pet.available ? (
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    Fundet nyt hjem ❤
                  </span>
                ) : (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    Søger familie 🤞
                  </span>
                )}
              </p>
              {isAdmin && (
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={pet.available}
                    onChange={() => toggleAdoption(pet.id)}
                  />
                  <span className="slider round orange"></span>
                </label>
              )}
              <br></br>
              {isAdmin && (
                <button onClick={() => deletePet(pet.id)}>Slet</button>

              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
