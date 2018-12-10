import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to="/">Welcome</NavLink></li>
          <li><NavLink to="/notebook">Notebook</NavLink></li>
        </ul>
      </nav>
    )
  }
}
