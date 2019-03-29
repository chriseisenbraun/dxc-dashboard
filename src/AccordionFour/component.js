import React, { Component } from 'react';
import '../Accordion/Accordion.css';
import '../Checkpoint/Checkpoint.css';
import { AccordionHeader } from '../AccordionHeader';

import image25 from './25.jpg';
import image1 from './1.jpg';
import image3 from './3.jpg';
import image4 from './4-player.jpg';
import image5 from './5.jpg';
import image6 from './6.jpg';
import image7 from './7.jpg';

import image8 from './8.jpg';
import image9 from './9-player.jpg';
import image10 from './10.jpg';
import image11 from './11-player.jpg';
import image12 from './12.jpg';
import image13 from './13.jpg';
import image14 from './14.jpg';
import image15 from './15-player.jpg';
import image16 from './16.jpg';
import image17 from './17.jpg';
import image19 from './19-player.jpg';

export class AccordionFour extends Component {
  state = {
    notStarted: 'Not Started',
    inProgress: 'In Progress',
    complete: 'Completed',

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

    svgNotChecked: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotChecked2: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotChecked3: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotChecked4: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotChecked5: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotChecked6: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotChecked7: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE2C1: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE2C2: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE2C3: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE2C4: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE2C5: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE2C6: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE2C7: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    // EP 3

    svgNotCheckedE3C1: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE3C2: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE3C3: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE3C4: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE3C5: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE3C6: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE3C7: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    // EP 4

    svgNotCheckedE4C1: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE4C2: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE4C3: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE4C4: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE4C5: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE4C6: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE4C7: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    // EP 5

    svgNotCheckedE5C1: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE5C2: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE5C3: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE5C4: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE5C5: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE5C6: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    svgNotCheckedE5C7: (
      <svg
        className="ep-todo-svg svg-circle"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#ff0"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)"
        />
      </svg>
    ),

    // TO DO ADD svgChecked2-* states

    svgChecked: (
      <svg
        className="ep-todo-svg svg-checkmark-blue"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#49d3ff"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.663 -447.464)"
        />
        <path
          d="M226.873 87.531l-93.984 125.937L84.85 165.43"
          fill="none"
          stroke="#49d3ff"
          stroke-width="14"
          stroke-linecap="round"
          stroke-miterlimit="1.5"
        />
      </svg>
    ),

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

    svgInProgress: (
      <svg
        className="ep-todo-svg"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path d="M150 0C67.2 0 0 67.2 0 150s67.2 150 150 150 150-67.2 150-150S232.8 0 150 0zm0 12c76.2 0 138 61.8 138 138s-61.8 138-138 138S12 226.2 12 150 73.8 12 150 12zM72 156h78V42h12v126H72v-12z" />
      </svg>
    ),

    svgNotStarted: (
      <svg
        className="ep-todo-svg"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
      </svg>
    ),

    svgNotStarted2: (
      <svg
        className="ep-todo-svg"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
      </svg>
    ),

    svgNotStarted3: (
      <svg
        className="ep-todo-svg"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
      </svg>
    ),

    svgNotStarted4: (
      <svg
        className="ep-todo-svg"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
      </svg>
    ),

    svgNotStarted5: (
      <svg
        className="ep-todo-svg"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
      </svg>
    ),

    svgComplete: (
      <svg
        className="ep-todo-svg"
        viewBox="0 0 301 301"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path
          d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z"
          fill-rule="nonzero"
          stroke="#c9c9ce"
          stroke-width=".15"
          transform="matrix(6.78733 0 0 6.78733 -1283.663 -447.464)"
        />
        <path
          d="M226.873 87.531l-93.984 125.937L84.85 165.43"
          fill="none"
          stroke="#050505"
          stroke-width="14"
          stroke-linecap="round"
          stroke-miterlimit="1.5"
        />
      </svg>
    ),

    // Badges

    svgBadgeNotStarted1: (
      <svg
        className="checkpoint-icon"
        width="132"
        height="130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity=".8"
          d="M73.95 75.23a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm47.32-18.25l-15.65-13.13-3.55-20.11H81.65L66 10.61 50.35 23.74H29.93l-3.55 20.11-15.65 13.13 10.22 17.69-3.55 20.11 19.19 6.99 10.22 17.69L66 112.47l19.19 6.99 10.22-17.69 19.19-6.99-3.55-20.11 10.22-17.69zM30.2 79.41c.44.48 1.06.72 1.84.72.59 0 1.08-.13 1.46-.41.39-.27.64-.65.75-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.37.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.91 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.47-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.11.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.75-1.13-.38-.28-.87-.42-1.46-.42-.78 0-1.4.25-1.84.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm24.06-27.45c1-.95 2.58-.91 3.53.09l4.53 4.75 12.5-15.24a2.514 2.514 0 0 1 3.52-.35c1.07.88 1.22 2.45.35 3.52l-14.3 17.42c-.45.56-1.12.89-1.84.92h-.09c-.68 0-1.33-.28-1.81-.78l-6.47-6.8c-.96-1.01-.92-2.59.08-3.53zM44.2 81.64h-1.95V78.3h-2.9v3.33H37.4v-8.4h1.95v3.4h2.9v-3.4h1.95v8.41zm6.76-6.85h-3.19v1.91h3.19v1.53h-3.19v1.85h3.19v1.55h-5.13v-8.4h5.13v1.56zm3.62 4.62c.44.48 1.05.72 1.83.72.59 0 1.08-.13 1.47-.41.38-.27.63-.65.74-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.36.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.9 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.48-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.12.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.74-1.13-.39-.28-.88-.42-1.47-.42-.78 0-1.39.25-1.83.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm14.22 2.23h-2.32l-2.76-3.7v3.7h-1.94v-8.4h1.94v3.74l2.77-3.74h2.31l-3.3 4.16 3.3 4.24zm7.11-3.81c-.26.46-.62.83-1.08 1.09-.45.26-.97.39-1.55.39h-1.63v2.32h-1.94v-8.4h3.57c.58 0 1.1.14 1.55.4.46.25.82.62 1.08 1.08.26.46.39.98.39 1.56 0 .58-.13 1.11-.39 1.56zm9.4 1.83c-.36.68-.88 1.21-1.56 1.62-.68.4-1.48.59-2.39.59-.91 0-1.71-.19-2.39-.59-.68-.41-1.2-.94-1.56-1.62-.36-.68-.54-1.42-.54-2.22 0-.81.18-1.56.54-2.23.36-.68.88-1.21 1.56-1.61.68-.4 1.48-.6 2.39-.6.91 0 1.71.2 2.39.6.68.4 1.2.93 1.56 1.61.36.67.54 1.42.54 2.23 0 .8-.18 1.54-.54 2.22zm3.61 1.98h-1.94v-8.4h1.94v8.4zm8.4 0h-1.99l-2.92-5.43v5.43h-1.86v-8.4h1.99l2.92 5.44v-5.44h1.86v8.4zm7.43-6.68h-2.32v6.67h-1.93v-6.67h-2.3v-1.73h6.55v1.73zm-22.06.14c-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.95-.29-1.37-.19-.41-.47-.73-.84-.97zm-9.71-.27h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.77-.38-1.04a1.26 1.26 0 0 0-.97-.41zm.97.4a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04z"
          fill="#9A9A9A"
        />
        <path
          opacity=".8"
          d="M131.5 55.46L112.96 39.9l-4.21-23.84H84.54L66 .49 47.46 16.05H23.25L19.04 39.9.5 55.46l12.1 20.96-4.2 23.84 22.75 8.28 12.1 20.97L66 121.23l22.75 8.28 12.1-20.97 22.75-8.28-4.2-23.84 12.1-20.96zM96.77 103.4l-10.68 18.51L66 114.6l-20.09 7.31-10.68-18.51-20.09-7.31 3.71-21.05L8.16 56.53l16.38-13.74 3.71-21.05h21.37L66 8.01l16.38 13.74h21.37l3.71 21.05 16.38 13.74-10.69 18.51 3.71 21.05-20.09 7.3z"
          fill="#9A9A9A"
        />
      </svg>
    ),

    svgBadgeNotStarted2: (
      <svg
        className="checkpoint-icon"
        width="132"
        height="130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity=".8"
          d="M73.95 75.23a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm47.32-18.25l-15.65-13.13-3.55-20.11H81.65L66 10.61 50.35 23.74H29.93l-3.55 20.11-15.65 13.13 10.22 17.69-3.55 20.11 19.19 6.99 10.22 17.69L66 112.47l19.19 6.99 10.22-17.69 19.19-6.99-3.55-20.11 10.22-17.69zM30.2 79.41c.44.48 1.06.72 1.84.72.59 0 1.08-.13 1.46-.41.39-.27.64-.65.75-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.37.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.91 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.47-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.11.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.75-1.13-.38-.28-.87-.42-1.46-.42-.78 0-1.4.25-1.84.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm24.06-27.45c1-.95 2.58-.91 3.53.09l4.53 4.75 12.5-15.24a2.514 2.514 0 0 1 3.52-.35c1.07.88 1.22 2.45.35 3.52l-14.3 17.42c-.45.56-1.12.89-1.84.92h-.09c-.68 0-1.33-.28-1.81-.78l-6.47-6.8c-.96-1.01-.92-2.59.08-3.53zM44.2 81.64h-1.95V78.3h-2.9v3.33H37.4v-8.4h1.95v3.4h2.9v-3.4h1.95v8.41zm6.76-6.85h-3.19v1.91h3.19v1.53h-3.19v1.85h3.19v1.55h-5.13v-8.4h5.13v1.56zm3.62 4.62c.44.48 1.05.72 1.83.72.59 0 1.08-.13 1.47-.41.38-.27.63-.65.74-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.36.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.9 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.48-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.12.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.74-1.13-.39-.28-.88-.42-1.47-.42-.78 0-1.39.25-1.83.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm14.22 2.23h-2.32l-2.76-3.7v3.7h-1.94v-8.4h1.94v3.74l2.77-3.74h2.31l-3.3 4.16 3.3 4.24zm7.11-3.81c-.26.46-.62.83-1.08 1.09-.45.26-.97.39-1.55.39h-1.63v2.32h-1.94v-8.4h3.57c.58 0 1.1.14 1.55.4.46.25.82.62 1.08 1.08.26.46.39.98.39 1.56 0 .58-.13 1.11-.39 1.56zm9.4 1.83c-.36.68-.88 1.21-1.56 1.62-.68.4-1.48.59-2.39.59-.91 0-1.71-.19-2.39-.59-.68-.41-1.2-.94-1.56-1.62-.36-.68-.54-1.42-.54-2.22 0-.81.18-1.56.54-2.23.36-.68.88-1.21 1.56-1.61.68-.4 1.48-.6 2.39-.6.91 0 1.71.2 2.39.6.68.4 1.2.93 1.56 1.61.36.67.54 1.42.54 2.23 0 .8-.18 1.54-.54 2.22zm3.61 1.98h-1.94v-8.4h1.94v8.4zm8.4 0h-1.99l-2.92-5.43v5.43h-1.86v-8.4h1.99l2.92 5.44v-5.44h1.86v8.4zm7.43-6.68h-2.32v6.67h-1.93v-6.67h-2.3v-1.73h6.55v1.73zm-22.06.14c-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.95-.29-1.37-.19-.41-.47-.73-.84-.97zm-9.71-.27h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.77-.38-1.04a1.26 1.26 0 0 0-.97-.41zm.97.4a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04z"
          fill="#9A9A9A"
        />
        <path
          opacity=".8"
          d="M131.5 55.46L112.96 39.9l-4.21-23.84H84.54L66 .49 47.46 16.05H23.25L19.04 39.9.5 55.46l12.1 20.96-4.2 23.84 22.75 8.28 12.1 20.97L66 121.23l22.75 8.28 12.1-20.97 22.75-8.28-4.2-23.84 12.1-20.96zM96.77 103.4l-10.68 18.51L66 114.6l-20.09 7.31-10.68-18.51-20.09-7.31 3.71-21.05L8.16 56.53l16.38-13.74 3.71-21.05h21.37L66 8.01l16.38 13.74h21.37l3.71 21.05 16.38 13.74-10.69 18.51 3.71 21.05-20.09 7.3z"
          fill="#9A9A9A"
        />
      </svg>
    ),

    svgBadgeNotStarted3: (
      <svg
        className="checkpoint-icon"
        width="132"
        height="130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity=".8"
          d="M73.95 75.23a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm47.32-18.25l-15.65-13.13-3.55-20.11H81.65L66 10.61 50.35 23.74H29.93l-3.55 20.11-15.65 13.13 10.22 17.69-3.55 20.11 19.19 6.99 10.22 17.69L66 112.47l19.19 6.99 10.22-17.69 19.19-6.99-3.55-20.11 10.22-17.69zM30.2 79.41c.44.48 1.06.72 1.84.72.59 0 1.08-.13 1.46-.41.39-.27.64-.65.75-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.37.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.91 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.47-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.11.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.75-1.13-.38-.28-.87-.42-1.46-.42-.78 0-1.4.25-1.84.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm24.06-27.45c1-.95 2.58-.91 3.53.09l4.53 4.75 12.5-15.24a2.514 2.514 0 0 1 3.52-.35c1.07.88 1.22 2.45.35 3.52l-14.3 17.42c-.45.56-1.12.89-1.84.92h-.09c-.68 0-1.33-.28-1.81-.78l-6.47-6.8c-.96-1.01-.92-2.59.08-3.53zM44.2 81.64h-1.95V78.3h-2.9v3.33H37.4v-8.4h1.95v3.4h2.9v-3.4h1.95v8.41zm6.76-6.85h-3.19v1.91h3.19v1.53h-3.19v1.85h3.19v1.55h-5.13v-8.4h5.13v1.56zm3.62 4.62c.44.48 1.05.72 1.83.72.59 0 1.08-.13 1.47-.41.38-.27.63-.65.74-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.36.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.9 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.48-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.12.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.74-1.13-.39-.28-.88-.42-1.47-.42-.78 0-1.39.25-1.83.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm14.22 2.23h-2.32l-2.76-3.7v3.7h-1.94v-8.4h1.94v3.74l2.77-3.74h2.31l-3.3 4.16 3.3 4.24zm7.11-3.81c-.26.46-.62.83-1.08 1.09-.45.26-.97.39-1.55.39h-1.63v2.32h-1.94v-8.4h3.57c.58 0 1.1.14 1.55.4.46.25.82.62 1.08 1.08.26.46.39.98.39 1.56 0 .58-.13 1.11-.39 1.56zm9.4 1.83c-.36.68-.88 1.21-1.56 1.62-.68.4-1.48.59-2.39.59-.91 0-1.71-.19-2.39-.59-.68-.41-1.2-.94-1.56-1.62-.36-.68-.54-1.42-.54-2.22 0-.81.18-1.56.54-2.23.36-.68.88-1.21 1.56-1.61.68-.4 1.48-.6 2.39-.6.91 0 1.71.2 2.39.6.68.4 1.2.93 1.56 1.61.36.67.54 1.42.54 2.23 0 .8-.18 1.54-.54 2.22zm3.61 1.98h-1.94v-8.4h1.94v8.4zm8.4 0h-1.99l-2.92-5.43v5.43h-1.86v-8.4h1.99l2.92 5.44v-5.44h1.86v8.4zm7.43-6.68h-2.32v6.67h-1.93v-6.67h-2.3v-1.73h6.55v1.73zm-22.06.14c-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.95-.29-1.37-.19-.41-.47-.73-.84-.97zm-9.71-.27h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.77-.38-1.04a1.26 1.26 0 0 0-.97-.41zm.97.4a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04z"
          fill="#9A9A9A"
        />
        <path
          opacity=".8"
          d="M131.5 55.46L112.96 39.9l-4.21-23.84H84.54L66 .49 47.46 16.05H23.25L19.04 39.9.5 55.46l12.1 20.96-4.2 23.84 22.75 8.28 12.1 20.97L66 121.23l22.75 8.28 12.1-20.97 22.75-8.28-4.2-23.84 12.1-20.96zM96.77 103.4l-10.68 18.51L66 114.6l-20.09 7.31-10.68-18.51-20.09-7.31 3.71-21.05L8.16 56.53l16.38-13.74 3.71-21.05h21.37L66 8.01l16.38 13.74h21.37l3.71 21.05 16.38 13.74-10.69 18.51 3.71 21.05-20.09 7.3z"
          fill="#9A9A9A"
        />
      </svg>
    ),

    svgBadgeNotStarted4: (
      <svg
        className="checkpoint-icon"
        width="132"
        height="130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity=".8"
          d="M73.95 75.23a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm47.32-18.25l-15.65-13.13-3.55-20.11H81.65L66 10.61 50.35 23.74H29.93l-3.55 20.11-15.65 13.13 10.22 17.69-3.55 20.11 19.19 6.99 10.22 17.69L66 112.47l19.19 6.99 10.22-17.69 19.19-6.99-3.55-20.11 10.22-17.69zM30.2 79.41c.44.48 1.06.72 1.84.72.59 0 1.08-.13 1.46-.41.39-.27.64-.65.75-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.37.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.91 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.47-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.11.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.75-1.13-.38-.28-.87-.42-1.46-.42-.78 0-1.4.25-1.84.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm24.06-27.45c1-.95 2.58-.91 3.53.09l4.53 4.75 12.5-15.24a2.514 2.514 0 0 1 3.52-.35c1.07.88 1.22 2.45.35 3.52l-14.3 17.42c-.45.56-1.12.89-1.84.92h-.09c-.68 0-1.33-.28-1.81-.78l-6.47-6.8c-.96-1.01-.92-2.59.08-3.53zM44.2 81.64h-1.95V78.3h-2.9v3.33H37.4v-8.4h1.95v3.4h2.9v-3.4h1.95v8.41zm6.76-6.85h-3.19v1.91h3.19v1.53h-3.19v1.85h3.19v1.55h-5.13v-8.4h5.13v1.56zm3.62 4.62c.44.48 1.05.72 1.83.72.59 0 1.08-.13 1.47-.41.38-.27.63-.65.74-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.36.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.9 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.48-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.12.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.74-1.13-.39-.28-.88-.42-1.47-.42-.78 0-1.39.25-1.83.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm14.22 2.23h-2.32l-2.76-3.7v3.7h-1.94v-8.4h1.94v3.74l2.77-3.74h2.31l-3.3 4.16 3.3 4.24zm7.11-3.81c-.26.46-.62.83-1.08 1.09-.45.26-.97.39-1.55.39h-1.63v2.32h-1.94v-8.4h3.57c.58 0 1.1.14 1.55.4.46.25.82.62 1.08 1.08.26.46.39.98.39 1.56 0 .58-.13 1.11-.39 1.56zm9.4 1.83c-.36.68-.88 1.21-1.56 1.62-.68.4-1.48.59-2.39.59-.91 0-1.71-.19-2.39-.59-.68-.41-1.2-.94-1.56-1.62-.36-.68-.54-1.42-.54-2.22 0-.81.18-1.56.54-2.23.36-.68.88-1.21 1.56-1.61.68-.4 1.48-.6 2.39-.6.91 0 1.71.2 2.39.6.68.4 1.2.93 1.56 1.61.36.67.54 1.42.54 2.23 0 .8-.18 1.54-.54 2.22zm3.61 1.98h-1.94v-8.4h1.94v8.4zm8.4 0h-1.99l-2.92-5.43v5.43h-1.86v-8.4h1.99l2.92 5.44v-5.44h1.86v8.4zm7.43-6.68h-2.32v6.67h-1.93v-6.67h-2.3v-1.73h6.55v1.73zm-22.06.14c-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.95-.29-1.37-.19-.41-.47-.73-.84-.97zm-9.71-.27h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.77-.38-1.04a1.26 1.26 0 0 0-.97-.41zm.97.4a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04z"
          fill="#9A9A9A"
        />
        <path
          opacity=".8"
          d="M131.5 55.46L112.96 39.9l-4.21-23.84H84.54L66 .49 47.46 16.05H23.25L19.04 39.9.5 55.46l12.1 20.96-4.2 23.84 22.75 8.28 12.1 20.97L66 121.23l22.75 8.28 12.1-20.97 22.75-8.28-4.2-23.84 12.1-20.96zM96.77 103.4l-10.68 18.51L66 114.6l-20.09 7.31-10.68-18.51-20.09-7.31 3.71-21.05L8.16 56.53l16.38-13.74 3.71-21.05h21.37L66 8.01l16.38 13.74h21.37l3.71 21.05 16.38 13.74-10.69 18.51 3.71 21.05-20.09 7.3z"
          fill="#9A9A9A"
        />
      </svg>
    ),

    svgBadgeNotStarted5: (
      <svg
        className="checkpoint-icon"
        width="132"
        height="130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity=".8"
          d="M73.95 75.23a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm47.32-18.25l-15.65-13.13-3.55-20.11H81.65L66 10.61 50.35 23.74H29.93l-3.55 20.11-15.65 13.13 10.22 17.69-3.55 20.11 19.19 6.99 10.22 17.69L66 112.47l19.19 6.99 10.22-17.69 19.19-6.99-3.55-20.11 10.22-17.69zM30.2 79.41c.44.48 1.06.72 1.84.72.59 0 1.08-.13 1.46-.41.39-.27.64-.65.75-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.37.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.91 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.47-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.11.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.75-1.13-.38-.28-.87-.42-1.46-.42-.78 0-1.4.25-1.84.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm24.06-27.45c1-.95 2.58-.91 3.53.09l4.53 4.75 12.5-15.24a2.514 2.514 0 0 1 3.52-.35c1.07.88 1.22 2.45.35 3.52l-14.3 17.42c-.45.56-1.12.89-1.84.92h-.09c-.68 0-1.33-.28-1.81-.78l-6.47-6.8c-.96-1.01-.92-2.59.08-3.53zM44.2 81.64h-1.95V78.3h-2.9v3.33H37.4v-8.4h1.95v3.4h2.9v-3.4h1.95v8.41zm6.76-6.85h-3.19v1.91h3.19v1.53h-3.19v1.85h3.19v1.55h-5.13v-8.4h5.13v1.56zm3.62 4.62c.44.48 1.05.72 1.83.72.59 0 1.08-.13 1.47-.41.38-.27.63-.65.74-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.36.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.9 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.48-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.12.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.74-1.13-.39-.28-.88-.42-1.47-.42-.78 0-1.39.25-1.83.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm14.22 2.23h-2.32l-2.76-3.7v3.7h-1.94v-8.4h1.94v3.74l2.77-3.74h2.31l-3.3 4.16 3.3 4.24zm7.11-3.81c-.26.46-.62.83-1.08 1.09-.45.26-.97.39-1.55.39h-1.63v2.32h-1.94v-8.4h3.57c.58 0 1.1.14 1.55.4.46.25.82.62 1.08 1.08.26.46.39.98.39 1.56 0 .58-.13 1.11-.39 1.56zm9.4 1.83c-.36.68-.88 1.21-1.56 1.62-.68.4-1.48.59-2.39.59-.91 0-1.71-.19-2.39-.59-.68-.41-1.2-.94-1.56-1.62-.36-.68-.54-1.42-.54-2.22 0-.81.18-1.56.54-2.23.36-.68.88-1.21 1.56-1.61.68-.4 1.48-.6 2.39-.6.91 0 1.71.2 2.39.6.68.4 1.2.93 1.56 1.61.36.67.54 1.42.54 2.23 0 .8-.18 1.54-.54 2.22zm3.61 1.98h-1.94v-8.4h1.94v8.4zm8.4 0h-1.99l-2.92-5.43v5.43h-1.86v-8.4h1.99l2.92 5.44v-5.44h1.86v8.4zm7.43-6.68h-2.32v6.67h-1.93v-6.67h-2.3v-1.73h6.55v1.73zm-22.06.14c-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.95-.29-1.37-.19-.41-.47-.73-.84-.97zm-9.71-.27h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.77-.38-1.04a1.26 1.26 0 0 0-.97-.41zm.97.4a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04z"
          fill="#9A9A9A"
        />
        <path
          opacity=".8"
          d="M131.5 55.46L112.96 39.9l-4.21-23.84H84.54L66 .49 47.46 16.05H23.25L19.04 39.9.5 55.46l12.1 20.96-4.2 23.84 22.75 8.28 12.1 20.97L66 121.23l22.75 8.28 12.1-20.97 22.75-8.28-4.2-23.84 12.1-20.96zM96.77 103.4l-10.68 18.51L66 114.6l-20.09 7.31-10.68-18.51-20.09-7.31 3.71-21.05L8.16 56.53l16.38-13.74 3.71-21.05h21.37L66 8.01l16.38 13.74h21.37l3.71 21.05 16.38 13.74-10.69 18.51 3.71 21.05-20.09 7.3z"
          fill="#9A9A9A"
        />
      </svg>
    ),

    svgBadgeComplete: (
      <svg
        className="checkpoint-icon"
        width="132"
        height="130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity=".8"
          d="M73.95 75.23a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm47.32-18.25l-15.65-13.13-3.55-20.11H81.65L66 10.61 50.35 23.74H29.93l-3.55 20.11-15.65 13.13 10.22 17.69-3.55 20.11 19.19 6.99 10.22 17.69L66 112.47l19.19 6.99 10.22-17.69 19.19-6.99-3.55-20.11 10.22-17.69zM30.2 79.41c.44.48 1.06.72 1.84.72.59 0 1.08-.13 1.46-.41.39-.27.64-.65.75-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.37.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.91 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.47-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.11.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.75-1.13-.38-.28-.87-.42-1.46-.42-.78 0-1.4.25-1.84.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm24.06-27.45c1-.95 2.58-.91 3.53.09l4.53 4.75 12.5-15.24a2.514 2.514 0 0 1 3.52-.35c1.07.88 1.22 2.45.35 3.52l-14.3 17.42c-.45.56-1.12.89-1.84.92h-.09c-.68 0-1.33-.28-1.81-.78l-6.47-6.8c-.96-1.01-.92-2.59.08-3.53zM44.2 81.64h-1.95V78.3h-2.9v3.33H37.4v-8.4h1.95v3.4h2.9v-3.4h1.95v8.41zm6.76-6.85h-3.19v1.91h3.19v1.53h-3.19v1.85h3.19v1.55h-5.13v-8.4h5.13v1.56zm3.62 4.62c.44.48 1.05.72 1.83.72.59 0 1.08-.13 1.47-.41.38-.27.63-.65.74-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.36.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.9 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.48-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.12.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.74-1.13-.39-.28-.88-.42-1.47-.42-.78 0-1.39.25-1.83.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm14.22 2.23h-2.32l-2.76-3.7v3.7h-1.94v-8.4h1.94v3.74l2.77-3.74h2.31l-3.3 4.16 3.3 4.24zm7.11-3.81c-.26.46-.62.83-1.08 1.09-.45.26-.97.39-1.55.39h-1.63v2.32h-1.94v-8.4h3.57c.58 0 1.1.14 1.55.4.46.25.82.62 1.08 1.08.26.46.39.98.39 1.56 0 .58-.13 1.11-.39 1.56zm9.4 1.83c-.36.68-.88 1.21-1.56 1.62-.68.4-1.48.59-2.39.59-.91 0-1.71-.19-2.39-.59-.68-.41-1.2-.94-1.56-1.62-.36-.68-.54-1.42-.54-2.22 0-.81.18-1.56.54-2.23.36-.68.88-1.21 1.56-1.61.68-.4 1.48-.6 2.39-.6.91 0 1.71.2 2.39.6.68.4 1.2.93 1.56 1.61.36.67.54 1.42.54 2.23 0 .8-.18 1.54-.54 2.22zm3.61 1.98h-1.94v-8.4h1.94v8.4zm8.4 0h-1.99l-2.92-5.43v5.43h-1.86v-8.4h1.99l2.92 5.44v-5.44h1.86v8.4zm7.43-6.68h-2.32v6.67h-1.93v-6.67h-2.3v-1.73h6.55v1.73zm-22.06.14c-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.95-.29-1.37-.19-.41-.47-.73-.84-.97zm-9.71-.27h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.77-.38-1.04a1.26 1.26 0 0 0-.97-.41zm.97.4a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04z"
          fill="#49d3ff"
        />
        <path
          opacity=".8"
          d="M131.5 55.46L112.96 39.9l-4.21-23.84H84.54L66 .49 47.46 16.05H23.25L19.04 39.9.5 55.46l12.1 20.96-4.2 23.84 22.75 8.28 12.1 20.97L66 121.23l22.75 8.28 12.1-20.97 22.75-8.28-4.2-23.84 12.1-20.96zM96.77 103.4l-10.68 18.51L66 114.6l-20.09 7.31-10.68-18.51-20.09-7.31 3.71-21.05L8.16 56.53l16.38-13.74 3.71-21.05h21.37L66 8.01l16.38 13.74h21.37l3.71 21.05 16.38 13.74-10.69 18.51 3.71 21.05-20.09 7.3z"
          fill="#49d3ff"
        />
      </svg>
    )
  };

