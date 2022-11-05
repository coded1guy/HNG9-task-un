import React, { useRef, useState, useEffect } from "react";
import "./css/contact.css";
import Footer from "../components/Footer";

const Contact = () => {
  const [checked, setChecked] = useState(false);
  const checkbox = useRef();
  const checkMark = useRef();

  // input refs
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const message = useRef();
  const submitBtn = useRef();

  useEffect(() => {
    if (checked) {
      checkbox.current.checked = true;
      checkMark.current.style.display = "block";
    } else {
      checkbox.current.checked = false;
      checkMark.current.style.display = "none";
    }
  }, [checked]);

  const handleSubmit = () => {
    const firstNameValue = firstName.current.value;
    const lastNameValue = lastName.current.value;
    const emailValue = email.current.value;
    const messageValue = message.current.value;

    if (firstNameValue === "") {
      firstName.current.className = "error";
    }
    if (lastNameValue === "") {
      lastName.current.className = "error";
    }
    if (emailValue === "") {
      email.current.className = "error";
    }
    if (messageValue === "") {
      message.current.className = "error";
    }
  };
  return (
    <div id="contact-page">
      <header>
        <div>
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
      </header>
      <main>
        <form>
          <div id="fullName">
            <div className="input-cnt">
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                ref={firstName}
                type="text"
                placeholder="Enter your first name"
                onInput={() => {
                  firstName.current.className = "";
                }}
                required
              />
              <p className="error-message">Please enter your first name</p>
            </div>
            <div className="input-cnt">
              <label htmlFor="lastName">Last name</label>
              <input
                id="la stName"
                ref={lastName}
                type="text"
                placeholder="Enter your last name"
                onInput={() => {
                  lastName.current.className = "";
                }}
                required
              />
              <p className="error-message">Please enter your last name</p>
            </div>
          </div>
          <div className="input-cnt">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              ref={email}
              type="email"
              placeholder="yourname@email.com"
              onInput={() => {
                email.current.className = "";
              }}
              required
            />
            <p className="error-message">Please enter your email</p>
          </div>
          <div className="input-cnt">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              ref={message}
              placeholder="Send me a message and I'll reply you as soon as possible..."
              onInput={() => {
                message.current.className = "";
              }}
              required
            ></textarea>
            <p className="error-message">Please enter a message</p>
          </div>
          <div id="accept-term">
            <button
              type="button"
              className={checked ? "checked" : ""}
              onClick={() => {
                setChecked(!checked);
              }}
            >
              <svg
                ref={checkMark}
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6668 1.5L4.25016 7.91667L1.3335 5"
                  stroke="#1570EF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <input
              ref={checkbox}
              id="checkbox"
              type="checkbox"
              value="accept"
              required
            />
            <label htmlFor="checkbox">
              You agree to providing your data to Emmanuel Olubiyi who may
              contact you.
            </label>
          </div>
          <button
            id="btn__submit"
            ref={submitBtn}
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Send message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};
export default Contact;
