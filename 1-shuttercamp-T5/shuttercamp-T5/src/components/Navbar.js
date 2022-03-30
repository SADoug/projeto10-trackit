import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} />
          ShutterCamp
        </div>

        <Link to="/add-page">
          <button className="add-picture">+</button>
        </Link>
      </div>
    </div>
  );
}
