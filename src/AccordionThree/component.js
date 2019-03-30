import React, { Component } from 'react';
import '../Accordion/Accordion.css';
import '../Checkpoint/Checkpoint.css';
import { AccordionHeader } from '../AccordionHeader';

import image1 from './1.jpg';
import image3 from './3.jpg';
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
import image17 from './17.jpg';
import image19 from './19-player.jpg';

// Checkpoint vars

// Checkmarks left of chapter titles

let notCheckedCircle = (
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
);

let checkedCircle = (
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
);

// Episode Completion badges at bottom of page

let badgeNotStarted = (
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
);

let badgeComplete = (
  <svg
    className="checkpoint-icon"
    width="132"
    height="130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M73.95 75.23a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm47.32-18.25l-15.65-13.13-3.55-20.11H81.65L66 10.61 50.35 23.74H29.93l-3.55 20.11-15.65 13.13 10.22 17.69-3.55 20.11 19.19 6.99 10.22 17.69L66 112.47l19.19 6.99 10.22-17.69 19.19-6.99-3.55-20.11 10.22-17.69zM30.2 79.41c.44.48 1.06.72 1.84.72.59 0 1.08-.13 1.46-.41.39-.27.64-.65.75-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.37.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.91 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.47-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.11.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.75-1.13-.38-.28-.87-.42-1.46-.42-.78 0-1.4.25-1.84.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm24.06-27.45c1-.95 2.58-.91 3.53.09l4.53 4.75 12.5-15.24a2.514 2.514 0 0 1 3.52-.35c1.07.88 1.22 2.45.35 3.52l-14.3 17.42c-.45.56-1.12.89-1.84.92h-.09c-.68 0-1.33-.28-1.81-.78l-6.47-6.8c-.96-1.01-.92-2.59.08-3.53zM44.2 81.64h-1.95V78.3h-2.9v3.33H37.4v-8.4h1.95v3.4h2.9v-3.4h1.95v8.41zm6.76-6.85h-3.19v1.91h3.19v1.53h-3.19v1.85h3.19v1.55h-5.13v-8.4h5.13v1.56zm3.62 4.62c.44.48 1.05.72 1.83.72.59 0 1.08-.13 1.47-.41.38-.27.63-.65.74-1.13h2.06c-.07.65-.29 1.23-.66 1.72-.36.5-.86.89-1.48 1.16-.62.27-1.33.4-2.14.4-.9 0-1.7-.18-2.38-.57-.69-.37-1.21-.9-1.58-1.57-.37-.68-.55-1.44-.55-2.29 0-.86.18-1.63.55-2.3.37-.67.89-1.19 1.58-1.58.68-.37 1.48-.56 2.38-.56.81 0 1.52.13 2.14.4.62.28 1.12.66 1.48 1.15.37.5.59 1.08.66 1.73h-2.06c-.11-.48-.36-.85-.74-1.13-.39-.28-.88-.42-1.47-.42-.78 0-1.39.25-1.83.73-.44.49-.66 1.14-.66 1.98 0 .83.22 1.49.66 1.97zm14.22 2.23h-2.32l-2.76-3.7v3.7h-1.94v-8.4h1.94v3.74l2.77-3.74h2.31l-3.3 4.16 3.3 4.24zm7.11-3.81c-.26.46-.62.83-1.08 1.09-.45.26-.97.39-1.55.39h-1.63v2.32h-1.94v-8.4h3.57c.58 0 1.1.14 1.55.4.46.25.82.62 1.08 1.08.26.46.39.98.39 1.56 0 .58-.13 1.11-.39 1.56zm9.4 1.83c-.36.68-.88 1.21-1.56 1.62-.68.4-1.48.59-2.39.59-.91 0-1.71-.19-2.39-.59-.68-.41-1.2-.94-1.56-1.62-.36-.68-.54-1.42-.54-2.22 0-.81.18-1.56.54-2.23.36-.68.88-1.21 1.56-1.61.68-.4 1.48-.6 2.39-.6.91 0 1.71.2 2.39.6.68.4 1.2.93 1.56 1.61.36.67.54 1.42.54 2.23 0 .8-.18 1.54-.54 2.22zm3.61 1.98h-1.94v-8.4h1.94v8.4zm8.4 0h-1.99l-2.92-5.43v5.43h-1.86v-8.4h1.99l2.92 5.44v-5.44h1.86v8.4zm7.43-6.68h-2.32v6.67h-1.93v-6.67h-2.3v-1.73h6.55v1.73zm-22.06.14c-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.95-.29-1.37-.19-.41-.47-.73-.84-.97zm-9.71-.27h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.77-.38-1.04a1.26 1.26 0 0 0-.97-.41zm.97.4a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm9.58.85c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm0 0c-.19-.41-.47-.73-.84-.97-.38-.24-.82-.37-1.33-.37-.52 0-.97.13-1.34.37-.37.24-.65.56-.84.97-.2.42-.29.87-.28 1.37-.01.49.08.94.28 1.36.19.41.47.74.84.98s.82.35 1.34.35c.51 0 .95-.11 1.33-.35.37-.24.65-.57.84-.98.19-.42.29-.87.29-1.36 0-.5-.1-.96-.29-1.37zm-9.58-.85a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04zm0 0a1.26 1.26 0 0 0-.97-.41h-1.33v2.9h1.33c.4 0 .72-.13.97-.41.25-.27.38-.61.38-1.04 0-.42-.13-.76-.38-1.04z"
      fill="#2E8B5B"
    />
    <path
      d="M131.5 55.46L112.96 39.9l-4.21-23.84H84.54L66 .49 47.46 16.05H23.25L19.04 39.9.5 55.46l12.1 20.96-4.2 23.84 22.75 8.28 12.1 20.97L66 121.23l22.75 8.28 12.1-20.97 22.75-8.28-4.2-23.84 12.1-20.96zM96.77 103.4l-10.68 18.51L66 114.6l-20.09 7.31-10.68-18.51-20.09-7.31 3.71-21.05L8.16 56.53l16.38-13.74 3.71-21.05h21.37L66 8.01l16.38 13.74h21.37l3.71 21.05 16.38 13.74-10.69 18.51 3.71 21.05-20.09 7.3z"
      fill="#2E8B5B"
    />
  </svg>
);

