import React, { Component } from "react";
import '../Accordion/Accordion.css'
import '../Checkpoint/Checkpoint.css'
import { AccordionHeader } from "../AccordionHeader";

import image25 from "./25.jpg";
import image1 from "./1.jpg";
import image3 from "./3.jpg";
import image4 from "./4-player.jpg";
import image5 from "./5.jpg";
import image6 from "./6.jpg";
import image7 from "./7.jpg";

import image8 from "./8.jpg";
import image9 from "./9-player.jpg";
import image10 from "./10.jpg";
import image11 from "./11-player.jpg";
import image12 from "./12.jpg";
import image13 from "./13.jpg";
import image14 from "./14.jpg";
import image15 from "./15-player.jpg";
import image16 from "./16.jpg";
import image17 from "./17.jpg";
import image19 from "./19-player.jpg";

export class AccordionFive extends Component {

  state = {
    notStarted: 'Not Started',
    inProgress: 'In Progress',
    complete: 'Complete',

    notStarted2: 'Not Started',
    inProgress2: 'In Progress',
    complete2: 'Completed',

    notStarted3: 'Not Started',
    inProgress3: 'In Progress',
    complete3: 'Completed',

    notStarted4: 'Not Started',
    inProgress4: 'In Progress',
    complete4: 'Completed',

    notStarted5: 'Not Started',
    inProgress5: 'In Progress',
    complete5: 'Completed',

    svgNotChecked: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotChecked2: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotChecked3: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotChecked4: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotChecked5: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotChecked6: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotChecked7: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE2C1: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE2C2: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE2C3: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE2C4: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE2C5: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE2C6: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE2C7: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    // EP 3

    svgNotCheckedE3C1: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE3C2: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE3C3: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE3C4: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE3C5: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE3C6: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE3C7: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    // EP 4

    svgNotCheckedE4C1: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE4C2: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE4C3: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE4C4: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE4C5: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE4C6: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE4C7: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    // EP 5

    svgNotCheckedE5C1: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE5C2: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE5C3: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE5C4: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE5C5: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE5C6: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotCheckedE5C7: <svg
      className="ep-todo-svg svg-circle"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#ff0"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    // TO DO ADD svgChecked2-* states

    svgChecked: <svg
      className="ep-todo-svg svg-checkmark-blue"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#49d3ff"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.663 -447.464)" /><path
        d="M226.873 87.531l-93.984 125.937L84.85 165.43"
        fill="none"
        stroke="#49d3ff"
        stroke-width="14"
        stroke-linecap="round"
        stroke-miterlimit="1.5" /></svg>,

    // svgCircle: <svg
    //   className="ep-todo-svg svg-circle"
    //   viewBox="0 0 301 301"
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill-rule="evenodd"
    //   clip-rule="evenodd"
    //   stroke-linejoin="round"
    //   stroke-miterlimit="1.414"><path
    //   d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
    //   fill-rule="nonzero"
    //   stroke="#ff0"
    //   stroke-width=".15"
    //   transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"/></svg>,

    svgInProgress: <svg
      className="ep-todo-svg"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M150 0C67.2 0 0 67.2 0 150s67.2 150 150 150 150-67.2 150-150S232.8 0 150 0zm0 12c76.2 0 138 61.8 138 138s-61.8 138-138 138S12 226.2 12 150 73.8 12 150 12zM72 156h78V42h12v126H72v-12z" /></svg>,

    svgNotStarted: <svg
      className="ep-todo-svg"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
    </svg>,

    svgNotStarted2: <svg
      className="ep-todo-svg"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
    </svg>,

    svgNotStarted3: <svg
      className="ep-todo-svg"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
    </svg>,

    svgNotStarted4: <svg
      className="ep-todo-svg"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
    </svg>,

    svgNotStarted5: <svg
      className="ep-todo-svg"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
    </svg>,

    svgComplete: <svg
      className="ep-todo-svg"
      viewBox="0 0 301 301"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><path
        d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
        fill-rule="nonzero"
        stroke="#c9c9ce"
        stroke-width=".15"
        transform="matrix(6.78733 0 0 6.78733 -1283.663 -447.464)" /><path
        d="M226.873 87.531l-93.984 125.937L84.85 165.43"
        fill="none"
        stroke="#050505"
        stroke-width="14"
        stroke-linecap="round"
        stroke-miterlimit="1.5" /></svg>,

    // Badges

    svgBadgeNotStarted1: <svg
      className="checkpoint-icon"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><circle
        cx="7099"
        cy="798"
        r="80"
        fill="#ccc"
        transform="translate(-13160.627 -1346.246) scale(1.875)" /><path
        d="M112.498 146.316c3.944-.025 8.587.094 13.6.488 15.237 1.194 31.331 9.45 46.125 9.45 13.106 0 27.775-7.031 27.775-7.031V81.254s-16.013 9.375-28.65 9.375c-16.856 0-33.719-9.375-50.575-9.375-6.925 0-20.775 2.344-20.775 2.344V212.51c0 3.5 2.8 6.244 6.25 6.244a6.231 6.231 0 0 0 6.25-6.244v-66.194z"
        fill="#fff" /></svg>,

    svgBadgeNotStarted2: <svg
      className="checkpoint-icon"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><circle
        cx="7099"
        cy="798"
        r="80"
        fill="#ccc"
        transform="translate(-13160.627 -1346.246) scale(1.875)" /><path
        d="M112.498 146.316c3.944-.025 8.587.094 13.6.488 15.237 1.194 31.331 9.45 46.125 9.45 13.106 0 27.775-7.031 27.775-7.031V81.254s-16.013 9.375-28.65 9.375c-16.856 0-33.719-9.375-50.575-9.375-6.925 0-20.775 2.344-20.775 2.344V212.51c0 3.5 2.8 6.244 6.25 6.244a6.231 6.231 0 0 0 6.25-6.244v-66.194z"
        fill="#fff" /></svg>,

    svgBadgeNotStarted3: <svg
      className="checkpoint-icon"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><circle
        cx="7099"
        cy="798"
        r="80"
        fill="#ccc"
        transform="translate(-13160.627 -1346.246) scale(1.875)" /><path
        d="M112.498 146.316c3.944-.025 8.587.094 13.6.488 15.237 1.194 31.331 9.45 46.125 9.45 13.106 0 27.775-7.031 27.775-7.031V81.254s-16.013 9.375-28.65 9.375c-16.856 0-33.719-9.375-50.575-9.375-6.925 0-20.775 2.344-20.775 2.344V212.51c0 3.5 2.8 6.244 6.25 6.244a6.231 6.231 0 0 0 6.25-6.244v-66.194z"
        fill="#fff" /></svg>,

    svgBadgeNotStarted4: <svg
      className="checkpoint-icon"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><circle
        cx="7099"
        cy="798"
        r="80"
        fill="#ccc"
        transform="translate(-13160.627 -1346.246) scale(1.875)" /><path
        d="M112.498 146.316c3.944-.025 8.587.094 13.6.488 15.237 1.194 31.331 9.45 46.125 9.45 13.106 0 27.775-7.031 27.775-7.031V81.254s-16.013 9.375-28.65 9.375c-16.856 0-33.719-9.375-50.575-9.375-6.925 0-20.775 2.344-20.775 2.344V212.51c0 3.5 2.8 6.244 6.25 6.244a6.231 6.231 0 0 0 6.25-6.244v-66.194z"
        fill="#fff" /></svg>,

    svgBadgeNotStarted5: <svg
      className="checkpoint-icon"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><circle
        cx="7099"
        cy="798"
        r="80"
        fill="#ccc"
        transform="translate(-13160.627 -1346.246) scale(1.875)" /><path
        d="M112.498 146.316c3.944-.025 8.587.094 13.6.488 15.237 1.194 31.331 9.45 46.125 9.45 13.106 0 27.775-7.031 27.775-7.031V81.254s-16.013 9.375-28.65 9.375c-16.856 0-33.719-9.375-50.575-9.375-6.925 0-20.775 2.344-20.775 2.344V212.51c0 3.5 2.8 6.244 6.25 6.244a6.231 6.231 0 0 0 6.25-6.244v-66.194z"
        fill="#fff" /></svg>,

    svgBadgeComplete: <svg
      className="checkpoint-icon"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="1.414"><circle
        cx="7099"
        cy="798"
        r="80"
        fill="#2e8c5a"
        transform="translate(-13160.627 -1346.246) scale(1.875)" /><path
        d="M112.498 146.316c3.944-.025 8.587.094 13.6.488 15.237 1.194 31.331 9.45 46.125 9.45 13.106 0 27.775-7.031 27.775-7.031V81.254s-16.013 9.375-28.65 9.375c-16.856 0-33.719-9.375-50.575-9.375-6.925 0-20.775 2.344-20.775 2.344V212.51c0 3.5 2.8 6.244 6.25 6.244a6.231 6.231 0 0 0 6.25-6.244v-66.194z"
        fill="#fff" /></svg>
  }