  // EP 1 chapter checkmarks

  handleClickE1C1 = e => {
    this.setState({
      notStarted: this.state.inProgress,
      svgNotStarted: this.state.svgInProgress,
      svgNotChecked: this.state.svgChecked
    });
  };

  handleClickE1C2 = e => {
    this.setState({ svgNotChecked2: this.state.svgChecked });
  };
  handleClickE1C3 = e => {
    this.setState({ svgNotChecked3: this.state.svgChecked });
  };
  handleClickE1C4 = e => {
    this.setState({ svgNotChecked4: this.state.svgChecked });
  };
  handleClickE1C5 = e => {
    this.setState({ svgNotChecked5: this.state.svgChecked });
  };

  handleClickE1C6 = e => {
    this.setState({ svgNotChecked6: this.state.svgChecked });
  };

  handleClickE1C7 = e => {
    this.setState({ svgNotChecked7: this.state.svgChecked });
  };

  // EP 2 chapter checkmarks

  // handleClickE2 = (e) => {
  //   this.setState({ notStarted2: this.state.inProgress, svgNotStarted2: this.state.svgInProgress });
  // }

  handleClickE2C1 = e => {
    this.setState({
      notStarted2: this.state.inProgress,
      svgNotStarted2: this.state.svgInProgress,
      svgNotCheckedE2C1: this.state.svgChecked
    });
  };

