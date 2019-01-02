import React, { Component } from 'react'
import { MissionTitle } from '../MissionTitle';
import { AccordionHeader } from '../AccordionHeader';
import { Accordion } from '../Accordion';

export class MissionOne extends Component {
  render() {

    return (
      <>
        <MissionTitle
          heading="Mission 1"
          text="What I need to know about the company and how we sell"
          instructions="Complete these missions:"
        />
        <AccordionHeader />
        <Accordion />

      </>
    )
  }
}
