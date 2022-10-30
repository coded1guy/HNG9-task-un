import './App.css';
import ProfileImg from "./assets/images/profile-img.png";
import { ReactComponent as SlackIcon } from "./assets/icons/slack.svg";
import { ReactComponent as GithubIcon } from "./assets/icons/github.svg";
import INGLogoMB from "./assets/images/I4G_logo-mb.png";
import INGLogoLG from "./assets/images/I4G_logo-lg.png";
import ZuriLogoMB from "./assets/images/Zuri_Internship_Logo-mb.png";
import ZuriLogoLG from "./assets/images/Zuri_Internship_Logo-lg.png";

function App() {
  return (
    <div>
      <header>
        <div>
          <button>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="h-ic-mb"
            >
              <rect
                id="svg-bg"
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                fill="white"
              />
              <path
                d="M21 21.8333C21.4602 21.8333 21.8333 21.4602 21.8333 21C21.8333 20.5398 21.4602 20.1667 21 20.1667C20.5397 20.1667 20.1666 20.5398 20.1666 21C20.1666 21.4602 20.5397 21.8333 21 21.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.8333 21.8333C27.2935 21.8333 27.6666 21.4602 27.6666 21C27.6666 20.5398 27.2935 20.1667 26.8333 20.1667C26.3731 20.1667 26 20.5398 26 21C26 21.4602 26.3731 21.8333 26.8333 21.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.1666 21.8333C15.6269 21.8333 16 21.4602 16 21C16 20.5398 15.6269 20.1667 15.1666 20.1667C14.7064 20.1667 14.3333 20.5398 14.3333 21C14.3333 21.4602 14.7064 21.8333 15.1666 21.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                stroke="#D0D5DD"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1 3"
              />
            </svg>
          </button>
          <img id="profile__img" src={ProfileImg} alt="emmo" />
          <h1 id="twitter">lord_emmo</h1>
        </div>
      </header>
      <main>
        <div id="my_links">
          <a
            id="twitter"
            href="https://twitter.com/lord_emmo"
            rel="noreferrer"
            target="_blank"
          >
            Twitter Link
          </a>
          <a
            id="btn__zuri"
            href="https://training.zuri.team/"
            rel="noreferrer"
            target="_blank"
          >
            Zuri Team
          </a>
          <a
            id="book"
            href="https://training.zuri.team/"
            rel="noreferrer"
            target="_blank"
            title="get books on design and coding"
          >
            Zuri Books
          </a>
          <a
            id="book__python"
            href="https://books.zuri.team/python-for-beginners?ref_id=emmo"
            rel="noreferrer"
            target="_blank"
            title="get access to books on python to take you from zero to hero in the most optimal timeframe."
          >
            Python Books
          </a>
          <a
            id="pitch"
            href="https://training.zuri.team/"
            rel="noreferrer"
            target="_blank"
            title="Speed up your hiring process, let us worry about carrying out due diligence for your coders."
          >
            Background Check for Coders
          </a>
          <a
            id="book__design"
            href="https://books.zuri.team/design-rules"
            rel="noreferrer"
            target="_blank"
            title="Want to build a great career in design? check out our free books on design."
          >
            Design Books
          </a>
        </div>
        <div id="socials">
          <a href="lkk">
            <SlackIcon />
          </a>
          <a href="lkk">
            <GithubIcon />
          </a>
        </div>
      </main>
      <footer>
        <div>
          <a href="https://internship.zuri.team/">
            <img className="foot-logo-lg" src={ZuriLogoLG} alt="zuri" />
            <img className="foot-logo-sm" src={ZuriLogoMB} alt="zuri" />
          </a>
          <p>HNG Internship 9 Frontend Task</p>
          <a href="https://ingressive.org/">
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
    </div>
  );
}

export default App;
