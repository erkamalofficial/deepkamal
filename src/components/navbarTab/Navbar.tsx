import React from "react";
import { Link, NavLink } from 'react-router-dom'
import img from '../../images/business.png'

export const Navbar = () => {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link  className="navbar-brand" to="/">
            <img className="img-fluid" src={img} alt="" />
            </Link >
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink >
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="menu_active"  className="nav-link" to="/market">
                    Market
                  </NavLink >
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="menu_active"  className="nav-link" to="/covid-19">
                    Covid19
                  </NavLink >
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="menu_active" className="nav-link" to="/services">
                    Services
                  </NavLink >
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="menu_active" className="nav-link" to="/contact">
                    Contact Us
                  </NavLink >
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="menu_active" className="nav-link" to="/login">
                    Sign In
                  </NavLink >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}