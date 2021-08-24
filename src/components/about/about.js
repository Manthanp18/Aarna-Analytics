import React, { Component } from "react";
export default class About extends Component {
  render() {
    
    return (
      <section id="about">
        <div style={{ backgroundColor: "orange" }}>
          <div
            style={{
              display: "flex",
              position: "relative",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img src="images/ab.webp" />
            <div
              style={{
                fontSize: "50px",
                position: "absolute",
                color: "white",
                top: "50%",
                left: "50%",
              }}
            >
              Our Business
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <text
              style={{ paddingTop: "50px", fontSize: "35px", color: "black" }}
            >
              How we got here
            </text>
            <text
              style={{
                paddingTop: "30px",
                paddingLeft: "100px",
                paddingRight: "100px",
                color: "black",
                fontSize: "20px",
                wordSpacing: "15px",
              }}
            >
              We're a talented group of engineers coming from various industries
              and academia. We all have advanced degrees and numerous years of
              experience in the field of Artificial Intelligence. Our work has
              been published at numerous conferences and journals around the
              globe.
            </text>
            <text
              style={{
                paddingTop: "30px",
                paddingLeft: "100px",
                paddingRight: "100px",
                color: "black",
                fontSize: "20px",
                wordSpacing: "15px",
              }}
            >
              What unites us and acted as the catalyst to form Aarna Analytics
              is our passion for this subject and our desire to use our
              expertise to create something that will help people make better
              decisions. We will strive to bring solutions to customers in
              various industries to help them make tactical and strategic
              decisions to overcome the challenges they face.
            </text>
            <text
              style={{
                paddingTop: "30px",
                paddingLeft: "100px",
                paddingRight: "100px",
                color: "black",
                fontSize: "20px",
                wordSpacing: "15px",
              }}
            >
              At Aarna Analytics, we believe that our technological edge and
              expertise can lead our customers towards a successful future. We
              will work to keep our technology ahead of the curve and accessible
              to everyone.
            </text>
          </div>
        </div>
      </section>
    );
  }
}