  // EP 1 chapter checkmarks

  handleClickE1C1 = (e) => {
    this.setState({
      notStarted: this.state.inProgress,
      svgNotStarted: this.state.svgInProgress,
      svgNotChecked: this.state.svgChecked
    });
  }

  handleClickE1C2 = (e) => {
    this.setState({ svgNotChecked2: this.state.svgChecked });
  }
  handleClickE1C3 = (e) => {
    this.setState({ svgNotChecked3: this.state.svgChecked });
  }
  handleClickE1C4 = (e) => {
    this.setState({ svgNotChecked4: this.state.svgChecked });

  }
  handleClickE1C5 = (e) => {
    this.setState({ svgNotChecked5: this.state.svgChecked });
  }

  handleClickE1C6 = (e) => {
    this.setState({ svgNotChecked6: this.state.svgChecked });
  }

  handleClickE1C7 = (e) => {
    this.setState({ svgNotChecked7: this.state.svgChecked });
  }

  // EP 2 chapter checkmarks

  // handleClickE2 = (e) => {
  //   this.setState({ notStarted2: this.state.inProgress, svgNotStarted2: this.state.svgInProgress });
  // }

  handleClickE2C1 = (e) => {
    this.setState({ notStarted2: this.state.inProgress, svgNotStarted2: this.state.svgInProgress, svgNotCheckedE2C1: this.state.svgChecked });
  }

