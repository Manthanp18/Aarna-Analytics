import React, { Component } from "react";
export default class Vision extends Component {
  render() {
    return (
      <section id="portfolio">
        <div style={{ position: "relative" }}>
          <img src="images/vision.webp" alt="" style={{ width: "100%" }} />
          <text
            style={{
              position: "absolute",
              bottom: "100px",
              right: "100px",
              fontSize: "30px",
              color: "white",
              // paddingLeft: "110px",
              paddingBottom: "350px",
              paddingRight: "75%",
            }}
          >
            Vision
          </text>
          <text
            style={{
              position: "absolute",
              bottom: "100px",
              right: "100px",
              fontSize: "30px",
              color: "white",
              paddingLeft: "150px",
              paddingBottom: "160px",
              // paddingRight: "100px",
            }}
          >
            We are building an investment advisor portal powered by Artificial
            Intelligence for personal users. Thereafter, we will offer API
            licenses to our proprietary model for commercial customers.
            Providing predictive analytics services for other domains will be
            part of the subsequent phase. If you are interested in our product,
            please contact us. Stay tuned for the latest updates!
          </text>
        </div>
      </section>
    );
  }
}