  handleClickE2C2 = e => {
    this.setState({ svgNotCheckedE2C2: this.state.svgChecked });
  };
  handleClickE2C3 = e => {
    this.setState({ svgNotCheckedE2C3: this.state.svgChecked });
  };
  handleClickE2C4 = e => {
    this.setState({ svgNotCheckedE2C4: this.state.svgChecked });
  };
  handleClickE2C5 = e => {
    this.setState({ svgNotCheckedE2C5: this.state.svgChecked });
  };

  handleClickE2C6 = e => {
    this.setState({ svgNotCheckedE2C6: this.state.svgChecked });
  };

  handleClickE2C7 = e => {
    this.setState({ svgNotCheckedE2C7: this.state.svgChecked });
  };

  // EP 3 chapter checkmarks

  // handleClickE3 = (e) => {
  //   this.setState({ notStarted3: this.state.inProgress, svgNotStarted3: this.state.svgInProgress });
  // }

  handleClickE3C1 = e => {
    this.setState({
      notStarted3: this.state.inProgress,
      svgNotStarted3: this.state.svgInProgress,
      svgNotCheckedE3C1: this.state.svgChecked
    });
  };

  handleClickE3C2 = e => {
    this.setState({ svgNotCheckedE3C2: this.state.svgChecked });
  };
  handleClickE3C3 = e => {
    this.setState({ svgNotCheckedE3C3: this.state.svgChecked });
  };
  handleClickE3C4 = e => {
    this.setState({ svgNotCheckedE3C4: this.state.svgChecked });
  };
  handleClickE3C5 = e => {
    this.setState({ svgNotCheckedE3C5: this.state.svgChecked });
  };

