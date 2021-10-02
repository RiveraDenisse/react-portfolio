import React, { useState } from "react";
// validate email format by importing utility function from helpers
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  //to validate
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  function handleChange(e) {
    //to validate email before submitting a contact form
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      //is Valid conditional statement
      if (!isValid) {
        setErrorMessage("your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    console.log("errorMessage", errorMessage);
    // 'name' property on 'target' refers to name attribute of the form element.
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <section>
      <h2> Contact me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          {/* onChange will ensure the handleChange function fires whenever a keystroke is typed into the input field for name */}
          {/* onBlur will fire the event once the user has clicked/moved to a different section */}
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
