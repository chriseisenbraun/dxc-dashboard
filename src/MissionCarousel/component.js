import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MissionCarousel.css';

import m1Inactive from './m1-inactive.png';
import m1Active from './m1-active.png';

let isBlocked = 'disabled-link-2';
let isAllowed = '';

export class MissionCarousel extends Component {
  state = {
    nextMission: isBlocked
  };

  handleClickDisable = e => {
    this.setState({ nextMission: isAllowed });
  };

  render() {
    return (
      <div className="container mission-carousel">
        <div className="row">
          <div className="col">
            <ul className="mission-carousel__list d-flex justify-content-around">
              <li className="mission-carousel__list-item">
                <Link to="/missions/1/" className="mission-carousel__link-1">
                  <span className="mission-carousel__link-span">Misson 1</span>
                  <span className="mission-carousel__link-span">
                    Sales at DXC
                  </span>
                </Link>
              </li>

              <li className="mission-carousel__list-item m2-stop disabled-link-2">
                <Link
                  to="/missions/2"
                  id="thing"
                  className="mission-carousel__link-2"
                >
                  <span className="mission-carousel__link-span">Mission 2</span>
                  <span className="mission-carousel__link-span">
                    DXC Customer Conversations
                  </span>
                </Link>
              </li>

              <li className="mission-carousel__list-item m3-stop disabled-link-3">
                <Link to="/missions/3" className="mission-carousel__link-3">
                  <span className="mission-carousel__link-span">Mission 3</span>
                  <span className="mission-carousel__link-span">
                    Working with Partners
                  </span>
                </Link>
              </li>

              <li className="mission-carousel__list-item m4-stop disabled-link-4">
                <Link to="/missions/4" className="mission-carousel__link-4">
                  <span className="mission-carousel__link-span">Mission 4</span>
                  <span className="mission-carousel__link-span">
                    Customer Needs & What We Sell
                  </span>
                </Link>
              </li>

              <li className="mission-carousel__list-item m5-stop disabled-link-5">
                <Link to="/missions/5" className="mission-carousel__link-5">
                  <span className="mission-carousel__link-span">Mission 5</span>
                  <span className="mission-carousel__link-span">
                    Closing, Delivering, and Growing
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