// Status icons in Chapter row

let statusNotStarted = (
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
);

let statusInProgress = (
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
);

let statusComplete = (
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
);

// END Checkpoint vars

export class AccordionThree extends Component {
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

    notStarted6: 'Not Started',
    inProgress6: 'In Progress',
    complete6: 'Completed',

    notStarted7: 'Not Started',
    inProgress7: 'In Progress',
    complete7: 'Completed',

    notStarted8: 'Not Started',
    inProgress8: 'In Progress',
    complete8: 'Completed',

    // Checkmark Cirlces

    // Not Checked Cirlce

    svgNotChecked: notCheckedCircle,
    svgNotChecked2: notCheckedCircle,
    svgNotChecked3: notCheckedCircle,
    svgNotChecked4: notCheckedCircle,
    svgNotChecked5: notCheckedCircle,
    svgNotChecked6: notCheckedCircle,
    svgNotChecked7: notCheckedCircle,
    svgNotChecked8: notCheckedCircle,

    svgNotCheckedE2C1: notCheckedCircle,
    svgNotCheckedE2C2: notCheckedCircle,
    svgNotCheckedE2C3: notCheckedCircle,
    svgNotCheckedE2C4: notCheckedCircle,
    svgNotCheckedE2C5: notCheckedCircle,
    svgNotCheckedE2C6: notCheckedCircle,
    svgNotCheckedE2C7: notCheckedCircle,

    // EP 3

    svgNotCheckedE3C1: notCheckedCircle,
    svgNotCheckedE3C2: notCheckedCircle,
    svgNotCheckedE3C3: notCheckedCircle,
    svgNotCheckedE3C4: notCheckedCircle,
    svgNotCheckedE3C5: notCheckedCircle,
    svgNotCheckedE3C6: notCheckedCircle,
    svgNotCheckedE3C7: notCheckedCircle,

    // EP 4

    svgNotCheckedE4C1: notCheckedCircle,
    svgNotCheckedE4C2: notCheckedCircle,
    svgNotCheckedE4C3: notCheckedCircle,
    svgNotCheckedE4C4: notCheckedCircle,
    svgNotCheckedE4C5: notCheckedCircle,
    svgNotCheckedE4C6: notCheckedCircle,
    svgNotCheckedE4C7: notCheckedCircle,

    // EP 5

    svgNotCheckedE5C1: notCheckedCircle,
    svgNotCheckedE5C2: notCheckedCircle,
    svgNotCheckedE5C3: notCheckedCircle,
    svgNotCheckedE5C4: notCheckedCircle,
    svgNotCheckedE5C5: notCheckedCircle,
    svgNotCheckedE5C6: notCheckedCircle,
    svgNotCheckedE5C7: notCheckedCircle,

    // EP 6

