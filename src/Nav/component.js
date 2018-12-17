import React, {Component} from 'react'
import './Nav.css';
import logo from './oxygen-blue-text-logo.svg'
import {NavLink} from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="nav-bar">
          <ul className="nav-bar__list">
            <li className="nav-bar__list-item-logo">
            <NavLink to="/" className="nav-bar__link-logo">
              <img src={logo} className="nav-bar__logo-img" alt="logo"/>
              </NavLink>
            </li>
            <li className="nav-bar__list-item">
              <NavLink to="/" className="nav-bar__link">Missions</NavLink>
            </li>
            <li className="nav-bar__list-item">
              <NavLink to="/dashboard" className="nav-bar__link">My Dashboard</NavLink>
            </li>
            <li className="nav-bar__list-item">
              <NavLink to="/notebook" className="nav-bar__link">My Notebook</NavLink>
            </li>
            <li className="nav-bar__list-item">
              <NavLink to="/faq" className="nav-bar__link">FAQ</NavLink>
            </li>
            <form action="" className="nav-bar__form">
            <div className="search-icon-wrap">
             <svg className="search-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M44 25.5C44 35.717 35.717 44 25.5 44S7 35.717 7 25.5 15.283 7 25.5 7 44 15.283 44 25.5zm-.976 18.524A25.412 25.412 0 0 1 25.5 51C11.417 51 0 39.583 0 25.5S11.417 0 25.5 0 51 11.417 51 25.5c0 5.127-1.513 9.9-4.117 13.898l19.36 19.36L62 63 43.024 44.024z" fill=""/></svg>
              </div>
              <button type="submit" className="nav-bar__button-submit">Search</button>
              <input type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </ul>
        </nav>
      </header>
    )
  }
}
