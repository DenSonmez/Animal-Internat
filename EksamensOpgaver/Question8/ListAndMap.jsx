//What is the purpose of the key attribute in React lists?

// Nøgleattributten i React-lister tjener til at give hvert element i listen en unik identifikator. 
// Dette hjælper React med at identificere, hvilke elementer der er ændret, tilføjet eller fjernet.

//Explain how the map function is used for rendering lists in React.

//map-funktionen bruges til at gengive lister i React.
// Det tager en liste af data og returnerer en liste af elementer.
// Hvert element i listen har en nøgle, der er unik for det element. så React kan identificere, hvilke elementer der er ændret, tilføjet eller fjernet.

//I vores kod bruge vi  ViewPets classe: 135-142






const UserList = () => {

    const users = [
      { id: 1, name: 'Victor' },
      { id: 2, name: 'Ras' },
      { id: 3, name: 'Marco' }
    ];
  
    const userList = users.map((user) => ( 
      <li key={user.id}>{user.name}</li> 
    ));
    
    console.log(userList);
  
    return (
      <div>
        <h2>Brugerliste:</h2>
        <ul>{userList}</ul>
      </div>
    );
  };

  export default UserList;