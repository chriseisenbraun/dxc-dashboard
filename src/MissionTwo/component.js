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
          text = "Who are our customers and what do our conversations look like?"
          instructions="Complete these missions:"
        />
        <AccordionHeader />
        <Accordion />

      </>
    )
  }
}