    svgNotCheckedE6C1: notCheckedCircle,
    svgNotCheckedE6C2: notCheckedCircle,

    // EP 7

    svgNotCheckedE7C1: notCheckedCircle,
    svgNotCheckedE7C2: notCheckedCircle,
    svgNotCheckedE7C3: notCheckedCircle,
    svgNotCheckedE7C4: notCheckedCircle,
    svgNotCheckedE7C5: notCheckedCircle,
    svgNotCheckedE7C6: notCheckedCircle,
    svgNotCheckedE7C7: notCheckedCircle,
    svgNotCheckedE7C8: notCheckedCircle,

    // EP 8

    svgNotCheckedE8C1: notCheckedCircle,
    svgNotCheckedE8C2: notCheckedCircle,
    svgNotCheckedE8C3: notCheckedCircle,
    svgNotCheckedE8C4: notCheckedCircle,
    svgNotCheckedE8C5: notCheckedCircle,
    svgNotCheckedE8C6: notCheckedCircle,

    // Checked Cirlce

    svgChecked: checkedCircle,

    //
    svgInProgress: statusInProgress,

    svgNotStarted: statusNotStarted,

    svgComplete: statusComplete,

    svgNotStarted2: statusNotStarted,
    svgNotStarted3: statusNotStarted,
    svgNotStarted4: statusNotStarted,
    svgNotStarted5: statusNotStarted,
    svgNotStarted6: statusNotStarted,
    svgNotStarted7: statusNotStarted,
    svgNotStarted8: statusNotStarted
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

  // EP 6

  handleClickE6C1 = e => {
    this.setState({
      notStarted6: this.state.inProgress,
      svgNotStarted6: this.state.svgInProgress,
      svgNotCheckedE6C1: this.state.svgChecked
    });
  };

  handleClickE6C2 = e => {
    this.setState({ svgNotCheckedE6C2: this.state.svgChecked });
  };
  handleClickE6C3 = e => {
    this.setState({ svgNotCheckedE6C3: this.state.svgChecked });
  };
  handleClickE6C4 = e => {
    this.setState({ svgNotCheckedE6C4: this.state.svgChecked });
  };
  handleClickE6C5 = e => {
    this.setState({ svgNotCheckedE6C5: this.state.svgChecked });
  };

  handleClickE6C6 = e => {
    this.setState({ svgNotCheckedE6C6: this.state.svgChecked });
  };

  handleClickE6C7 = e => {
    this.setState({ svgNotCheckedE6C7: this.state.svgChecked });
  };

  // EP 7

  handleClickE7C1 = e => {
    this.setState({
      notStarted7: this.state.inProgress,
      svgNotStarted7: this.state.svgInProgress,
      svgNotCheckedE7C1: this.state.svgChecked
    });
  };

  handleClickE7C2 = e => {
    this.setState({ svgNotCheckedE7C2: this.state.svgChecked });
  };
  handleClickE7C3 = e => {
    this.setState({ svgNotCheckedE7C3: this.state.svgChecked });
  };
  handleClickE7C4 = e => {
    this.setState({ svgNotCheckedE7C4: this.state.svgChecked });
  };
  handleClickE7C5 = e => {
    this.setState({ svgNotCheckedE7C5: this.state.svgChecked });
  };

  handleClickE7C6 = e => {
    this.setState({ svgNotCheckedE7C6: this.state.svgChecked });
  };

  handleClickE7C7 = e => {
    this.setState({ svgNotCheckedE7C7: this.state.svgChecked });
  };

  handleClickE7C8 = e => {
    this.setState({ svgNotCheckedE7C8: this.state.svgChecked });
  };

  // EP 8

  handleClickE8C1 = e => {
    this.setState({
      notStarted8: this.state.inProgress,
      svgNotStarted8: this.state.svgInProgress,
      svgNotCheckedE8C1: this.state.svgChecked
    });
  };

  handleClickE8C2 = e => {
    this.setState({ svgNotCheckedE8C2: this.state.svgChecked });
  };
  handleClickE8C3 = e => {
    this.setState({ svgNotCheckedE8C3: this.state.svgChecked });
  };
  handleClickE8C4 = e => {
    this.setState({ svgNotCheckedE8C4: this.state.svgChecked });
  };
  handleClickE8C5 = e => {
    this.setState({ svgNotCheckedE8C5: this.state.svgChecked });
  };

  handleClickE8C6 = e => {
    this.setState({ svgNotCheckedE8C6: this.state.svgChecked });
  };

  handleClickE8C7 = e => {
    this.setState({ svgNotCheckedE8C7: this.state.svgChecked });
  };

