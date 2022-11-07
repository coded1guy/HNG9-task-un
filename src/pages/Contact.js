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
  // error message refs
  const firstNameErrorMsg = useRef();
  const lastNameErrorMsg = useRef();
  const emailErrorMsg = useRef();
  const messageErrorMsg = useRef();

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
      firstNameErrorMsg.current.style.display = "block";
    }
    if (lastNameValue === "") {
      lastName.current.className = "error";
      lastNameErrorMsg.current.style.display = "block";
    }
    if (emailValue === "") {
      email.current.className = "error";
      emailErrorMsg.current.style.display = "block";
    }
    if (messageValue === "") {
      message.current.className = "error";
      messageErrorMsg.current.style.display = "block";
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
              <label htmlFor="first_name">First name</label>
              <input
                id="first_name"
                ref={firstName}
                type="text"
                placeholder="Enter your first name"
                onInput={() => {
                  firstName.current.className = "";
                  firstNameErrorMsg.current.style.display = "none";
                }}
                required
              />
              <p ref={firstNameErrorMsg} className="error-message">
                Please enter your first name
              </p>
            </div>
            <div className="input-cnt">
              <label htmlFor="last_name">Last name</label>
              <input
                id="last_name"
                ref={lastName}
                type="text"
                placeholder="Enter your last name"
                onInput={() => {
                  lastName.current.className = "";
                  lastNameErrorMsg.current.style.display = "none";
                }}
                required
              />
              <p ref={lastNameErrorMsg} className="error-message">
                Please enter your last name
              </p>
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
                emailErrorMsg.current.style.display = "none";
              }}
              required
            />
            <p ref={emailErrorMsg} className="error-message">
              Please enter your email
            </p>
          </div>
          <div className="input-cnt">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              ref={message}
              placeholder="Send me a message and I'll reply you as soon as possible..."
              onInput={() => {
                message.current.className = "";
                messageErrorMsg.current.style.display = "none";
              }}
              required
            ></textarea>
            <p ref={messageErrorMsg} className="error-message">
              Please enter a message
            </p>
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
