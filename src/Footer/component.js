import React, {Component} from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {

    return (
      <footer class="footer">
        <div class="container">
          <div className="row">
            <div className="col">
              <span className="footer-text">Oxygen8</span>
            </div>
            <div className="col text-right">
              <span className="footer-text">&copy; 2019 oxygen all rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    )

  }
}
