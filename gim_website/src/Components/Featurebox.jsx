import React from "react";

function Featurebox(props) {
  return (
    <div className="a-box">
      <div class="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <p>
          we offer top-notch facilities and services to help you achieve your
          fitness goals.{" "}
        </p>
      </div>
    </div>
  );
}

export default Featurebox;
