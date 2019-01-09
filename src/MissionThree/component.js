import React, { Component } from 'react'
import { MissionTitle } from '../MissionTitle';
import { AccordionHeader } from '../AccordionHeader';
import {AccordionThree} from '../AccordionThree';

export class MissionThree extends Component {
  render() {

    return (
      <>
        <MissionTitle
          heading="Mission 3"
          text= "Working with Partners"
          instructions="Complete these missions:"
        />
        <AccordionHeader />
        <AccordionThree />
      </>
    )
  }
}
