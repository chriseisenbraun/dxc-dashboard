import React, { Component } from 'react'
import { MissionTitle } from '../MissionTitle';
import { AccordionHeader } from '../AccordionHeader';
import { Accordion } from '../Accordion';

export class MissionFive extends Component {
  render() {

    return (
      <>
        <MissionTitle
          heading="Mission 5"
          text = "Closing a deal, heading into deliver and the next deal"
          instructions="Complete these missions:"
        />
        <AccordionHeader />
        <Accordion />
      </>
    )
  }
}
