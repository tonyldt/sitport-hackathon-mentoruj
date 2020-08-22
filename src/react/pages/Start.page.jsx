import React from "react";
import "./Start.styles.scss";
import {
    Link
  } from "react-router-dom";
  

import classroom from "../assets/images/google-classroom.svg";
import teams from "../assets/images/teams.svg";
import zoom from "../assets/images/zoom.svg";

const Start = () => {
  return (
        <div className="Start">
            <h1>What service would you like to use?</h1>
            <div className="Service-Container">
                    <Link to="/gm">
                        <div className="Service__gm">
                            <input type="image" src={classroom} alt="Google Classroom" />
                            <div>Classroom</div>
                        </div>
                    </Link>
                    <Link to="/mt">
                        <div className="Service__MT">
                            <input type="image" src={teams} alt="MS Teams"/>
                            <div>Teams</div>
                        </div>
                    </Link>
                    <Link to="/z">
                        <div className="Service__Z">
                            <input type="image" src={zoom} alt="Zoom"/>
                            <div>Zoom</div>
                        </div>
                    </Link>
            </div>
        </div>
  );
};

export default Start;