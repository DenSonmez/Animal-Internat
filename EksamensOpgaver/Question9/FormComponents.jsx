import React, { useRef } from 'react';

//uncotrolled component
export default function ContactPage() {
  const emailRef = useRef(); // her laver vi en reference til vores input felter, så vi kan bruge dem senere
  const messageRef = useRef();
  const errorRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const submission = {
      email: emailRef.current.value,// her henter vi værdien fra vores input felter
      message: messageRef.current.value,
    };

    if (!submission.email || !submission.message) {
      return (errorRef.current.innerText = 'Please fill out all fields.');
    }

    if (submission.message.length < 10) {
      return (errorRef.current.innerText =
        'Message must be over 10 characters long.');
    }

    alert(
      'Din besked er modtaget! Du vil blive kontaktet hurtigst muligt'
    );
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
                ref={emailRef} // her sætter vi vores reference til vores input felter 
              />
            </label>
          </div>
          <div>
            <label>
              <span>Skriv besked:</span>
              <textarea
                name="message"
                required
                ref={messageRef}
              ></textarea>
            </label>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>

          <p ref={errorRef}></p>
        </form>
      </div>
    </>
  );
}
