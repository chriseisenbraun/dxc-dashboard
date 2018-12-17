import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './MissionCarousel.css'

export class MissionCarousel extends Component {
  render() {
    const {missions} = this.props;
    return (
      <div className="mission-carousel">
        <ul className="mission-carousel__list">
          {missions.map((mission) => {
            return (

              <li className="mission-carousel__list-item">
                <Link to={`/missions/${mission.id}`}
                className="mission-carousel__link">
                <span className="mission-carousel__link-span">{mission.missionNumber}</span>
                <span className="mission-carousel__link-span">{mission.missionTitle}</span>
              </Link></li>

            )
          })}
        </ul>
      </div>
    )
  }
}