  handleClickE3C6 = e => {
    this.setState({ svgNotCheckedE3C6: this.state.svgChecked });
  };

  handleClickE3C7 = e => {
    this.setState({ svgNotCheckedE3C7: this.state.svgChecked });
  };

  // EP 4 chapter checkmarks

  // handleClickE4 = (e) => {
  //   this.setState({ notStarted4: this.state.inProgress, svgNotStarted4: this.state.svgInProgress });
  // }

  handleClickE4C1 = e => {
    this.setState({
      notStarted4: this.state.inProgress,
      svgNotStarted4: this.state.svgInProgress,
      svgNotCheckedE4C1: this.state.svgChecked
    });
  };

  handleClickE4C2 = e => {
    this.setState({ svgNotCheckedE4C2: this.state.svgChecked });
  };
  handleClickE4C3 = e => {
    this.setState({ svgNotCheckedE4C3: this.state.svgChecked });
  };
  handleClickE4C4 = e => {
    this.setState({ svgNotCheckedE4C4: this.state.svgChecked });
  };
  handleClickE4C5 = e => {
    this.setState({ svgNotCheckedE4C5: this.state.svgChecked });
  };

  handleClickE4C6 = e => {
    this.setState({ svgNotCheckedE4C6: this.state.svgChecked });
  };

