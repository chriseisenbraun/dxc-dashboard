import React, { Component } from 'react';
import './Accordion.css';
import '../Checkpoint/Checkpoint.css';
import { AccordionHeader } from '../AccordionHeader';

import image25 from './img/25-play.jpg';
import image1 from './img/1.jpg';
import image3 from './img/3.jpg';
import image4 from './img/4-player.jpg';
import image5 from './img/5.jpg';
import image6 from './img/6.jpg';
import image7 from './img/7.jpg';

import image8 from './img/8.jpg';
import image9 from './img/9-player.jpg';
import image10 from './img/10.jpg';
import image11 from './img/11-player.jpg';
import image12 from './img/12.jpg';
import image13 from './img/13.jpg';
import image14 from './img/14.jpg';
import image15 from './img/15-player.jpg';
import image17 from './img/17.jpg';

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
    <path
      d="M44.012 255.987c58.982 58.683 152.994 58.683 211.976 0 58.682-58.981 58.682-152.994 0-211.975-58.982-58.683-152.994-58.683-211.976 0-58.683 58.981-58.683 152.994 0 211.975zm9.88-9.88c-52.994-52.694-52.994-139.52 0-192.215 52.695-52.994 139.52-52.994 192.215 0 52.994 52.694 52.994 139.52 0 192.215-52.694 52.994-139.52 52.994-192.215 0zm38.323-47.904l48.204-48.204-48.204-48.203 9.581-9.58L150 140.418l48.203-48.204 9.581 9.58L159.581 150l48.203 48.204-9.58 9.58L150 159.58l-48.204 48.204-9.58-9.58v-.001z"
      fill="#b3b3b3"
    />
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
    <path d="M0 150c.212 83.262 66.738 149.788 150 150 83.262-.212 149.788-66.738 150-150C299.788 66.738 233.262.212 150 0 66.738.212.212 66.737 0 150zm13.983 0C13.77 75.212 75.213 13.771 150 13.983 224.788 13.77 286.229 75.212 286.017 150c.212 74.788-61.23 136.229-136.017 136.016C75.212 286.23 13.771 224.788 13.983 150zM75 143.22H225v13.56H75v-13.56z" />
  </svg>
);

let statusComplete = (
  <svg
    className="ep-todo-svg"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="1.5"
  >
    <path
      d="M150 13.555c75.302 0 136.446 61.144 136.446 136.446 0 75.3-61.143 136.445-136.445 136.445-75.302 0-136.446-61.143-136.446-136.445C12.953 74.699 74.699 13.555 150 13.555zM150 0C67.169 0 0 67.17 0 150c0 82.832 67.17 150 150 150 82.832 0 150-67.168 150-150 0-19.277-3.614-37.65-10.24-54.518C268.073 39.458 213.553 0 150 0z"
      fill="#49d3ff"
      fill-rule="nonzero"
    />
    <path
      d="M226.506 87.049L132.23 212.953 84.338 165.06"
      fill="none"
      stroke="#49d3ff"
      stroke-width="15.066320099999999"
    />
  </svg>
);

let incompleteText = <span className="incomplete-text">Not Started</span>;
let inProgressText = <span className="in-progress-text">In Progress</span>;
let completeText = <span className="complete-text">Completed</span>;

export class Accordion extends Component {
  state = {
    notStarted: incompleteText,
    inProgress: inProgressText,
    complete: completeText,

    notStarted2: incompleteText,
    inProgress2: inProgressText,
    complete2: completeText,

    notStarted3: incompleteText,
    inProgress3: inProgressText,
    complete3: completeText,

    notStarted4: incompleteText,
    inProgress4: inProgressText,
    complete4: completeText,

    notStarted5: incompleteText,
    inProgress5: inProgressText,
    complete5: completeText,

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

    // Pass this value to MissionCarousel Component
    // nextMission: isBlocked
  };

  //

  // let isBlocked = 'disabled-link-2';
  // let isAllowed = '';

  handleClickDisable = e => {
    // this.setState({ nextMission: isAllowed });
  };

  //

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

  handleClickE2C8 = e => {
    this.setState({ svgNotCheckedE2C8: this.state.svgChecked });
  };

  // EP 3 chapter checkmarks

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

  // FINISHED - LAST CHAPTER OF EACH EP

