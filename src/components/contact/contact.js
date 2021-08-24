import React, { Component } from "react";
import Form from "../form/form";
export default class Testimonials extends Component {
  render() {
    // let resumeData = this.props.resumeData;

    return (
      <section id="testimonials" style={{ backgroundColor: "orange" }}>
        <div
          style={{
            backgroundColor: "orange",
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            height: "600px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2
              style={{
                color: "black",
                paddingTop: "100px",
                fontFamily: "sans-serif",
                fontSize: "45px",
              }}
            >
              Get in Touch
            </h2>
            <text style={{ padding: "15px" }}>McKinney, TX, USA</text>
            <text style={{ padding: "15px" }}>contact@aarnaanalytics.com</text>
            <text style={{ padding: "15px" }}>(214)856-0385</text>
            <i
              className="fa fa-linkedin-square"
              style={{ fontSize: "24px", paddingLeft: "50px" }}
            >
              <a
                href="https://angel.co/company/aarna-analytics/jobs"
                target="_blank"
              ></a>
            </i>
          </div>
          <div style={{ backgroundColor: "transparent" }}>
            <Form />
          </div>
        </div>
      </section>
    );
  }
}
