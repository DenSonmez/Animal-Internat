import React, { useState } from "react";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const submission = { // her laver vi en kopi af vores formdata
      email: formData.email,
      message: formData.message,
    };

    if (!formData.email || !formData.message) { // her tjekker vi om der er udfyldt noget i vores formular
      return setError('Please fill out all fields.');
    }

    if (submission.message.length < 10) {
      return setError('Message must be over 10 characters long.');
    }

    alert('Din besked er modtaget! Du vil blive kontaktet hurtigst muligt');
  
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // her opdaterer vi vores formdata med den værdi der er blevet indtastet i inputfeltet
  };

  return (
    <>
      <div className="contact">
        <h1>Kontakt os!</h1>
        <p>
          Har du fundet et kæledyr du gerne vil have, på vores hjemmeside? <br />
          Så kontakt os her, og så svarer vi hurtigst muligt.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              <span>Din email:</span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              <span>Skriv besked:</span>
              <textarea
                name="message"
                required
                value={formData.message}// her sætter vi værdien af vores inputfelt til at være den værdi der er i vores formdata
                onChange={handleInputChange} 
              ></textarea>
            </label>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>

          {error && <p>{error}</p>}
        </form>
      </div>
    </>
  );
}
