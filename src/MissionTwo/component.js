import React, { Component } from 'react'
import { MissionTitle } from '../MissionTitle';
import { AccordionHeader } from '../AccordionHeader';
import { Accordion } from '../Accordion';

export class MissionTwo extends Component {
  render() {

    return (
      <>
        <MissionTitle
          heading="Mission 2"
          text="Mission 2 info goes here"
          instructions="Complete these missions:"
        />
        <AccordionHeader />
        <Accordion />

      </>
    )
  }
}