  handleClickE2C2 = (e) => {
    this.setState({ svgNotCheckedE2C2: this.state.svgChecked });
  }
  handleClickE2C3 = (e) => {
    this.setState({ svgNotCheckedE2C3: this.state.svgChecked });
  }
  handleClickE2C4 = (e) => {
    this.setState({ svgNotCheckedE2C4: this.state.svgChecked });

  }
  handleClickE2C5 = (e) => {
    this.setState({ svgNotCheckedE2C5: this.state.svgChecked });
  }

  handleClickE2C6 = (e) => {
    this.setState({ svgNotCheckedE2C6: this.state.svgChecked });
  }

  handleClickE2C7 = (e) => {
    this.setState({ svgNotCheckedE2C7: this.state.svgChecked });
  }

  // EP 3 chapter checkmarks

  // handleClickE3 = (e) => {
  //   this.setState({ notStarted3: this.state.inProgress, svgNotStarted3: this.state.svgInProgress });
  // }

  handleClickE3C1 = (e) => {
    this.setState({ notStarted3: this.state.inProgress, svgNotStarted3: this.state.svgInProgress, svgNotCheckedE3C1: this.state.svgChecked });
  }

  handleClickE3C2 = (e) => {
    this.setState({ svgNotCheckedE3C2: this.state.svgChecked });
  }
  handleClickE3C3 = (e) => {
    this.setState({ svgNotCheckedE3C3: this.state.svgChecked });
  }
  handleClickE3C4 = (e) => {
    this.setState({ svgNotCheckedE3C4: this.state.svgChecked });

  }
  handleClickE3C5 = (e) => {
    this.setState({ svgNotCheckedE3C5: this.state.svgChecked });
  }

  handleClickE3C6 = (e) => {
    this.setState({ svgNotCheckedE3C6: this.state.svgChecked });
  }

  handleClickE3C7 = (e) => {
    this.setState({ svgNotCheckedE3C7: this.state.svgChecked });
  }

  // EP 4 chapter checkmarks

  // handleClickE4 = (e) => {
  //   this.setState({ notStarted4: this.state.inProgress, svgNotStarted4: this.state.svgInProgress });
  // }

