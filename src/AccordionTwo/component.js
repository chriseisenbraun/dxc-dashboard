import React, { Component } from 'react';
import '../Accordion/Accordion.css';
import '../Checkpoint/Checkpoint.css';
import { AccordionHeader } from '../AccordionHeader';

import image1 from './1.jpg';
import image3 from './3.jpg';
import image6 from './6.jpg';
import image7 from './7.jpg';

import image9 from './9-player.jpg';
import image10 from './10.jpg';
import image11 from './11-player.jpg';
import image12 from './12.jpg';
import image13 from './13.jpg';
import image14 from './14.jpg';
import image15 from './15-player.jpg';
import image16 from './16.jpg';
import image17 from './17.jpg';
import image20 from './20.jpg';
import image21 from './21.jpg';
import image22 from './22-player.jpg';
import image25 from './25.jpg';

import m2CheckpointBadge from './m2-badge.png';

// VARS

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

let badgeComplete = <img src={m2CheckpointBadge} alt="" />;

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

let checkpointText = (
  <p className="checkpoint-text">
    <span className="font-weight-bold">Checkpoint</span>
    <br />
    <span>Nice work! You’re done with Mission 2.</span>
    <br />
    <span>
      Complete this checkpoint and then you’ll have access to Mission 3.
    </span>
  </p>
);

let completeText = <span className="complete-text">Completed</span>;

// VARS

export class AccordionTwo extends Component {
  state = {
    notStarted: 'Not Started',
    inProgress: 'In Progress',
    complete: completeText,

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
    svgNotStarted8: statusNotStarted,

    // Complete

    // Badge Complete

    svgBadgeComplete: badgeComplete,

    // Checkpont Reached Text
    checkpointNotReached: '',
    checkpointReached: checkpointText
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
      svgNotChecked5: this.state.svgChecked
    });
  };

  handleClickFinishE2 = e => {
    this.setState({
      notStarted2: this.state.complete,
      svgNotStarted2: this.state.svgComplete,
      svgNotCheckedE2C5: this.state.svgChecked
    });
  };

  handleClickFinishE3 = e => {
    this.setState({
      notStarted3: this.state.complete,
      svgNotStarted3: this.state.svgComplete,
      svgNotCheckedE3C6: this.state.svgChecked
    });
  };

  handleClickFinishE4 = e => {
    this.setState({
      notStarted4: this.state.complete,
      svgNotStarted4: this.state.svgComplete,
      svgNotCheckedE4C3: this.state.svgChecked
    });
  };

  handleClickFinishE5 = e => {
    this.setState({
      notStarted5: this.state.complete,
      svgNotStarted5: this.state.svgComplete,
      svgNotCheckedE5C5: this.state.svgChecked,
      svgBadgeNotStarted5: this.state.svgBadgeComplete,
      checkpointNotReached: this.state.checkpointReached
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
                          DXC customer landscape
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
                          Mission 2 / Ep 1: DXC customer landscape
                        </p>
                        <h3> DXC customer landscape</h3>

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
                                What kinds of customers do we have?
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
                                How am I assigned customers?
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
                                New accounts (Who is DXC, what do you do and
                                what is the process, onboarding potential
                                clients, MSA acceleration)
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
                                Leveraging your relationships for new client
                                logos
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m1-e5-list"
                                data-toggle="list"
                                href="#list-m1-e5"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE1}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotChecked5}
                                </span>
                                What do our customers care about?
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
                                  src={image22}
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
                                  src={image3}
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
                                  src={image20}
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
                          What do I need to know about clients?
                        </button>
                      </span>
                    </div>

                    <div className="col">
                      <span className="ep-text-time">19 Min</span>
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
                          Mission 2 / Ep 2: What do I need to know about
                          clients?
                        </p>
                        <h3>What do I need to know about clients?</h3>

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
                                Know client relationships & stakeholders
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
                                All about the client’s organization
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
                                Mapping my region & industry of origin to my new
                                territory
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
                                Getting to know your client - where to go and
                                what to figure out
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
                                How to create customer relationships that are
                                strong
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
                                  src={image21}
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
                                  src={image17}
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
                                  src={image15}
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
                                  src={image9}
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
                                  src={image14}
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
                          Client Conversations
                        </button>
                      </span>
                    </div>
                    <div className="col">
                      <span className="ep-text-time">22 Min</span>
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
                          Mission 2 / Ep 3: Client Conversations
                        </p>
                        <h3>Client Conversations</h3>

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
                                Where do they start?
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
                                Types of clients and how to know the meeting
                                strategy
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
                                Case studies highlighting range of DXC work
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m3-e4-list"
                                data-toggle="list"
                                href="#list-m3-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE3C4}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE3C4}
                                </span>
                                Delivery led growth – how to land and expand
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m3-e5-list"
                                data-toggle="list"
                                href="#list-m3-e5"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE3C5}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE3C5}
                                </span>
                                Listen as well as hear your customer
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m3-e6-list"
                                data-toggle="list"
                                href="#list-m3-e6"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE3}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE3C6}
                                </span>
                                Digital sale or not? How to navigate
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
                                  src={image16}
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
                                  src={image22}
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
                          Industry overview
                        </button>
                      </span>
                    </div>
                    <div className="col">
                      <span className="ep-text-time">11 Min</span>
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
                          Mission 2 / Ep 4: Industry overview
                        </p>
                        <h3>Industry overview</h3>

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
                                Companies by industry - IT & Business Owners,
                                CXO
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
                                Where does DXC play and what do we know about
                                different industries?
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
                                How industry knowledge gets woven into the
                                fabric of customer conversations
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
                                  src={image13}
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
                                  src={image21}
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
                                  src={image25}
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
                                  src={image16}
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
                          Client conversations, part 2
                        </button>
                      </span>
                    </div>
                    <div className="col">
                      <span className="ep-text-time">23 Min</span>
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
                          Mission 2 / Ep 5: Client conversations, part 2
                        </p>
                        <h3>Client conversations, part 2</h3>

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
                                Client Meetings - Setup & who to take
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
                                DXC support for client conversations
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
                                Starting deal sizes for me as a new Seller
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m5-e4-list"
                                data-toggle="list"
                                href="#list-m5-e4"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickE5C4}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE5C4}
                                </span>
                                How do we focus on business outcomes & sell
                                digital?{' '}
                              </a>
                              <a
                                class="list-group-item list-group-item-action"
                                id="list-m5-e5-list"
                                data-toggle="list"
                                href="#list-m5-e5"
                                role="tab"
                                aria-controls="settings"
                                onClick={this.handleClickFinishE5}
                              >
                                <span className="ep-todo-span">
                                  {this.state.svgNotCheckedE5C5}
                                </span>
                                What does 'digital' mean to DXC, to our
                                Customers, and how to spot 'digital'
                                opportunities
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
              {this.state.svgBadgeNotStarted5}
            </div>
            <div className="col checkpoint-text-wrap">
              {this.state.checkpointNotReached}
            </div>
          </div>
        </div>

        {/* End Checkpoints */}
      </>
    );
  }
}
