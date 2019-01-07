import React, {Component} from "react";
import './Accordion.css'

import { AccordionHeader } from "../AccordionHeader";

export class Accordion extends Component {

  state = {
    currentStatus: 'Not Started',
    notStarted: 'Not Started',
    inProgress: 'In Progress',
    complete: 'Complete',
    currentStatus2: 'Not Started 2',
    notStarted2: 'Not Started',
    inProgress2: 'In Progress',
    complete2: 'Complete',

    svgStatus:
      <svg
        className="ep-todo-svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.2 130.2">
        <circle
          className="path circle completed-svg"
          fill="none"
          stroke="#000"
          stroke-width="6"
          stroke-miterlimit="10"
          cx="65.1"
          cy="65.1"
          r="62.1" />
        <polyline
          className="path check"
          fill="none"
          stroke="#000"
          stroke-width="6"
          stroke-linecap="round"
          stroke-miterlimit="10"
          points="100.2,40.2 51.5,88.8 29.8,67.5 " />
      </svg>,

svgRed:
  <svg
      className="ep-todo-svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2">
      <circle
        className="path circle completed-svg"
        fill="none"
        stroke="#f00"
        stroke-width="6"
        stroke-miterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"/>
      <polyline
        className="path check"
        fill="none"
        stroke="#f00"
        stroke-width="6"
        stroke-linecap="round"
        stroke-miterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
    </svg>,

    svgGreen:
      <svg
        className="ep-todo-svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.2 130.2">
        <circle
          className="path circle completed-svg"
          fill="none"
          stroke="#bada55"
          stroke-width="6"
          stroke-miterlimit="10"
          cx="65.1"
          cy="65.1"
          r="62.1" />
        <polyline
          className="path check"
          fill="none"
          stroke="#bada55"
          stroke-width="6"
          stroke-linecap="round"
          stroke-miterlimit="10"
          points="100.2,40.2 51.5,88.8 29.8,67.5 " />
      </svg>
  }

handleClick = (e) => {
  console.log(e.target);
  console.log(this.state);
  this.setState({
    currentStatus: this.state.inProgress,
    svgStatus: this.state.svgGreen
  });
}

handleClickFinish = (e) => {
  console.log(e.target);
  console.log(this.state);
  this.setState({
    currentStatus: this.state.complete,
    svgStatus: this.state.svgRed
  });
}

  // M1 Ep2 test

  handleClickE2 = (e) => {
    console.log(e.target);
    console.log(this.state);
    this.setState({
      currentStatus2: this.state.inProgress2,
      svgStatus: this.state.svgGreen
    });
  }

  handleClickFinish2 = (e) => {
    console.log(e.target);
    console.log(this.state);
    this.setState({
      currentStatus2: this.state.complete,
      svgStatus2: this.state.svgRed
    });
  }