  handleClickE4C1 = (e) => {
    this.setState({ notStarted4: this.state.inProgress, svgNotStarted4: this.state.svgInProgress, svgNotCheckedE4C1: this.state.svgChecked });
  }

  handleClickE4C2 = (e) => {
    this.setState({ svgNotCheckedE4C2: this.state.svgChecked });
  }
  handleClickE4C3 = (e) => {
    this.setState({ svgNotCheckedE4C3: this.state.svgChecked });
  }
  handleClickE4C4 = (e) => {
    this.setState({ svgNotCheckedE4C4: this.state.svgChecked });

  }
  handleClickE4C5 = (e) => {
    this.setState({ svgNotCheckedE4C5: this.state.svgChecked });
  }

  handleClickE4C6 = (e) => {
    this.setState({ svgNotCheckedE4C6: this.state.svgChecked });
  }

  handleClickE4C7 = (e) => {
    this.setState({ svgNotCheckedE4C7: this.state.svgChecked });
  }

  // EP 5 chapter checkmarks

  // handleClickE5 = (e) => {
  //     this.setState({ notStarted5: this.state.inProgress, svgNotStarted5: this.state.svgInProgress });
  //   }

  handleClickE5C1 = (e) => {
    this.setState({ notStarted5: this.state.inProgress, svgNotStarted5: this.state.svgInProgress, svgNotCheckedE5C1: this.state.svgChecked });
  }

  handleClickE5C2 = (e) => {
    this.setState({ svgNotCheckedE5C2: this.state.svgChecked });
  }
  handleClickE5C3 = (e) => {
    this.setState({ svgNotCheckedE5C3: this.state.svgChecked });
  }
  handleClickE5C4 = (e) => {
    this.setState({ svgNotCheckedE5C4: this.state.svgChecked });

  }
  handleClickE5C5 = (e) => {
    this.setState({ svgNotCheckedE5C5: this.state.svgChecked });
  }

  handleClickE5C6 = (e) => {
    this.setState({ svgNotCheckedE5C6: this.state.svgChecked });
  }

  handleClickE5C7 = (e) => {
    this.setState({ svgNotCheckedE5C7: this.state.svgChecked });
  }

  // FINISHED - LAST CHAPTER OF EACH EP

  handleClickFinishE1 = (e) => {
    this.setState({
      notStarted: this.state.complete, svgNotStarted: this.state.svgComplete, svgNotChecked3: this.state.svgChecked,
      svgBadgeNotStarted1: this.state.svgBadgeComplete,
    });
  }

  handleClickFinishE2 = (e) => {
    this.setState({ notStarted2: this.state.complete, svgNotStarted2: this.state.svgComplete, svgNotCheckedE2C5: this.state.svgChecked, svgBadgeNotStarted2: this.state.svgBadgeComplete });
  }

  handleClickFinishE3 = (e) => {
    this.setState({ notStarted3: this.state.complete, svgNotStarted3: this.state.svgComplete, svgNotCheckedE3C4: this.state.svgChecked, svgBadgeNotStarted3: this.state.svgBadgeComplete });
  }

  handleClickFinishE4 = (e) => {
    this.setState({ notStarted4: this.state.complete, svgNotStarted4: this.state.svgComplete, svgNotCheckedE4C5: this.state.svgChecked, svgBadgeNotStarted4: this.state.svgBadgeComplete });
  }

  handleClickFinishE5 = (e) => {
    this.setState({ notStarted5: this.state.complete, svgNotStarted5: this.state.svgComplete, svgNotCheckedE5C4: this.state.svgChecked, svgBadgeNotStarted5: this.state.svgBadgeComplete });
  }

