import React from "react";
import "./ShareWindow.styles.scss";

import Pair from "../assets/images/pair.svg";
import Button from "../components/Button/Button.component";
import HButton from "../components/Button/HButton.component";

const ShareWindow = () => {
  return (
    <div className="ShareWindow">
      <img src={Pair} alt="Pair"/>
      <div className="ShareWindow__Container">
        <Button>Share dekstop</Button>
        <HButton>Don't share desktop</HButton>
      </div>
    </div>
  );
};

export default ShareWindow;
