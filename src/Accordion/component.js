import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import './Accordion.css'

export class Accordion extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div id="accordion">
        <div className="container">
            <div className="row d-flex justify-content-between">
              <span>Episode name</span>
              <span>Episode length</span>
              <span>Status</span>
            </div>
        </div>

          <div className="card">
            <div className="card-header" id="headingOne">
              <div className="mb-0 d-flex justify-content-between">

              <span>Welcome to your role</span>
              <span>8 Min</span>
              <span>Not Started</span>
              <span><button
                  className="btn btn-link test-arrow"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  >
                </button>
                </span>
              </div>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion">
              <div className="card-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-sm">
                      <h3>Welcome to your role</h3>

                      <div class="row">
                        <div class="col-sm col-md-4">
                          <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" id="list-step1-list" data-toggle="list" href="#list-step1" role="tab" aria-controls="home">Expectations of me week 1</a>
                            <a class="list-group-item list-group-item-action" id="list-step2-list" data-toggle="list" href="#list-step2" role="tab" aria-controls="profile">How will I spend my time?</a>
                            <a class="list-group-item list-group-item-action" id="list-step3-list" data-toggle="list" href="#list-step3" role="tab" aria-controls="messages">What does this onboarding look like</a>
                            <a class="list-group-item list-group-item-action" id="list-step4-list" data-toggle="list" href="#list-step4" role="tab" aria-controls="settings">Where do I go for help?</a>
                            <a class="list-group-item list-group-item-action" id="list-step5-list" data-toggle="list" href="#list-step5" role="tab" aria-controls="settings">Access I need</a>
                            <a class="list-group-item list-group-item-action" id="list-step6-list" data-toggle="list" href="#list-step6" role="tab" aria-controls="settings">Who are the people I need to know?</a>
                            <a class="list-group-item list-group-item-action" id="list-step7-list" data-toggle="list" href="#list-step7" role="tab" aria-controls="settings">What do I do first?</a>

                          </div>
                        </div>
                        <div class="col-sm col-md-8">
                          <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active text-center" id="list-step1" role="tabpanel" aria-labelledby="list-step1-list"><iframe width="560" height="315" src="https://www.youtube.com/embed/fU1eliXFmbo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <div class="tab-pane fade text-center" id="list-step2" role="tabpanel" aria-labelledby="list-step2-list"><iframe width="560" height="315" src="https://www.youtube.com/embed/DdSBxX3Gmjo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <div class="tab-pane fade text-center" id="list-step3" role="tabpanel" aria-labelledby="list-step3-list"><iframe width="560" height="315" src="https://www.youtube.com/embed/P24bH3nmOO0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <div class="tab-pane fade text-center" id="list-step4" role="tabpanel" aria-labelledby="list-step4-list"><iframe width="560" height="315" src="https://www.youtube.com/embed/mYqkbU6pHeg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <div class="tab-pane fade text-center" id="list-step5" role="tabpanel" aria-labelledby="list-step5-list"><iframe width="560" height="315" src="https://www.youtube.com/embed/RAj7OVrZTRA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <div class="tab-pane fade text-center" id="list-step6" role="tabpanel" aria-labelledby="list-step6-list"><iframe width="560" height="315" src="https://www.youtube.com/embed/2qBZhMSEYcg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <div class="tab-pane fade text-center" id="list-step7" role="tabpanel" aria-labelledby="list-step7-list"><iframe width="560" height="315" src="https://www.youtube.com/embed/bU2dZzRY-JU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                          </div>
                        </div>
                      </div>

                      </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo">
                  Collapsible Group Item #2
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion">
              <div className="card-body">
                <h4>Episode Title</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree">
                  Collapsible Group Item #3
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion">
              <div className="card-body">
                <h4>Ep 1 title</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
