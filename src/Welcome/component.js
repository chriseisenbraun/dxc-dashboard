import React, { Component } from 'react'
import {MissionCarousel} from '../MissionCarousel';
import {MissionDetail} from '../MissionDetail';

export class Welcome extends Component {
  render() {
    const {missions} = this.props;
    return (
      <div className="welcome">
        <h1 className="welcome__heading">Sale On boarding</h1>
        <h2 className="welcome__sub-heading">Welcome to work</h2>
        <p className="welcome__text">This is from the *Welcome Component*.</p>
        <MissionCarousel missions={missions}/>
        <MissionDetail missions={missions} />
      </div>
    )
  }
}
