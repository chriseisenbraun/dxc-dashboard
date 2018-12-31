import React, { Component } from "react";

export class AccordionHeader extends Component {
  render() {
    return (
      <div className="container mb-3">
        <div className="row">
          <div className="col-6">
            <span className="ep-accordion-heading pl-4">Episode name</span>
          </div>
          <div className="col">
            <span className="ep-accordion-heading">Episode length</span>
          </div>
          <div className="col">
            <span className="ep-accordion-heading">Status</span>
          </div>
        </div>
      </div>
    )
  }
}
