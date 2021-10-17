import "./PreNavBar.css";
import { Link } from "react-router-dom";

export function PreNavBar() {
  return (
    <>
      <nav className="welcome-nav">
        <div className="welcome-logo"></div>
        <h1 className="welcome-title">Rethinking UI</h1>
        <ul className="welcome-ul">
          <li className="welcome-li">
            <Link to="/signin">Sign In</Link>
          </li>
          <li className="welcome-li">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default PreNavBar;
