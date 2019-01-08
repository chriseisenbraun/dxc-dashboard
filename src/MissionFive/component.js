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
          text= "Closing, Delivering, and Growing"
          instructions="Complete these missions:"
        />
        <AccordionHeader />
        <Accordion />
      </>
    )
  }
}
