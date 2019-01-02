import React, { Component } from 'react'
import { MissionTitle } from '../MissionTitle';
import { AccordionHeader } from '../AccordionHeader';
import { Accordion } from '../Accordion';

export class MissionFour extends Component {
  render() {

    return (
      <>
        <MissionTitle
          heading="Mission 4"
          text = "Mapping customer conversations to what we offer"
          instructions="Complete these missions:"
        />
        <AccordionHeader />
        <Accordion />

      </>
    )
  }
}
