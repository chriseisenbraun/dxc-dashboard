import React, {Component} from 'react'
import './Nav.css';
import logo from './dxc-logo.png'
import {NavLink} from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <header className="container-fluid navbar-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="" className="welcome__img-logo"/>
              <span className="navbar__onboarding">Sales Onboarding Experience</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink to="/missions" className="nav-link" href="#">
                  Missions
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link" href="#">
                  My Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/notebook" className="nav-link" href="#">
                  My Notebook
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/faq" className="nav-link" href="#">
                  FAQ
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn text-hide" type="submit">
                <div className="search-icon-wrap">
                  <svg
                    className="search-icon"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="1.414"><path
                    d="M44 25.5C44 35.717 35.717 44 25.5 44S7 35.717 7 25.5 15.283 7 25.5 7 44 15.283 44 25.5zm-.976 18.524A25.419 25.419 0 0 1 25.5 51C11.417 51 0 39.583 0 25.5S11.417 0 25.5 0 51 11.417 51 25.5c0 5.127-1.513 9.9-4.117 13.898l19.36 19.36L62 63 43.024 44.024z"

                    /></svg>
                </div>

                Search
              </button>

              <div className="search-icon-wrap">
              <svg width="38" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 22h19.938M0 2.938h26.5H0zm.563 9.625h37.375H.563zM0 22h19.938H0zM0 2.938h26.5H0zm.563 9.625h37.375H.563z" stroke="#000" stroke-width="5"/></svg>

              </div>
              {/* <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"/> */}

            </form>
          </div>
        </nav>
      </header>

    )
  }
}
