import React, {Component} from 'react'
import './Welcome.css'
import {MissionCarousel} from '../MissionCarousel';
import { MissionTitle } from '../MissionTitle';

export class Welcome extends Component {
  render() {

    return (
      <>
        <div class="container welcome">
          <div className="container py-5">
            <div class="row">
              <div class="col-sm">
                <h1 className="welcome__heading">DXC Welcome to your sales onboarding experience</h1>
                <p className="welcome__text">Welcome to your online onboarding
                  experience. You will find your enablement with a click of the button below. The
                  Missions are meant to be experienced in order, and are filled with brief and
                  relevant information in a variety of formats. You will then go back to doing
                  your job until you are ready to return for more of the experience. We hope this
                  path is helpful for you to have some quick success in your role!</p>
              </div>
              <div class="col-sm">
                <div className="welcome__video">
                  <iframe
                    title="Welcome video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/wX_x8kw_e2M"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div>
          <MissionCarousel />
        </div>

      </>
    )
  }
}
