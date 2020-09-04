import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/">
  <a className="navbar-brand">Google Books</a>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <Link to="/">
      <li className="nav-item active">
        <a className="nav-link">Search<span className="sr-only">(current)</span></a>
      </li>
    </Link>
    <Link to="/saved">
      <li className="nav-item active">
        <a className="nav-link">Saved</a>
      </li>
    </Link>
    </ul>
  </div>
</nav>
    )
}

export default NavBar;