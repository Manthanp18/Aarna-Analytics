import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <i
              className="fa fa-linkedin-square"
              style={{ fontSize: "24px", paddingLeft: "50px" }}
            >
              <a
                href="https://angel.co/company/aarna-analytics/jobs"
                target="_blank"
              ></a>
            </i>

            <ul className="copyright">
              <li>Made with ❤ by Manthan</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
