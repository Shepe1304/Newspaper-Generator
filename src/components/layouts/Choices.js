import React from "react";
import "./Choices.css";
import xIcon from "../assets/img/circle-xmark-regular.svg";

const Choices = (props) => {

  return (
    <div className="choices">
      <div className="icon choices--icon" onClick={props.HandleExitClicked}>
        <img src={xIcon} alt="" />
      </div>
      <div className="choices--headline">SOME CHOICES FOR YOU</div>
      <div className="choices--container">
        <div className="choice">
          <img src="" alt="" />
        </div>
        <div className="choice">
          <img src="" alt="" />
        </div>
        <div className="choice">
          <img src="" alt="" />
        </div>
        <div className="choice">
          <img src="" alt="" />
        </div>
        <div className="choice">
          <img src="" alt="" />
        </div>
        <div className="choice">
          <img src="" alt="" />
        </div>
        <div className="choice">
          <img src="" alt="" />
        </div>
        <div className="choice">
          <img src="" alt="" />
        </div>
        <div className="choice">
          <img src="" alt="" />
        </div>
        <div className="choice">
          <img src="" alt="" />
        </div>
        <div className="choice">
          <img src="" alt="" />
        </div>
        <div className="choice">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Choices;
