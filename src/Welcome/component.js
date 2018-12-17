import React, { Component } from 'react'
import './Welcome.css'
import {MissionCarousel} from '../MissionCarousel';
import {MissionDetail} from '../MissionDetail';

export class Welcome extends Component {
  render() {
    const {missions} = this.props;
    return (
      <>
      <div className="welcome">
        <h1 className="welcome__heading">Welcome to your sales onboarding experience</h1>
        <div className="welcome-flex">
        <p className="welcome__text welcome-flex-item">Welcome to your online onboarding experience. You will find your enablement with a click of the button below. The Missions are meant to be experienced in order, and are filled with brief and relevant information in a variety of formats. You will then go back to doing your job until you are ready to return for more of the experience. We hope this path is helpful for you to have some quick success in your role!</p>
        <div className="welcome__video welcome-flex-item">
        <p>VIDEO PLAYER</p>

        </div>
      </div>
      </div>
        <MissionCarousel missions={missions}/>
        <MissionDetail missions={missions} />
      </>
    )
  }
}
