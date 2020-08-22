import React from "react";
import "./StartLesson.styles.scss";

import {
  Link
} from "react-router-dom";

import invite from "../assets/images/invite.png";
import startLesson from "../assets/images/start_lesson.png";

const StartLesson = () => {

  return (
    <div className="StartLesson"> 
    <Link to="/invite">
        <div className="StartLesson__Container">
          <input type="image" src={invite} alt="invite illustration"/>
          <div>Invite people</div>
        </div>
    </Link>
    <Link to="/sharewindow">
        <div className="StartLesson__Container">
          <input type="image" src={startLesson} alt="start lesson"/>
          <div>Start the lesson</div>
        </div>
    </Link>
      </div>
  );
};

export default StartLesson;