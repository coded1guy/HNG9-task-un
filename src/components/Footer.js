import React from "react";
import "./css/footer.css";
import INGLogoMB from "../assets/images/I4G_logo-mb.png";
import INGLogoLG from "../assets/images/I4G_logo-lg.png";
import ZuriLogoMB from "../assets/images/Zuri_Internship_Logo-mb.png";
import ZuriLogoLG from "../assets/images/Zuri_Internship_Logo-lg.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <a
          href="https://internship.zuri.team/"
          rel="noreferrer"
          target="_blank"
        >
          <img className="foot-logo-lg" src={ZuriLogoLG} alt="zuri" />
          <img className="foot-logo-sm" src={ZuriLogoMB} alt="zuri" />
        </a>
        <p>HNG Internship 9 Frontend Task</p>
        <a href="https://ingressive.org/" rel="noreferrer" target="_blank">
          <img
            className="foot-logo-lg"
            src={INGLogoLG}
            alt="ingressive for good"
          />
          <img
            className="foot-logo-sm"
            src={INGLogoMB}
            alt="ingressive for good"
          />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
