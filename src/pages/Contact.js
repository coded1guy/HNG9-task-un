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
      firstName.current.style.border = "1px solid #F89687";
    }
    if (lastNameValue === "") {
      lastName.current.style.border = "1px solid #F89687";
    }
    if (emailValue === "") {
      email.current.style.border = "1px solid #F89687";
    }
    if (messageValue === "") {
      message.current.style.border = "1px solid #F89687";
      message.current.onfocus = () => {
        message.current.style.boxShadow =
          "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC";
      };
      message.current.oninput = () => {
        message.current.style.border = "1px solid #84CAFF";
        message.current.style.boxShadow =
          "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF";
      };
      message.current.onblur = () => {
        message.current.style.border = "1px solid #D0D5DD";
        message.current.style.boxShadow = "none";
      };
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