  handleClickE4C7 = e => {
    this.setState({ svgNotCheckedE4C7: this.state.svgChecked });
  };

  // EP 5 chapter checkmarks

  // handleClickE5 = (e) => {
  //     this.setState({ notStarted5: this.state.inProgress, svgNotStarted5: this.state.svgInProgress });
  //   }

  handleClickE5C1 = e => {
    this.setState({
      notStarted5: this.state.inProgress,
      svgNotStarted5: this.state.svgInProgress,
      svgNotCheckedE5C1: this.state.svgChecked
    });
  };

  handleClickE5C2 = e => {
    this.setState({ svgNotCheckedE5C2: this.state.svgChecked });
  };
  handleClickE5C3 = e => {
    this.setState({ svgNotCheckedE5C3: this.state.svgChecked });
  };
  handleClickE5C4 = e => {
    this.setState({ svgNotCheckedE5C4: this.state.svgChecked });
  };
  handleClickE5C5 = e => {
    this.setState({ svgNotCheckedE5C5: this.state.svgChecked });
  };

  handleClickE5C6 = e => {
    this.setState({ svgNotCheckedE5C6: this.state.svgChecked });
  };

  handleClickE5C7 = e => {
    this.setState({ svgNotCheckedE5C7: this.state.svgChecked });
  };

