import React from "react";
import "./form.css";

export default function form() {
  return (
    <div>
      <form style={{ paddingTop: "100px" }}>
        <div>
          <input placeholder="Name" style={{ margin: "20px" }} />
          <input placeholder="Email" style={{ margin: "20px" }} />
        </div>
        <div>
          <input placeholder="Address" style={{ margin: "20px" }} />
          <input placeholder="Phone" style={{ margin: "20px" }} />
        </div>
        <div>
          <input
            placeholder="Subject"
            style={{ margin: "20px", width: "95%" }}
          />
        </div>
        <div>
          <input
            placeholder="Type your message here"
            style={{ margin: "20px", width: "95%", height: "50px" }}
          />
        </div>
        <div>
          <button
            style={{ margin: "20px", backgroundColor: "black", width: "95%" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
