import React, {Component} from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {

    return (
      <footer class="footer">
        <div class="container">
          <div className="row">
            <div className="col">
              <span className="text-light">Left</span>
            </div>
            <div className="col text-right">
              <span className="text-light">Right</span>
            </div>
          </div>
        </div>
      </footer>
    )

  }
}