  render() {

    return (
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
                        Welcome to your role
                      </button>
                    </span>
                  </div>
                  <div className="col">
                    <span className="ep-text-time">8 Min</span>
                  </div>

                  <div className="col">
                    <span className="ep-text-status">
                      <span className="ep-todo-span click-m1-e1">
                      {this.state.svgStatus}

                      </span>{this.state.currentStatus}</span>
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
                      <p className="mission-breadcrumb">Mission 1 / Ep 1: Welcome to your role</p>
                      <h3>Welcome to your role</h3>

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
                              onClick={this.handleClick}>
                              <span className="ep-todo-span">

                                {this.state.svgStatus}

                              </span>Expectations of me week 1</a>

                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m1-e2-list"
                              data-toggle="list"
                              href="#list-m1-e2"
                              role="tab"
                              aria-controls="profile">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>How will I spend my time?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m1-e3-list"
                              data-toggle="list"
                              href="#list-m1-e3"
                              role="tab"
                              aria-controls="messages">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>What does this onboarding look like</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m1-e4-list"
                              data-toggle="list"
                              href="#list-m1-e4"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Where do I go for help?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m1-e5-list"
                              data-toggle="list"
                              href="#list-m1-e5"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Access I need</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m1-e6-list"
                              data-toggle="list"
                              href="#list-m1-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Who are the people I need to know?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m1-e7-list"
                              data-toggle="list"
                              href="#list-m1-e7"
                              role="tab"
                              aria-controls="settings"
                              onClick={this.handleClickFinish}>
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>What do I do first?</a>

                          </div>
                        </div>
                        <div class="col-sm col-md-8">
                          <div class="tab-content" id="nav-tabContent">
                            <div
                              class="tab-pane fade show active text-center"
                              id="list-m1-e1"
                              role="tabpanel"
                              aria-labelledby="list-m1-e1-list">
                              <iframe
                                title="list-m1-e1"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/fU1eliXFmbo"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m1-e2"
                              role="tabpanel"
                              aria-labelledby="list-m1-e2-list">
                              <iframe
                                title="list-m1-e2"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/DdSBxX3Gmjo"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m1-e3"
                              role="tabpanel"
                              aria-labelledby="list-m1-e3-list">
                              <iframe
                                title="list-m1-e3"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/P24bH3nmOO0"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m1-e4"
                              role="tabpanel"
                              aria-labelledby="list-m1-e4-list">
                              <iframe
                                title="list-m1-e4"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/mYqkbU6pHeg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m1-e5"
                              role="tabpanel"
                              aria-labelledby="list-m1-e5-list">
                              <iframe
                                title="list-m1-e5"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/RAj7OVrZTRA"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m1-e6"
                              role="tabpanel"
                              aria-labelledby="list-m1-e6-list">
                              <iframe
                                title="list-m1-e6"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/2qBZhMSEYcg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m1-e7"
                              role="tabpanel"
                              aria-labelledby="list-m1-e7-list">
                              <iframe
                                title="list-m1-e7"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/bU2dZzRY-JU"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
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
                        Who are we?
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="ep-text-time">18 Min</span>
                  </div>

                  <div className="col">
                    <span className="ep-text-status">
                      <span className="ep-todo-span">
                        <svg
                          className="ep-todo-svg"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 130.2 130.2">
                          <circle
                            className="path circle"
                            fill="none"
                            stroke="#000"
                            stroke-width="6"
                            stroke-miterlimit="10"
                            cx="65.1"
                            cy="65.1"
                            r="62.1"/>
                          <polyline
                            className="path check"
                            fill="none"
                            stroke="#73AF55"
                            stroke-width="6"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                        </svg>
                      </span>{this.state.currentStatus2}</span>
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
                      <p className="mission-breadcrumb">Mission 1 / Ep 2: Who are we?</p>
                      <h3>Who are we?</h3>

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
                              onClick={this.handleClickE2}>
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>M1 EP2 CH1</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e2-list"
                              data-toggle="list"
                              href="#list-m2-e2"
                              role="tab"
                              aria-controls="profile">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>How will I spend my time?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e3-list"
                              data-toggle="list"
                              href="#list-m2-e3"
                              role="tab"
                              aria-controls="messages">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>What does this onboarding look like</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e4-list"
                              data-toggle="list"
                              href="#list-m2-e4"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Where do I go for help?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e5-list"
                              data-toggle="list"
                              href="#list-m2-e5"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Access I need</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e6-list"
                              data-toggle="list"
                              href="#list-m2-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Who are the people I need to know?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e7-list"
                              data-toggle="list"
                              href="#list-m2-e7"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>What do I do first?</a>

                          </div>
                        </div>
                        <div class="col-sm col-md-8">
                          <div class="tab-content" id="nav-tabContent">
                            <div
                              class="tab-pane fade show active text-center"
                              id="list-m2-e1"
                              role="tabpanel"
                              aria-labelledby="list-m2-e1-list">
                              <iframe
                                title="list-m2-e1"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/fU1eliXFmbo"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m2-e2"
                              role="tabpanel"
                              aria-labelledby="list-m2-e2-list">
                              <iframe
                                title="list-m2-e2"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/DdSBxX3Gmjo"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m2-e3"
                              role="tabpanel"
                              aria-labelledby="list-m2-e3-list">
                              <iframe
                                title="list-m2-e3"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/P24bH3nmOO0"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m2-e4"
                              role="tabpanel"
                              aria-labelledby="list-m2-e4-list">
                              <iframe
                                title="list-m2-e4"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/mYqkbU6pHeg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m2-e5"
                              role="tabpanel"
                              aria-labelledby="list-m2-e5-list">
                              <iframe
                                title="list-m2-e5"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/RAj7OVrZTRA"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m2-e6"
                              role="tabpanel"
                              aria-labelledby="list-m2-e6-list">
                              <iframe
                                title="list-m2-e6"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/2qBZhMSEYcg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m2-e7"
                              role="tabpanel"
                              aria-labelledby="list-m2-e7-list">
                              <iframe
                                title="list-m2-e7"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/bU2dZzRY-JU"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
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
                        aria-controls="collapseThree">
                        Who are our partners ?
                      </button>
                    </span>
                  </div>
                  <div className="col">
                    <span className="ep-text-time">6 Min</span>
                  </div>

                  <div className="col">
                    <span className="ep-text-status">
                      <span className="ep-todo-span">
                        <svg
                          className="ep-todo-svg"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 130.2 130.2">
                          <circle
                            className="path circle"
                            fill="none"
                            stroke="#000"
                            stroke-width="6"
                            stroke-miterlimit="10"
                            cx="65.1"
                            cy="65.1"
                            r="62.1"/>
                          <polyline
                            className="path check"
                            fill="none"
                            stroke="#73AF55"
                            stroke-width="6"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                        </svg>
                      </span>Not Started 3</span>
                  </div>

                </div>
              </div>
            </div>

            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion">
              <div className="card-body pt-0 pb-5">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-sm">
                      <p className="mission-breadcrumb">Mission 1 / Ep 3: Who are our partners?</p>
                      <h3>Who are our partners?</h3>

                      <div class="row">
                        <div class="col-sm col-md-4">
                          <div class="list-group" id="list-tab" role="tablist">
                            <a
                              class="list-group-item list-group-item-action active"
                              id="list-m3-e1-list"
                              data-toggle="list"
                              href="#list-m3-e1"
                              role="tab"
                              aria-controls="home">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Expectations of me week 2</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e2-list"
                              data-toggle="list"
                              href="#list-m3-e2"
                              role="tab"
                              aria-controls="profile">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>How will I spend my time?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e3-list"
                              data-toggle="list"
                              href="#list-m3-e3"
                              role="tab"
                              aria-controls="messages">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>What does this onboarding look like</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e4-list"
                              data-toggle="list"
                              href="#list-m3-e4"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Where do I go for help?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e5-list"
                              data-toggle="list"
                              href="#list-m3-e5"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Access I need</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e6-list"
                              data-toggle="list"
                              href="#list-m3-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Who are the people I need to know?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e7-list"
                              data-toggle="list"
                              href="#list-m3-e7"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>What do I do first?</a>

                          </div>
                        </div>
                        <div class="col-sm col-md-8">
                          <div class="tab-content" id="nav-tabContent">
                            <div
                              class="tab-pane fade show active text-center"
                              id="list-m3-e1"
                              role="tabpanel"
                              aria-labelledby="list-m3-e1-list">
                              <iframe
                                title="list-m3-e1"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/fU1eliXFmbo"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m3-e2"
                              role="tabpanel"
                              aria-labelledby="list-m3-e2-list">
                              <iframe
                                title="list-m3-e2"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/DdSBxX3Gmjo"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m3-e3"
                              role="tabpanel"
                              aria-labelledby="list-m3-e3-list">
                              <iframe
                                title="list-m3-e3"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/P24bH3nmOO0"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m3-e4"
                              role="tabpanel"
                              aria-labelledby="list-m3-e4-list">
                              <iframe
                                title="list-m3-e4"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/mYqkbU6pHeg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m3-e5"
                              role="tabpanel"
                              aria-labelledby="list-m3-e5-list">
                              <iframe
                                title="list-m3-e5"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/RAj7OVrZTRA"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m3-e6"
                              role="tabpanel"
                              aria-labelledby="list-m3-e6-list">
                              <iframe
                                title="list-m3-e6"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/2qBZhMSEYcg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m3-e7"
                              role="tabpanel"
                              aria-labelledby="list-m3-e7-list">
                              <iframe
                                title="list-m3-e7"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/bU2dZzRY-JU"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
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
                        aria-controls="collapseFour">
                        Sales 101
                      </button>
                    </span>
                  </div>
                  <div className="col">
                    <span className="ep-text-time">6 Min</span>
                  </div>

                  <div className="col">
                    <span className="ep-text-status">
                      <span className="ep-todo-span">
                        <svg
                          className="ep-todo-svg"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 130.2 130.2">
                          <circle
                            className="path circle"
                            fill="none"
                            stroke="#000"
                            stroke-width="6"
                            stroke-miterlimit="10"
                            cx="65.1"
                            cy="65.1"
                            r="62.1"/>
                          <polyline
                            className="path check"
                            fill="none"
                            stroke="#73AF55"
                            stroke-width="6"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                        </svg>
                      </span>Not Started</span>
                  </div>

                </div>
              </div>
            </div>

            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordion">
              <div className="card-body pt-0 pb-5">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-sm">
                      <p className="mission-breadcrumb">Mission 1 / Ep 4: Sales 101</p>
                      <h3>Sales 101</h3>

                      <div class="row">
                        <div class="col-sm col-md-4">
                          <div class="list-group" id="list-tab" role="tablist">
                            <a
                              class="list-group-item list-group-item-action active"
                              id="list-m4-e1-list"
                              data-toggle="list"
                              href="#list-m4-e1"
                              role="tab"
                              aria-controls="home">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Expectations of me week 4</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e2-list"
                              data-toggle="list"
                              href="#list-m4-e2"
                              role="tab"
                              aria-controls="profile">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>How will I spend my time?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e3-list"
                              data-toggle="list"
                              href="#list-m4-e3"
                              role="tab"
                              aria-controls="messages">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>What does this onboarding look like</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e4-list"
                              data-toggle="list"
                              href="#list-m4-e4"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Where do I go for help?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e5-list"
                              data-toggle="list"
                              href="#list-m4-e5"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Access I need</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e6-list"
                              data-toggle="list"
                              href="#list-m4-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Who are the people I need to know?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e7-list"
                              data-toggle="list"
                              href="#list-m4-e7"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>What do I do first?</a>

                          </div>
                        </div>
                        <div class="col-sm col-md-8">
                          <div class="tab-content" id="nav-tabContent">
                            <div
                              class="tab-pane fade show active text-center"
                              id="list-m4-e1"
                              role="tabpanel"
                              aria-labelledby="list-m4-e1-list">
                              <iframe
                                title="list-m4-e1"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/fU1eliXFmbo"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m4-e2"
                              role="tabpanel"
                              aria-labelledby="list-m4-e2-list">
                              <iframe
                                title="list-m4-e2"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/DdSBxX3Gmjo"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m4-e3"
                              role="tabpanel"
                              aria-labelledby="list-m4-e3-list">
                              <iframe
                                title="list-m4-e3"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/P24bH3nmOO0"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m4-e4"
                              role="tabpanel"
                              aria-labelledby="list-m4-e4-list">
                              <iframe
                                title="list-m4-e4"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/mYqkbU6pHeg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m4-e5"
                              role="tabpanel"
                              aria-labelledby="list-m4-e5-list">
                              <iframe
                                title="list-m4-e5"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/RAj7OVrZTRA"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m4-e6"
                              role="tabpanel"
                              aria-labelledby="list-m4-e6-list">
                              <iframe
                                title="list-m4-e6"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/2qBZhMSEYcg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m4-e7"
                              role="tabpanel"
                              aria-labelledby="list-m4-e7-list">
                              <iframe
                                title="list-m4-e7"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/bU2dZzRY-JU"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
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
                        aria-controls="collapseFive">
                        My Role 101
                      </button>
                    </span>
                  </div>
                  <div className="col">
                    <span className="ep-text-time">18 Min</span>
                  </div>

                  <div className="col">
                    <span className="ep-text-status">
                      <span className="ep-todo-span">
                        <svg
                          className="ep-todo-svg"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 130.2 130.2">
                          <circle
                            className="path circle"
                            fill="none"
                            stroke="#000"
                            stroke-width="6"
                            stroke-miterlimit="10"
                            cx="65.1"
                            cy="65.1"
                            r="62.1"/>
                          <polyline
                            className="path check"
                            fill="none"
                            stroke="#73AF55"
                            stroke-width="6"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                        </svg>
                      </span>Not Started</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="collapseFive"
              className="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordion">
              <div className="card-body pt-0 pb-5">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-sm">
                      <p className="mission-breadcrumb">Mission 1 / Ep 5: my Role 101</p>
                      <h3>My Role 101</h3>

                      <div class="row">
                        <div class="col-sm col-md-4">
                          <div class="list-group" id="list-tab" role="tablist">
                            <a
                              class="list-group-item list-group-item-action active"
                              id="list-m5-e1-list"
                              data-toggle="list"
                              href="#list-m5-e1"
                              role="tab"
                              aria-controls="home">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Expectations of me week 5</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e2-list"
                              data-toggle="list"
                              href="#list-m5-e2"
                              role="tab"
                              aria-controls="profile">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>How will I spend my time?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e3-list"
                              data-toggle="list"
                              href="#list-m5-e3"
                              role="tab"
                              aria-controls="messages">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>What does this onboarding look like</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e4-list"
                              data-toggle="list"
                              href="#list-m5-e4"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Where do I go for help?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e5-list"
                              data-toggle="list"
                              href="#list-m5-e5"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Access I need</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e6-list"
                              data-toggle="list"
                              href="#list-m5-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>Who are the people I need to know?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e7-list"
                              data-toggle="list"
                              href="#list-m5-e7"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                <svg
                                  className="ep-todo-svg"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 130.2 130.2">
                                  <circle
                                    className="path circle"
                                    fill="none"
                                    stroke="#000"
                                    stroke-width="6"
                                    stroke-miterlimit="10"
                                    cx="65.1"
                                    cy="65.1"
                                    r="62.1"/>
                                  <polyline
                                    className="path check"
                                    fill="none"
                                    stroke="#73AF55"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                                </svg>
                              </span>What do I do first?</a>

                          </div>
                        </div>
                        <div class="col-sm col-md-8">
                          <div class="tab-content" id="nav-tabContent">
                            <div
                              class="tab-pane fade show active text-center"
                              id="list-m5-e1"
                              role="tabpanel"
                              aria-labelledby="list-m5-e1-list">
                              <iframe
                                title="list-m5-e1"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/fU1eliXFmbo"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m5-e2"
                              role="tabpanel"
                              aria-labelledby="list-m5-e2-list">
                              <iframe
                                title="list-m5-e2"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/DdSBxX3Gmjo"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m5-e3"
                              role="tabpanel"
                              aria-labelledby="list-m5-e3-list">
                              <iframe
                                title="list-m5-e3"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/P24bH3nmOO0"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m5-e4"
                              role="tabpanel"
                              aria-labelledby="list-m5-e4-list">
                              <iframe
                                title="list-m5-e4"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/mYqkbU6pHeg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m5-e5"
                              role="tabpanel"
                              aria-labelledby="list-m5-e5-list">
                              <iframe
                                title="list-m5-e5"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/RAj7OVrZTRA"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m5-e6"
                              role="tabpanel"
                              aria-labelledby="list-m5-e6-list">
                              <iframe
                                title="list-m5-e6"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/2qBZhMSEYcg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                            <div
                              class="tab-pane fade text-center"
                              id="list-m5-e7"
                              role="tabpanel"
                              aria-labelledby="list-m5-e7-list">
                              <iframe
                                title="list-m5-e7"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/bU2dZzRY-JU"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                id="videoMagic"></iframe>
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

    );
  }
}
