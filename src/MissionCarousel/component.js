import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './MissionCarousel.css'

export class MissionCarousel extends Component {
  render() {

    return (
      <div className="container mission-carousel">
        <div className="row">
          <div className="col">

            <ul className="mission-carousel__list d-flex justify-content-around">

              <li className="mission-carousel__list-item">
                <Link to="missions/1/"
                  className="mission-carousel__link">
                  <span className="mission-carousel__link-span">Misson 1</span>
                  <span className="mission-carousel__link-span">What I need to know about the company and how we sell</span>
                </Link></li>

              <li className="mission-carousel__list-item">
                <Link to="missions/2"
                  className="mission-carousel__link">
                  <span className="mission-carousel__link-span">Mission 2</span>
                  <span className="mission-carousel__link-span">Who are our customers and what do our conversations look like?</span>
                </Link></li>

              <li className="mission-carousel__list-item">
                <Link to="missions/3"
                  className="mission-carousel__link">
                  <span className="mission-carousel__link-span">Mission 3</span>
                  <span className="mission-carousel__link-span">Who are our partners?</span>
                </Link>
              </li>

              <li className="mission-carousel__list-item">
                <Link to="missions/4"
                  className="mission-carousel__link">
                  <span className="mission-carousel__link-span">Mission 4</span>
                  <span className="mission-carousel__link-span">Mapping customer conversations to what we offer</span>
                </Link>
              </li>

              <li className="mission-carousel__list-item">
                <Link to="missions/5"
                  className="mission-carousel__link">
                  <span className="mission-carousel__link-span">Mission 5</span>
                  <span className="mission-carousel__link-span">Closing a deal, heading into deliver and the next deal</span>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </div>

    )
  }
}
