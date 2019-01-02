import React, { Component } from 'react'
import { MissionTitle } from '../MissionTitle';
import { AccordionHeader } from '../AccordionHeader';
import { Accordion } from '../Accordion';

export class MissionThree extends Component {
  render() {

    return (
      <>
        <MissionTitle
          heading="Mission 3"
          text="Mission 3 info goes here"
          instructions="Complete these missions:"
        />
        <AccordionHeader />
        <Accordion />

      </>
    )
  }
}
