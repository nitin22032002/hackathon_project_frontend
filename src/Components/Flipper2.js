import React, { useEffect, useState } from "react";
import Login from "./Login";
import ReactCardFlip from "react-card-flip";
import DealerSignup from "./DealerSignup";
import DriverSignup from "./DriverSignup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Flipper2(props) {
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
      <DealerSignup handleClick={handleClick}  />
      <DriverSignup handleClick={handleClick}  />
    </ReactCardFlip>
  );
}
