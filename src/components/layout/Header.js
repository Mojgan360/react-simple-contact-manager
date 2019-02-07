import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 ">
        <div>
          <a href="/" className="navbar-brand">
            {branding}
          </a>
        </div>
        <ul className="navbar navbar-nav ml-auto ">
          <li className="nav-item ">
            <Link to="/" className=" nav-link">
              <i className="fas fa-home" />
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus" /> Add
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question" /> About
            </Link>
          </li>
        </ul>
        <div />
      </nav>
    </div>
  );
};
// function Header() {
//   return (
//     <div>
//       <h1>Contact Manager</h1>
//     </div>
//   );
// }

export default Header;
