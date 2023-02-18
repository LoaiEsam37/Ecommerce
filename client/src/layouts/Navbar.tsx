import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Ecommerce
        </NavLink>
        <button
          onClick={() => setOpen(!open)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Collapse in={open}>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/AboutUs"
                  activeClassName="active"
                >
                  AboutUs
                </NavLink>
              </li>
              <hr />
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </Collapse>
      </div>
    </nav>
  );
};

export default Navbar;
