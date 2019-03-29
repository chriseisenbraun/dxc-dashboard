import React, { Component } from 'react';
import { MissionTitle } from '../MissionTitle';
import { AccordionHeader } from '../AccordionHeader';
import { AccordionFour } from '../AccordionFour';

export class MissionFour extends Component {
  render() {
    return (
      <>
        <MissionTitle
          heading="Mission 4"
          text="Customer Needs & What We Sell"
          instructions="Complete these episodes:"
        />
        <AccordionHeader />
        <AccordionFour />
      </>
    );
  }
}
