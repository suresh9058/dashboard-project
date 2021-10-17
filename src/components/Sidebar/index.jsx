import { Link } from "react-router-dom";
import { routes } from "../MainPage";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <nav className="mainNav">
      <h2> Rethinking UI</h2>
      <ul className="list-items">
        {routes.map((item) => (
          <li className="list-li">
            <Link to={item.path}>
              {item.icon} {item.displayName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
