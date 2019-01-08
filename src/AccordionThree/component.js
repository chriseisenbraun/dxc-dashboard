import React, { Component } from "react";
import './Accordion.css'
import { AccordionHeader } from "../AccordionHeader";
import { Checkpoint } from "../Checkpoint/component";

export class AccordionThree extends Component {

  state = {
    notStarted: 'Not Started',
    inProgress: 'In Progress',
    complete: 'Complete',

    notStarted2: 'Not Started 2',
    inProgress2: 'In Progress 2',
    complete2: 'Complete 2',

    notStarted3: 'Not Started 3',
    inProgress3: 'In Progress 3',
    complete3: 'Complete 3',

    notStarted4: 'Not Started 4',
    inProgress4: 'In Progress 4',
    complete4: 'Complete 4',

    notStarted5: 'Not Started 5',
    inProgress5: 'In Progress 5',
    complete5: 'Complete 5',

    svgNotChecked: <svg className="ep-todo-svg svg-circle" viewBox="0 0 301 301" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z" fill-rule="nonzero" stroke="#ff0" stroke-width=".15" transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotChecked2: <svg className="ep-todo-svg svg-circle" viewBox="0 0 301 301" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z" fill-rule="nonzero" stroke="#ff0" stroke-width=".15" transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgNotChecked3: <svg className="ep-todo-svg svg-circle" viewBox="0 0 301 301" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z" fill-rule="nonzero" stroke="#ff0" stroke-width=".15" transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    // TO DO ADD svgChecked2-* states

    svgChecked: <svg className="ep-todo-svg svg-checkmark-blue" viewBox="0 0 301 301" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z" fill-rule="nonzero" stroke="#49d3ff" stroke-width=".15" transform="matrix(6.78733 0 0 6.78733 -1283.663 -447.464)" /><path d="M226.873 87.531l-93.984 125.937L84.85 165.43" fill="none" stroke="#49d3ff" stroke-width="14" stroke-linecap="round" stroke-miterlimit="1.5" /></svg>,

    svgCircle: <svg className="ep-todo-svg svg-circle" viewBox="0 0 301 301" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z" fill-rule="nonzero" stroke="#ff0" stroke-width=".15" transform="matrix(6.78733 0 0 6.78733 -1283.659 -447.464)" /></svg>,

    svgInProgress: <svg className="ep-todo-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M150 0C67.2 0 0 67.2 0 150s67.2 150 150 150 150-67.2 150-150S232.8 0 150 0zm0 12c76.2 0 138 61.8 138 138s-61.8 138-138 138S12 226.2 12 150 73.8 12 150 12zM72 156h78V42h12v126H72v-12z" /></svg>,

    svgNotStarted: <svg className="ep-todo-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
    </svg>,

    svgNotStarted2: <svg className="ep-todo-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
    </svg>,

    svgNotStarted3: <svg className="ep-todo-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
    </svg>,

    svgNotStarted4: <svg className="ep-todo-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
    </svg>,

    svgNotStarted5: <svg className="ep-todo-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M150 0C66.818 0 0 66.816 0 150c0 83.181 66.818 150 150 150s150-66.819 150-150C300 66.816 233.182 0 150 0zm0 13.636c75 0 136.364 61.363 136.364 136.363S225 286.363 150 286.363 13.637 224.999 13.637 149.999 75 13.636 150 13.636zm6.818 61.363v68.182H225v13.636h-68.182V225h-13.636v-68.182H75v-13.636h68.182V74.999h13.636z" />
    </svg>,

    svgComplete: <svg className="ep-todo-svg" viewBox="0 0 301 301" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M211.3 68c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1-.1-11.1 9-20.1 20.1-20.1m0-2c-12.2 0-22.1 9.9-22.1 22.1 0 12.2 9.9 22.1 22.1 22.1 12.2 0 22.1-9.9 22.1-22.1 0-2.828-.532-5.533-1.502-8.019C228.686 71.842 220.672 66 211.3 66z" fill-rule="nonzero" stroke="#c9c9ce" stroke-width=".15" transform="matrix(6.78733 0 0 6.78733 -1283.663 -447.464)" /><path d="M226.873 87.531l-93.984 125.937L84.85 165.43" fill="none" stroke="#050505" stroke-width="14" stroke-linecap="round" stroke-miterlimit="1.5" /></svg>,

    svgBadgeNotStarted5: <svg className="checkpoint-icon"
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

    svgBadgeComplete5: <svg className="checkpoint-icon"
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

handleClickBadge1 = (e) => {
  this.setState({
    notStarted: this.state.inProgress,
    svgNotStarted: this.state.svgInProgress,
    svgNotChecked: this.state.svgChecked
  });
}

  handleClickE1 = (e) => {
    this.setState({
      notStarted: this.state.inProgress,
      svgNotStarted: this.state.svgInProgress,
      svgNotChecked: this.state.svgChecked
    });
  }

  handleClickE1C2 = (e) => {
    this.setState({
      svgNotChecked2: this.state.svgChecked
    });
  }
  handleClickE1C3 = (e) => {
    this.setState({
      svgNotChecked3: this.state.svgChecked
    });
  }
  handleClickE1C4 = (e) => {
    this.setState({
      svgNotChecked4: this.state.svgChecked
    });

  }
  handleClickE1C5 = (e) => {
    this.setState({
      svgNotChecked5: this.state.svgChecked
    });
  }

  handleClickE1C6 = (e) => {
    this.setState({
      svgNotChecked6: this.state.svgChecked
    });
  }

  handleClickE1C7 = (e) => {
    this.setState({
      svgNotChecked7: this.state.svgChecked
    });
  }

  handleClickE2 = (e) => {
    this.setState({
      notStarted2: this.state.inProgress,
      svgNotStarted2: this.state.svgInProgress
    });
  }

  // START
  handleClickE2C1 = (e) => {
    this.setState({
      svgNotChecked8: this.state.svgChecked
    });
  }

  handleClickE3 = (e) => {
    this.setState({
      notStarted3: this.state.inProgress,
      svgNotStarted3: this.state.svgInProgress
    });
  }

  handleClickE4 = (e) => {
    this.setState({
      notStarted4: this.state.inProgress,
      svgNotStarted4: this.state.svgInProgress
    });
  }

  handleClickE5 = (e) => {
    this.setState({
      notStarted5: this.state.inProgress,
      svgNotStarted5: this.state.svgInProgress
    });
  }

  handleClickFinishE1 = (e) => {
    this.setState({
      notStarted: this.state.complete,
      svgNotStarted: this.state.svgComplete
    });
  }

  handleClickFinishE2 = (e) => {
    this.setState({
      notStarted2: this.state.complete,
      svgNotStarted2: this.state.svgComplete
    });
  }

  handleClickFinishE3 = (e) => {
    this.setState({
      notStarted3: this.state.complete,
      svgNotStarted3: this.state.svgComplete
    });
  }

  handleClickFinishE4 = (e) => {
    this.setState({
      notStarted4: this.state.complete,
      svgNotStarted4: this.state.svgComplete
    });
  }

  handleClickFinishE5 = (e) => {
    this.setState({
      notStarted5: this.state.complete,
      svgNotStarted5: this.state.svgComplete,
      svgBadgeNotStarted5: this.state.svgBadgeComplete5
    });
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
                        *A3* Welcome to your role
                      </button>
                    </span>
                  </div>
                  <div className="col">
                    <span className="ep-text-time">3 Min</span>
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
                              onClick={this.handleClickE1}>
                              <span className="ep-todo-span">

                                {this.state.svgNotChecked}

                              </span>M1 E1 C1 Expectations of me week 1</a>

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

                              </span>M1 E1 C2 How will I spend my time?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m1-e3-list"
                              data-toggle="list"
                              href="#list-m1-e3"
                              role="tab"
                              aria-controls="messages"
                              onClick={this.handleClickE1C3}>
                              <span className="ep-todo-span">

                                {this.state.svgNotChecked3}

                              </span>M1 E1 C3 What does this onboarding look like</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m1-e4-list"
                              data-toggle="list"
                              href="#list-m1-e4"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>M1 E1 C4 Where do I go for help?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m1-e5-list"
                              data-toggle="list"
                              href="#list-m1-e5"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>M1 E1 C5 Access I need</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m1-e6-list"
                              data-toggle="list"
                              href="#list-m1-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>M1 E1 C6 Who are the people I need to know?</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m1-e7-list"
                              data-toggle="list"
                              href="#list-m1-e7"
                              role="tab"
                              aria-controls="settings"
                              onClick={this.handleClickFinishE1}>
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>M1 E1 C7 What do I do first?</a>

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

                                {this.state.svgNotChecked3}

                              </span>M1 E2 C1</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e2-list"
                              data-toggle="list"
                              href="#list-m2-e2"
                              role="tab"
                              aria-controls="profile">
                              <span className="ep-todo-span">

                                {this.state.svgCircle}

                              </span>M1 E2 C2</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e3-list"
                              data-toggle="list"
                              href="#list-m2-e3"
                              role="tab"
                              aria-controls="messages">
                              <span className="ep-todo-span">

                                {this.state.svgCircle}

                              </span>M1 E2 C3</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e4-list"
                              data-toggle="list"
                              href="#list-m2-e4"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>M1 E2 C4</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e5-list"
                              data-toggle="list"
                              href="#list-m2-e5"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>M1 E2 C5</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e6-list"
                              data-toggle="list"
                              href="#list-m2-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>M1 E2 C6</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m2-e7-list"
                              data-toggle="list"
                              href="#list-m2-e7"
                              role="tab"
                              aria-controls="settings"
                              onClick={this.handleClickFinishE2}>

                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>M1 E2 C7</a>

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
                    <span className="ep-text-time">7 Min</span>
                  </div>

                  <div className="col">
                    <span className="ep-text-status">
                      <span className="ep-todo-span">
                        {this.state.svgNotStarted3}

                      </span>{this.state.notStarted3}</span>
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
                              aria-controls="home"
                              onClick={this.handleClickE3}>
                              <span className="ep-todo-span">

                                {this.state.svgCircle}

                              </span>E1 E3 C1</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e2-list"
                              data-toggle="list"
                              href="#list-m3-e2"
                              role="tab"
                              aria-controls="profile">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>E1 E3 C2</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e3-list"
                              data-toggle="list"
                              href="#list-m3-e3"
                              role="tab"
                              aria-controls="messages">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>E1 E3 C3</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e4-list"
                              data-toggle="list"
                              href="#list-m3-e4"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>E1 E3 C4</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e5-list"
                              data-toggle="list"
                              href="#list-m3-e5"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>E1 E3 C5</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e6-list"
                              data-toggle="list"
                              href="#list-m3-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>E1 E3 C6</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m3-e7-list"
                              data-toggle="list"
                              href="#list-m3-e7"
                              role="tab"
                              aria-controls="settings"
                              onClick={this.handleClickFinishE3}>
                              <span className="ep-todo-span">
                                {this.state.svgCircle}

                              </span>E1 E3 C6</a>

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

                        {this.state.svgNotStarted4}
                      </span>{this.state.notStarted4}</span>
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
                              aria-controls="home"
                              onClick={this.handleClickE4}>
                              <span className="ep-todo-span">

                                {this.state.svgCircle}

                              </span>M1 E4 C1</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e2-list"
                              data-toggle="list"
                              href="#list-m4-e2"
                              role="tab"
                              aria-controls="profile">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>M1 E4 C2</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e3-list"
                              data-toggle="list"
                              href="#list-m4-e3"
                              role="tab"
                              aria-controls="messages">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>What does this onboarding look like</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e4-list"
                              data-toggle="list"
                              href="#list-m4-e4"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>M1 E4 C3</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e5-list"
                              data-toggle="list"
                              href="#list-m4-e5"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>M1 E4 C4</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e6-list"
                              data-toggle="list"
                              href="#list-m4-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>M1 E4 C5</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m4-e7-list"
                              data-toggle="list"
                              href="#list-m4-e7"
                              role="tab"
                              aria-controls="settings"
                              onClick={this.handleClickFinishE4}>
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>M1 E4 C6</a>

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
                    <span className="ep-text-time">11 Min</span>
                  </div>

                  <div className="col">
                    <span className="ep-text-status">
                      <span className="ep-todo-span">

                        {this.state.svgNotStarted5}

                      </span>{this.state.notStarted5}</span>

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
                              aria-controls="home"
                              onClick={this.handleClickE5}>
                              <span className="ep-todo-span">

                                {this.state.svgCircle}

                              </span>M1 E5 C1</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e2-list"
                              data-toggle="list"
                              href="#list-m5-e2"
                              role="tab"
                              aria-controls="profile">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>M1 E5 C2</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e3-list"
                              data-toggle="list"
                              href="#list-m5-e3"
                              role="tab"
                              aria-controls="messages">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>M1 E5 C3</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e4-list"
                              data-toggle="list"
                              href="#list-m5-e4"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>M1 E5 C4</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e5-list"
                              data-toggle="list"
                              href="#list-m5-e5"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>M1 E5 C5</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e6-list"
                              data-toggle="list"
                              href="#list-m5-e6"
                              role="tab"
                              aria-controls="settings">
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>M1 E5 C6</a>
                            <a
                              class="list-group-item list-group-item-action"
                              id="list-m5-e7-list"
                              data-toggle="list"
                              href="#list-m5-e7"
                              role="tab"
                              aria-controls="settings"
                              onClick={this.handleClickFinishE5}>
                              <span className="ep-todo-span">
                                {this.state.svgCircle}
                              </span>M1 E5 C7</a>

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

      {/* Start Checkpoints */}

        <div className="container checkpoint">
          <div className="row d-flex justify-content-between">

            <div className="col checkpoint-icon-wrap">

              <svg className="checkpoint-icon"
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
                  fill="#fff" /></svg>

            </div>

            <div className="col checkpoint-icon-wrap">
              <svg className="checkpoint-icon"
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
                  fill="#fff" /></svg>

            </div>

            <div className="col checkpoint-icon-wrap">
              <svg className="checkpoint-icon"
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
                  fill="#fff" /></svg>

            </div>

            <div className="col checkpoint-icon-wrap">
              <svg className="checkpoint-icon"
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
                  fill="#fff" /></svg>

            </div>

            <div className="col checkpoint-icon-wrap">

              {this.state.svgBadgeNotStarted5}
              {/* <svg className="checkpoint-icon"
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
                  fill="#fff" /></svg> */}

            </div>

            <div className="col checkpoint-icon-wrap">
              <svg className="checkpoint-icon"
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
                  fill="#fff" /></svg>

            </div>

          </div>
        </div>

      {/* End Checkpoints */}

      </>

    );
  }
}
