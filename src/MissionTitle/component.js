import React, {Component} from 'react'
import "./MissionTitle.css";

export class MissionTitle extends Component {
  render() {
    return (
      <div className="container mission-title py-5">
        <div className="row">
          <div className="col">
            <h2 className="mission-title__heading">Mission 1</h2>
            <h3 className="mission-title__heading-text mb-5">What I need to know about the company and how we sell</h3>
            <p className="mission-title__text">Complete these episodes:</p>
          </div>
        </div>
      </div>
    )
  }
}
