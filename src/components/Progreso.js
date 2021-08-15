import React from "react";
import { ProgressBar } from "react-bootstrap";

const Progreso = () => {
  const now = 0;

  const progressInstance = <ProgressBar now={now} label={`${now}%`}  style={{width: "100%"}} />;


  return progressInstance;
};

export default Progreso;