  render() {

    return (
      <>

        <div className="container accordion-wrap mb-5">
          <div id="accordion">

            <AccordionHeader name="Episode name" length="Episode length" status="Status" />

            <div className="card">
              <div className="card-header" id="headingOne">
                <div className="container">
                  <div className="row py-2">
                    <div className="col-6">
                      <span>
                        <button
                          className="btn btn-link ep-text-button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne">
                          Now what?
                      </button>
                      </span>
                    </div>
                    <div className="col">
                      <span className="ep-text-time">8 Min</span>
                    </div>

                    <div className="col">
                      <span className="ep-text-status">
                        <span className="ep-todo-span click-m1-e1">
                          {this.state.svgNotStarted}

                        </span>{this.state.notStarted}</span>
                    </div>

                  </div>
                </div>
              </div>

              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion">
                <div className="card-body pt-0 pb-5">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm">
                        <p className="mission-breadcrumb">Mission 5 / Ep 1: Now what?</p>
                        <h3>Now what?</h3>

                        <div class="row">
                          <div class="col-sm col-md-4">
                            <div class="list-group" id="list-tab" role="tablist">

                              <a
                                class="list-group-item list-group-item-action active"
                                id="list-m1-e1-list"
                                data-toggle="list"
                                href="#list-m1-e1"
                                role="tab"
                                aria-controls="home"
                                onClick={this.handleClickE1C1}>
                                <span className="ep-todo-span">

                                  {this.state.svgNotChecked}

                                </span>What does the hand off to delivery look like?</a>

                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e2-list"
                                data-toggle="list"
                                href="#list-m1-e2"
                                role="tab"
                                aria-controls="profile"
                                onClick={this.handleClickE1C2}>
                                <span className="ep-todo-span">
                                  {this.state.svgNotChecked2}

                                </span>How do I work with delivery once the deal is closed?</a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e3-list"
                                data-toggle="list"
                                href="#list-m1-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickFinishE1}>
                                <span className="ep-todo-span">

                                  {this.state.svgNotChecked3}

                                </span>How do I partner with delivery moving forward?</a>
                              {/* <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e4-list"
                                data-toggle="list"
                                href="#list-m1-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE1C4}>
                                <span className="ep-todo-span">

                                  {this.state.svgNotChecked4}

                                </span>Where do I go for help (internal sites/people)?</a> */}
                              {/* <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e5-list"
                                data-toggle="list"
                                href="#list-m1-e5"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE1C5}>
                                <span className="ep-todo-span">

                                  {this.state.svgNotChecked5}

                                </span>Access I need (SFDC and others)</a> */}
                              {/* <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e6-list"
                                data-toggle="list"
                                href="#list-m1-e6"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE1C6}>
                                <span className="ep-todo-span">

                                  {this.state.svgNotChecked6}

                                </span>Who are the people I need to know?</a> */}
                              {/* <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e7-list"
                                data-toggle="list"
                                href="#list-m1-e7"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE1}>
                                <span className="ep-todo-span">

                                  {this.state.svgNotChecked7}

                                </span>What do I do first?</a> */}

                            </div>
                          </div>
                          <div class="col-sm col-md-8">
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active text-center"
                                id="list-m1-e1"
                                role="tabpanel"
                                aria-labelledby="list-m1-e1-list">
                                <img className="img-fluid" src={image13} alt="" />

                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e2"
                                role="tabpanel"
                                aria-labelledby="list-m1-e2-list">
                                <img className="img-fluid" src={image12} alt="" />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e3"
                                role="tabpanel"
                                aria-labelledby="list-m1-e3-list">
                                <img className="img-fluid" src={image17} alt="" />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e4"
                                role="tabpanel"
                                aria-labelledby="list-m1-e4-list">
                                <img className="img-fluid" src={image15} alt="" />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e5"
                                role="tabpanel"
                                aria-labelledby="list-m1-e5-list">
                                <img className="img-fluid" src={image5} alt="" />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e6"
                                role="tabpanel"
                                aria-labelledby="list-m1-e6-list">
                                <img className="img-fluid" src={image6} alt="" />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e7"
                                role="tabpanel"
                                aria-labelledby="list-m1-e7-list">
                                <img className="img-fluid" src={image7} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* End card 1 */}

            <div className="card">
              <div className="card-header" id="headingTwo">
                <div className="container">
                  <div className="row py-2">
                    <div className="col-6">
                      <span>
                        <button
                          className="btn btn-link ep-text-button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo">
                          What’s expected of me now?
                      </button>
                      </span>
                    </div>

                    <div className="col">
                      <span className="ep-text-time">14 Min</span>
                    </div>

                    <div className="col">
                      <span className="ep-text-status">
                        <span className="ep-todo-span">
                          {this.state.svgNotStarted2}

                        </span>{this.state.notStarted2}</span>
                    </div>

                  </div>
                </div>
              </div>

              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion">
                <div className="card-body pt-0 pb-5">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm">
                        <p className="mission-breadcrumb">Mission 5 / Ep 2: What’s expected of me now?</p>
                        <h3>What’s expected of me now?</h3>

                        <div class="row">
                          <div class="col-sm col-md-4">
                            <div class="list-group" id="list-tab" role="tablist">
                              <a
                                class="list-group-item list-group-item-action active"
                                id="list-m2-e1-list"
                                data-toggle="list"
                                href="#list-m2-e1"
                                role="tab"
                                aria-controls="home"
                                onClick={this.handleClickE2C1}>
                                <span className="ep-todo-span">

                                  {this.state.svgNotCheckedE2C1}

                                </span>Contributing back to "the center" - Pitch decks, examples, sharing codification</a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m2-e2-list"
                                data-toggle="list"
                                href="#list-m2-e2"
                                role="tab"
                                aria-controls="profile"
                                onClick={this.handleClickE2C2}>
                                <span className="ep-todo-span">

                                  {this.state.svgNotCheckedE2C2}

                                </span>Where can I go to learn more?</a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m2-e3-list"
                                data-toggle="list"
                                href="#list-m2-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickE2C3}>
                                <span className="ep-todo-span">

                                  {this.state.svgNotCheckedE2C3}

                                </span>Sustaining my growth after onboarding: groups, relationships, content, media & sources, habits</a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m2-e4-list"
                                data-toggle="list"
                                href="#list-m2-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE2C4}>
                                <span className="ep-todo-span">

                                  {this.state.svgNotCheckedE2C4}

                                </span>Networking and expanding mentorships</a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m2-e5-list"
                                data-toggle="list"
                                href="#list-m2-e5"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE2}>