  handleClickFinishE1 = e => {
    this.setState({
      notStarted: this.state.complete,
      svgNotStarted: this.state.svgComplete,
      svgNotChecked7: this.state.svgChecked,
      svgBadgeNotStarted1: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE2 = e => {
    this.setState({
      notStarted2: this.state.complete,
      svgNotStarted2: this.state.svgComplete,
      svgNotCheckedE2C5: this.state.svgChecked,
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
      svgNotCheckedE4C5: this.state.svgChecked,
      svgBadgeNotStarted4: this.state.svgBadgeComplete
    });
  };

  handleClickFinishE5 = e => {
    this.setState({
      notStarted5: this.state.complete,
      svgNotStarted5: this.state.svgComplete,
      svgNotCheckedE5C4: this.state.svgChecked,
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
                          Mission 1 / Ep 1: Welcome to your role
                        </p>
                        <h3>Welcome to your role</h3>

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
                                Expectations of me week 1
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
                                How will I spend my time?
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
                                What does this onboarding look like?
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e4-list"
                                data-toggle="list"
                                href="#list-m1-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE1C4}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotChecked4}
                                </span>
                                Where do I go for help (internal sites/people)?
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e5-list"
                                data-toggle="list"
                                href="#list-m1-e5"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE1C5}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotChecked5}
                                </span>
                                Access I need (SFDC and others)
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e6-list"
                                data-toggle="list"
                                href="#list-m1-e6"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE1C6}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotChecked6}
                                </span>
                                Who are the people I need to know?
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e7-list"
                                data-toggle="list"
                                href="#list-m1-e7"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE1}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotChecked7}
                                </span>
                                What do I do first?
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
                                  src={image25}
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
                                  src={image1}
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
                                  src={image3}
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
                                  src={image4}
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
                                  src={image5}
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
                          Who is DXC?
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
                          Mission 1 / Ep 2: Who is DXC?
                        </p>
                        <h3>Who is DXC?</h3>

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
                                DXC Corporate Overview
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
                                DXC POV
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
                                DXC Differentiation Message
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m2-e4-list"
                                data-toggle="list"
                                href="#list-m2-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE2C4}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE2C4}
                                </span>
                                Brand value/recognition
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m2-e5-list"
                                data-toggle="list"
                                href="#list-m2-e5"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE2}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE2C5}
                                </span>
                                Selling a Service
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
                          Mission 1 / Ep 3: Who are our partners?
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
                          DXC Sales 101
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
                          Mission 1 / Ep 4: DXC Sales 101
                        </p>
                        <h3>DXC Sales 101</h3>

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
                                What is the DXC Sales Process?
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
                                Lead Generation at DXC
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m4-e3-list"
                                data-toggle="list"
                                href="#list-m4-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickE4C3}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE4C3}
                                </span>
                                Finding commonly used Sales Templates
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m4-e4-list"
                                data-toggle="list"
                                href="#list-m4-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE4C4}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE4C4}
                                </span>
                                Deal governance, your role, and your pursuit
                                team
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m4-e5-list"
                                data-toggle="list"
                                href="#list-m4-e5"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE4}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE4C5}
                                </span>
                                Selling R&R and touchpoints
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
                                  src={image3}
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
                                  src={image9}
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
                                  src={image10}
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
                                  src={image6}
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
                                  src={image5}
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
                          My Role 101
                        </button>
                      </span>
                    </div>
                    <div className="col">
                      <span className="ep-text-time">11 Min</span>
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
                          Mission 1 / Ep 5: My Role 101
                        </p>
                        <h3>My Role 101</h3>

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
                                How do I navigate DXC to get what I need?
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
                                How do I find the people I need to know - and
                                who are my resources?{' '}
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m5-e3-list"
                                data-toggle="list"
                                href="#list-m5-e3"
                                role="tab"
                                aria-controls="messages"
                                onClick={this.handleClickE5C3}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE5C3}
                                </span>
                                Who can I get to help me navigate DXC in the
                                first months?
                              </a>
                              <a
                                class="list-group-item list-group-item-action m2-start"
                                id="list-m5-e4-list"
                                data-toggle="list"
                                href="#list-m5-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE5}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE5C4}
                                </span>
                                How do I get paid?{' '}
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
