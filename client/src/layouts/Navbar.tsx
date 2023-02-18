import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Collapse from "react-bootstrap/Collapse";
import "../sass/layouts/Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Ecommerce
        </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  AboutUs
                </a>
              </li>
              <li className="nav-item dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">myAccount</Dropdown.Item>
                    <hr className="dropdown-divider" />
                    <Dropdown.Item href="#">Orders</Dropdown.Item>
                    <Dropdown.Item href="#">cart</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <hr className="" />
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
