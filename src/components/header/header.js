import React, { Component } from "react";
import classes from "./header.module.css";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        {/*generated code*/}
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Our Technology
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Vision
                </a>
              </li>
              <li>
                <a
                  className="smoothscroll"
                  href="https://angel.co/company/aarna-analytics/jobs"
                  target="_blank"
                >
                  Careers
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Contact us
                </a>
              </li>
              {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 style={{ color: "yellow" }}>Welcome to Aarna Analytics</h1>
              <h3>See the future today</h3>
              <hr />
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
