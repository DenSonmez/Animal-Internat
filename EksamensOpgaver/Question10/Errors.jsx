



//adminAddPage.jsx





import React, { useState, useEffect } from 'react';

const EksempelKomponent = () => {
  const [data, setData] = useState(null);
  const [fejl, setFejl] = useState(null);

  useEffect(() => {
    const hentData = async () => {
      try {
        const respons = await fetch('https://api.eksempel.com/data');

        if (!respons.ok) {
          throw new Error('Kunne ikke hente data');
        }

        const data = await respons.json();
        setData(data);
      } catch (fejl) {
        setFejl(fejl.message);
      }
    };

    hentData();
  }, []); // Tomt afhængighedsarray for at sikre, at useEffect kun kører ved montage

  return (
    <div>
      {data ? (
        // Vis data, når det er hentet
        <p>Data: {JSON.stringify(data)}</p>
      ) : (
        // Vis fejl, hvis der opstår en fejl under anmodningen
        <p>Fejl: {fejl}</p>
      )}
    </div>
  );
};

export default EksempelKomponent;