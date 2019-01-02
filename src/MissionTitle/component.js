import React, {Component} from 'react'
import "./MissionTitle.css";

export class MissionTitle extends Component {
  render() {
    const {heading, text, instructions} = this.props;
    return (
      <div className="container mission-title py-5">
        <div className="row">
          <div className="col">
            <h2 className="mission-title__heading">{heading}</h2>
            <h3 className="mission-title__heading-text mb-5">{text}</h3>
            <p className="mission-title__text">{instructions}</p>
          </div>
        </div>
      </div>
    )
  }
}
