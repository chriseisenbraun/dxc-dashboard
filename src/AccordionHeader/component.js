import React, { Component } from "react";

export class AccordionHeader extends Component {
  render() {
    const { name, length, status } = this.props;
    return (
      <div className="container mb-3">
        <div className="row">
          <div className="col-6">
            <span className="ep-accordion-heading pl-4">{name}</span>
          </div>
          <div className="col">
            <span className="ep-accordion-heading">{length}</span>
          </div>
          <div className="col">
            <span className="ep-accordion-heading">{status}</span>
          </div>
        </div>
      </div>
    )
  }
}