  // FINISHED - LAST CHAPTER OF EACH EP

  handleClickFinishE1 = e => {
    this.setState({
      notStarted: this.state.complete,
      svgNotStarted: this.state.svgComplete,
      svgNotChecked4: this.state.svgChecked,
      svgBadgeNotStarted1: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE2 = e => {
    this.setState({
      notStarted2: this.state.complete,
      svgNotStarted2: this.state.svgComplete,
      svgNotCheckedE2C4: this.state.svgChecked,
      svgBadgeNotStarted2: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE3 = e => {
    this.setState({
      notStarted3: this.state.complete,
      svgNotStarted3: this.state.svgComplete,
      svgNotCheckedE3C3: this.state.svgChecked,
      svgBadgeNotStarted3: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE4 = e => {
    this.setState({
      notStarted4: this.state.complete,
      svgNotStarted4: this.state.svgComplete,
      svgNotCheckedE45: this.state.svgChecked,
      svgBadgeNotStarted4: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE5 = e => {
    this.setState({
      notStarted5: this.state.complete,
      svgNotStarted5: this.state.svgComplete,
      svgNotCheckedE5E4: this.state.svgChecked,
      svgBadgeNotStarted5: this.state.svgBadgeComplete
    });
  };

  render() {
    return (
      <>
        <div className="container accordion-wrap mb-5">
          <div id="accordion">
            <AccordionHeader
              name="Episode name"
              length="Episode length"
              status="Status"
            />

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
                          aria-controls="collapseOne"
                        >
                          What are DXC’s offerings?
                        </button>
                      </span>
                    </div>
                    <div className="col">
                      <span className="ep-text-time">14 Min</span>
                    </div>

                    <div className="col">
                      <span className="ep-text-status">
                        <span className="ep-todo-span click-m1-e1">
                          {this.state.svgNotStarted}
                        </span>
                        {this.state.notStarted}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body pt-0 pb-5">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm">
                        <p className="mission-breadcrumb">
                          Mission 4 / Ep 1: What are DXC’s offerings?
                        </p>
                        <h3>What are DXC’s offerings?</h3>

                        <div class="row">
                          <div class="col-sm col-md-4">
                            <div
                              class="list-group"
                              id="list-tab"
                              role="tablist"
                            >
                              <a
                                class="list-group-item list-group-item-action active"
                                id="list-m1-e1-list"
                                data-toggle="list"
                                href="#list-m1-e1"
                                role="tab"
                                aria-controls="home"
                                onClick={this.handleClickE1C1}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotChecked}
                                </span>
                                Overview of 9 Offering families; how to learn
                                more
                              </a>

                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e2-list"
                                data-toggle="list"
                                href="#list-m1-e2"
                                role="tab"
                                aria-controls="profile"
                                onClick={this.handleClickE1C2}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotChecked2}
                                </span>
                                Iterate until the customer buys
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e3-list"
                                data-toggle="list"
                                href="#list-m1-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickE1C3}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotChecked3}
                                </span>
                                The level of knowledge you need as a Seller -
                                DXC's expectation
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e4-list"
                                data-toggle="list"
                                href="#list-m1-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE1}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotChecked4}
                                </span>
                                Fully qualified deal: done and clear
                              </a>
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
                                aria-labelledby="list-m1-e1-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image5}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e2"
                                role="tabpanel"
                                aria-labelledby="list-m1-e2-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image11}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e3"
                                role="tabpanel"
                                aria-labelledby="list-m1-e3-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image13}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e4"
                                role="tabpanel"
                                aria-labelledby="list-m1-e4-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image6}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e5"
                                role="tabpanel"
                                aria-labelledby="list-m1-e5-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image15}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e6"
                                role="tabpanel"
                                aria-labelledby="list-m1-e6-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image6}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m1-e7"
                                role="tabpanel"
                                aria-labelledby="list-m1-e7-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image7}
                                  alt=""
                                />
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
                          aria-controls="collapseTwo"
                        >
                          How does DXC differentiate?
                        </button>
                      </span>
                    </div>

                    <div className="col">
                      <span className="ep-text-time">27 Min</span>
                    </div>

                    <div className="col">
                      <span className="ep-text-status">
                        <span className="ep-todo-span">
                          {this.state.svgNotStarted2}
                        </span>
                        {this.state.notStarted2}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body pt-0 pb-5">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm">
                        <p className="mission-breadcrumb">
                          Mission 4 / Ep 2: How does DXC differentiate?
                        </p>
                        <h3>How does DXC differentiate?</h3>

                        <div class="row">
                          <div class="col-sm col-md-4">
                            <div
                              class="list-group"
                              id="list-tab"
                              role="tablist"
                            >
                              <a
                                class="list-group-item list-group-item-action active"
                                id="list-m2-e1-list"
                                data-toggle="list"
                                href="#list-m2-e1"
                                role="tab"
                                aria-controls="home"
                                onClick={this.handleClickE2C1}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE2C1}
                                </span>
                                What's the success stories/data & customer
                                references?
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m2-e2-list"
                                data-toggle="list"
                                href="#list-m2-e2"
                                role="tab"
                                aria-controls="profile"
                                onClick={this.handleClickE2C2}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE2C2}
                                </span>
                                Differentiation stories to use
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m2-e3-list"
                                data-toggle="list"
                                href="#list-m2-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickE2C3}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE2C3}
                                </span>
                                Using the Business Value Framework tool to
                                differentiate
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m2-e4-list"
                                data-toggle="list"
                                href="#list-m2-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE2}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE2C4}
                                </span>
                                How do I know who our current customers are
                                using?
                              </a>
                              {/* <a
                                class="list-group-item list-group-item-action"
                                id="list-m2-e5-list"
                                data-toggle="list"
                                href="#list-m2-e5"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE2}>

                                <span className="ep-todo-span">

                                  {this.state.svgNotCheckedE2C5}

                                </span>Selling a Service</a> */}
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
                                aria-labelledby="list-m2-e1-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image17}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e2"
                                role="tabpanel"
                                aria-labelledby="list-m2-e2-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image4}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e3"
                                role="tabpanel"
                                aria-labelledby="list-m2-e3-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image19}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e4"
                                role="tabpanel"
                                aria-labelledby="list-m2-e4-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image12}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e5"
                                role="tabpanel"
                                aria-labelledby="list-m2-e5-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image5}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e6"
                                role="tabpanel"
                                aria-labelledby="list-m2-e6-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image12}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m2-e7"
                                role="tabpanel"
                                aria-labelledby="list-m2-e7-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image13}
                                  alt=""
                                />
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

            <div className="card">
              <div className="card-header" id="headingThree">
                <div className="container">
                  <div className="row py-2">
                    <div className="col-6">
                      <span>
                        <button
                          className="btn btn-link ep-text-button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          Customer conversations, part 4
                        </button>
                      </span>
                    </div>
                    <div className="col">
                      <span className="ep-text-time">7 Min</span>
                    </div>

                    <div className="col">
                      <span className="ep-text-status">
                        <span className="ep-todo-span">
                          {this.state.svgNotStarted3}
                        </span>
                        {this.state.notStarted3}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body pt-0 pb-5">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm">
                        <p className="mission-breadcrumb">
                          Mission 4 / Ep 3: Customer conversations, part 4
                        </p>
                        <h3> Customer conversations, part 4</h3>

                        <div class="row">
                          <div class="col-sm col-md-4">
                            <div
                              class="list-group"
                              id="list-tab"
                              role="tablist"
                            >
                              <a
                                class="list-group-item list-group-item-action active"
                                id="list-m3-e1-list"
                                data-toggle="list"
                                href="#list-m3-e1"
                                role="tab"
                                aria-controls="home"
                                onClick={this.handleClickE3C1}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE3C1}
                                </span>
                                Mapping the customer outcome to DXC
                                solutions/offerings
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m3-e2-list"
                                data-toggle="list"
                                href="#list-m3-e2"
                                role="tab"
                                aria-controls="profile"
                                onClick={this.handleClickE3C2}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE3C2}
                                </span>
                                Solutioning and buy in: using group meetings and
                                1:1s
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m3-e3-list"
                                data-toggle="list"
                                href="#list-m3-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickFinishE3}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE3C3}
                                </span>
                                Examples/customer scenarios
                              </a>
                              {/* <a
                                class="list-group-item list-group-item-action"
                                id="list-m3-e4-list"
                                data-toggle="list"
                                href="#list-m3-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE3}>
                                <span className="ep-todo-span">

                                  {this.state.svgNotCheckedE3C4}

                                </span>Value of the Partner Brand</a> */}
                              {/* <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e5-list"
                              data-toggle="list"
                              href="#list-m3-e5"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>E1 E3 C5</a> */}
                              {/* <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e6-list"
                              data-toggle="list"
                              href="#list-m3-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>E1 E3 C6</a> */}
                              {/* <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e7-list"
                              data-toggle="list"
                              href="#list-m3-e7"
                              role="tab"
                              aria-controls="settings"
                              onClick={this.handleClickFinishE3}>
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>E1 E3 C6</a> */}
                            </div>
                          </div>
                          <div class="col-sm col-md-8">
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active text-center"
                                id="list-m3-e1"
                                role="tabpanel"
                                aria-labelledby="list-m3-e1-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image11}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m3-e2"
                                role="tabpanel"
                                aria-labelledby="list-m3-e2-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image12}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m3-e3"
                                role="tabpanel"
                                aria-labelledby="list-m3-e3-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image16}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m3-e4"
                                role="tabpanel"
                                aria-labelledby="list-m3-e4-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image3}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m3-e5"
                                role="tabpanel"
                                aria-labelledby="list-m3-e5-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image6}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m3-e6"
                                role="tabpanel"
                                aria-labelledby="list-m3-e6-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image9}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m3-e7"
                                role="tabpanel"
                                aria-labelledby="list-m3-e7-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image8}
                                  alt=""
                                />
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

            <div className="col checkpoint-icon-wrap">
              {this.state.svgBadgeNotStarted3}
            </div>

            {/* <div className="col checkpoint-icon-wrap">
              {this.state.svgBadgeNotStarted4}

            </div> */}

            {/* <div className="col checkpoint-icon-wrap">

              {this.state.svgBadgeNotStarted5}

            </div> */}
          </div>
        </div>

        {/* End Checkpoints */}
      </>
    );
  }
}
