import React, { Component } from "react";
export default class OurTechno extends Component {
  render() {
    return (
      <section style={{ backgroundColor: "black" }} id="resume">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "orange", fontSize: "50px", paddingTop: "60px" }}>
            Our Technology
          </h1>
          <text style={{ padding: "40px", fontSize: "30px" }}>
            Profitis Prediction Engine
          </text>
          <text
            style={{
              paddingTop: "30px",
              paddingLeft: "100px",
              paddingRight: "100px",
              paddingBottom: "50px",

              fontSize: "20px",
              wordSpacing: "15px",
            }}
          >
            At Aarna Analytics, we have undertaken the greatest challenge there
            is. Predicting the future is a tough task, even with today's
            technology. The Profitis Prediction Engine will use state of the art
            methodologies to hyper-tune our models using AI to give the best
            insights possible for a given problem. Our engine will analyze vast
            amounts of data and output usable and measurable insights that will
            enable our customers to reach new heights. Profitis will be a game
            changer!
          </text>
        </div>
        <div>
          <img src="images/drone.webp" alt="" style={{ width: "100%" }} />
          {/* <img src="images/vision.webp" alt="" style={{ width: "100%" }} /> */}
        </div>
      </section>
    );
  }
}
