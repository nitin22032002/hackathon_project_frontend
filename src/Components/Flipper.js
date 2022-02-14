import React, { useState } from "react";
import Login from "./Login";
import ReactCardFlip from "react-card-flip";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Flipper(props) {
  const history = useHistory();
  const [isFlipped, setIsFlipped] = useState(history.location.state!=undefined|| history.location.state!=null?history.location.state:false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1}
    >
      <Login
        btntxt={"Sign in as Dealer"}
        linktxt={"Sign in as Driver"}
        handleClick={handleClick}
        mylink={'/dealerSignup'}
        state={false}
      />
      <Login
        btntxt={"Sign in as Driver"}
        linktxt={"Sign in as Dealer"}
        handleClick={handleClick}
        mylink={'/driverSignup'}
        state={true}
      />
    </ReactCardFlip>
  );
}
