import React, { Component } from 'react'
import { MissionTitle } from '../MissionTitle';
import { AccordionHeader } from '../AccordionHeader';
import { Accordion, AccordionThree } from '../AccordionThree';

export class MissionThree extends Component {
  render() {

    return (
      <>
        <MissionTitle
          heading="Mission 3"
          text = "Who are our partners?"
          instructions="Complete these missions:"
        />
        <AccordionHeader />
        <AccordionThree />
      </>
    )
  }
}
