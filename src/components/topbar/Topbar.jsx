import "./topbar.scss";
import { //Person, 
  Mail, 
  LinkedIn, GitHub, Twitter} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            AHKB
          </a>
          {/* <div className="itemContainer">
            <Person className="icon" />
            <span>+44 7583366330</span>
          </div> */}
          <div className="itemContainer">
            <Mail className="icon" />
            <span>adamhamzahkb@hotmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/adamhkamarulbahrin/" rel="noreferrer">
            <LinkedIn className="icon" />
              </a>

          </div>
          <div className="itemContainer">
          <a href="https://github.com/adamhkb/" rel="noreferrer">
            <GitHub className="icon" />
              </a>
          </div>
          <div className="itemContainer">
          <a href="https://twitter.com/adamhkb/" rel="noreferrer">
            <Twitter className="icon" />
              </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