                                <span className="ep-todo-span">

                                  {this.state.svgNotCheckedE2C5}

                                </span>Learning from DXC peers and partners</a>
                              {/* <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e6-list"
                              data-toggle="list"
                              href="#list-m2-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>M1 E2 C6</a> */}
                              {/* <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e7-list"
                              data-toggle="list"
                              href="#list-m2-e7"
                              role="tab"
                              aria-controls="settings"
                              onClick={this.handleClickFinishE2}>

                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>M1 E2 C7</a> */}

                            </div>
                          </div>

                          <div class="col-sm col-md-8">
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active text-center"
                                id="list-m2-e1"
                                role="tabpanel"
                                aria-labelledby="list-m2-e1-list">
                                <img className="img-fluid" src={image8} alt="" />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e2"
                                role="tabpanel"
                                aria-labelledby="list-m2-e2-list">
                                <img className="img-fluid" src={image14} alt="" />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e3"
                                role="tabpanel"
                                aria-labelledby="list-m2-e3-list">
                                <img className="img-fluid" src={image9} alt="" />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e4"
                                role="tabpanel"
                                aria-labelledby="list-m2-e4-list">
                                <img className="img-fluid" src={image10} alt="" />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e5"
                                role="tabpanel"
                                aria-labelledby="list-m2-e5-list">
                                <img className="img-fluid" src={image15} alt="" />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e6"
                                role="tabpanel"
                                aria-labelledby="list-m2-e6-list">
                                <img className="img-fluid" src={image12} alt="" />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e7"
                                role="tabpanel"
                                aria-labelledby="list-m2-e7-list">
                                <img className="img-fluid" src={image13} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* End card 2 */}

            {/* End card 3 */}

            {/* End card 4 */}

            {/* End card 5 */}

          </div>
          {/* End Accordion */}

        </div>

        {/* Start Checkpoints */}

        <div className="container checkpoint">
          <div className="row d-flex">

            <div className="col checkpoint-icon-wrap">

              {this.state.svgBadgeNotStarted1}

            </div>

            <div className="col checkpoint-icon-wrap">
              {this.state.svgBadgeNotStarted2}

            </div>

          </div>
        </div>

        {/* End Checkpoints */}

      </>

    );
  }
}