  // FINISHED - LAST CHAPTER OF EACH EP

  handleClickFinishE1 = e => {
    this.setState({
      notStarted: this.state.complete,
      svgNotStarted: this.state.svgComplete,
      svgNotChecked3: this.state.svgChecked,
      svgBadgeNotStarted1: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE2 = e => {
    this.setState({
      notStarted2: this.state.complete,
      svgNotStarted2: this.state.svgComplete,
      svgNotCheckedE2C3: this.state.svgChecked,
      svgBadgeNotStarted2: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE3 = e => {
    this.setState({
      notStarted3: this.state.complete,
      svgNotStarted3: this.state.svgComplete,
      svgNotCheckedE3C4: this.state.svgChecked,
      svgBadgeNotStarted3: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE4 = e => {
    this.setState({
      notStarted4: this.state.complete,
      svgNotStarted4: this.state.svgComplete,
      svgNotCheckedE4C3: this.state.svgChecked,
      svgBadgeNotStarted4: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE5 = e => {
    this.setState({
      notStarted5: this.state.complete,
      svgNotStarted5: this.state.svgComplete,
      svgNotCheckedE5C3: this.state.svgChecked,
      svgBadgeNotStarted5: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE6 = e => {
    this.setState({
      notStarted6: this.state.complete,
      svgNotStarted6: this.state.svgComplete,
      svgNotCheckedE6C2: this.state.svgChecked,
      svgBadgeNotStarted6: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE7 = e => {
    this.setState({
      notStarted7: this.state.complete,
      svgNotStarted7: this.state.svgComplete,
      svgNotCheckedE7C8: this.state.svgChecked,
      svgBadgeNotStarted7: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE8 = e => {
    this.setState({
      notStarted8: this.state.complete,
      svgNotStarted8: this.state.svgComplete,
      svgNotCheckedE8C6: this.state.svgChecked,
      svgBadgeNotStarted8: this.state.svgBadgeComplete
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
                          Who are our partners?
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
                          Mission 3 / Ep 1: Who are our partners?
                        </p>
                        <h3>Who are our partners?</h3>

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
                                Where do I find information on our partners?
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
                                What is the relationship like between DXC and
                                different partners?
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e3-list"
                                data-toggle="list"
                                href="#list-m1-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickFinishE1}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotChecked3}
                                </span>
                                Finding out more about our partners - where to
                                go
                              </a>
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
                                  src={image13}
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
                                  src={image7}
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
                                  src={image17}
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
                                  src={image5}
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
                                  src={image12}
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
                          How do we manage partner relationships?
                        </button>
                      </span>
                    </div>

                    <div className="col">
                      <span className="ep-text-time">16 Min</span>
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
                          Mission 3 / Ep 2: How do we manage partner
                          relationships?
                        </p>
                        <h3>How do we manage partner relationships?</h3>

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
                                Examples of healthy partner/DXC relationships
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
                                What do our partners expect from us?
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m2-e3-list"
                                data-toggle="list"
                                href="#list-m2-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickFinishE2}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE2C3}
                                </span>
                                What can we expect from our partners?
                              </a>
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
                                  src={image8}
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
                                  src={image14}
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
                                  src={image9}
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
                                  src={image10}
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
                                  src={image15}
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
                          Who are our partners ?
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
                          Mission 3 / Ep 3: Who are our partners?
                        </p>
                        <h3>Who are our partners?</h3>

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
                                Partner landscape overview
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
                                How do I engage with my partners?
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m3-e3-list"
                                data-toggle="list"
                                href="#list-m3-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickE3C3}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE3C3}
                                </span>
                                Working with my partners to get client meetings
                                booked
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m3-e4-list"
                                data-toggle="list"
                                href="#list-m3-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE3}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE3C4}
                                </span>
                                Value of the Partner Brand
                              </a>
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
                                  src={image1}
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
                                  src={image10}
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

            <div className="card">
              <div className="card-header" id="headingFour">
                <div className="container">
                  <div className="row py-2">
                    <div className="col-6">
                      <span>
                        <button
                          className="btn btn-link ep-text-button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          Co-pitching with partners
                        </button>
                      </span>
                    </div>
                    <div className="col">
                      <span className="ep-text-time">6 Min</span>
                    </div>

                    <div className="col">
                      <span className="ep-text-status">
                        <span className="ep-todo-span">
                          {this.state.svgNotStarted4}
                        </span>
                        {this.state.notStarted4}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div className="card-body pt-0 pb-5">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm">
                        <p className="mission-breadcrumb">
                          Mission 3 / Ep 4: Co-pitching with partners
                        </p>
                        <h3>Co-pitching with partners</h3>

                        <div class="row">
                          <div class="col-sm col-md-4">
                            <div
                              class="list-group"
                              id="list-tab"
                              role="tablist"
                            >
                              <a
                                class="list-group-item list-group-item-action active"
                                id="list-m4-e1-list"
                                data-toggle="list"
                                href="#list-m4-e1"
                                role="tab"
                                aria-controls="home"
                                onClick={this.handleClickE4C1}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE4C1}
                                </span>
                                Customer conversations with our partners -
                                planning
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m4-e2-list"
                                data-toggle="list"
                                href="#list-m4-e2"
                                role="tab"
                                aria-controls="profile"
                                onClick={this.handleClickE4C2}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE4C2}
                                </span>
                                Executing a meeting with a partner - what does
                                that look like?
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m4-e3-list"
                                data-toggle="list"
                                href="#list-m4-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickFinishE4}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE4C3}
                                </span>
                                Expectations on who does what
                              </a>
                            </div>
                          </div>
                          <div class="col-sm col-md-8">
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active text-center"
                                id="list-m4-e1"
                                role="tabpanel"
                                aria-labelledby="list-m4-e1-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image12}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m4-e2"
                                role="tabpanel"
                                aria-labelledby="list-m4-e2-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image19}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m4-e3"
                                role="tabpanel"
                                aria-labelledby="list-m4-e3-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image8}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m4-e4"
                                role="tabpanel"
                                aria-labelledby="list-m4-e4-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image3}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m4-e5"
                                role="tabpanel"
                                aria-labelledby="list-m4-e5-list"
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

            {/* End card 4 */}

            <div className="card">
              <div className="card-header" id="headingFive">
                <div className="container">
                  <div className="row py-2">
                    <div className="col-6">
                      <span>
                        <button
                          className="btn btn-link ep-text-button"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="true"
                          aria-controls="collapseFive"
                        >
                          Navigating multiple partner offers
                        </button>
                      </span>
                    </div>
                    <div className="col">
                      <span className="ep-text-time">21 Min</span>
                    </div>

                    <div className="col">
                      <span className="ep-text-status">
                        <span className="ep-todo-span">
                          {this.state.svgNotStarted5}
                        </span>
                        {this.state.notStarted5}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordion"
              >
                <div className="card-body pt-0 pb-5">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm">
                        <p className="mission-breadcrumb">
                          Mission 3 / Ep 5: Navigating multiple partner offers
                        </p>
                        <h3>Navigating multiple partner offers</h3>

                        <div class="row">
                          <div class="col-sm col-md-4">
                            <div
                              class="list-group"
                              id="list-tab"
                              role="tablist"
                            >
                              <a
                                class="list-group-item list-group-item-action active"
                                id="list-m5-e1-list"
                                data-toggle="list"
                                href="#list-m5-e1"
                                role="tab"
                                aria-controls="home"
                                onClick={this.handleClickE5C1}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE5C1}
                                </span>
                                Handling multiple “competing” partners
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m5-e2-list"
                                data-toggle="list"
                                href="#list-m5-e2"
                                role="tab"
                                aria-controls="profile"
                                onClick={this.handleClickE5C2}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE5C2}
                                </span>
                                Managing what is right for our clients and
                                keeping a healthy partnership
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m5-e3-list"
                                data-toggle="list"
                                href="#list-m5-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickFinishE5}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE5C3}
                                </span>
                                Setting expectations with multiple partners
                              </a>
                            </div>
                          </div>
                          <div class="col-sm col-md-8">
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active text-center"
                                id="list-m5-e1"
                                role="tabpanel"
                                aria-labelledby="list-m5-e1-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image15}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m5-e2"
                                role="tabpanel"
                                aria-labelledby="list-m5-e2-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image17}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m5-e3"
                                role="tabpanel"
                                aria-labelledby="list-m5-e3-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image1}
                                  alt=""
                                />
                              </div>
                              <div
                                class="tab-pane fade text-center"
                                id="list-m5-e4"
                                role="tabpanel"
                                aria-labelledby="list-m5-e4-list"
                              >
                                <img
                                  className="img-fluid"
                                  src={image11}
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

            <div className="col checkpoint-icon-wrap">
              {this.state.svgBadgeNotStarted4}
            </div>

            <div className="col checkpoint-icon-wrap">
              {this.state.svgBadgeNotStarted5}
            </div>
          </div>
        </div>

        {/* End Checkpoints */}
      </>
    );
  }
}
