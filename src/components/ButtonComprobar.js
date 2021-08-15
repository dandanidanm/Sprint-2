import React from "react";
import { Button } from 'react-bootstrap';

const ButtonComprobar = () => {
  return (
      <div className="d-grid gap-2">
        <Button style={{background:"#7F5AF0"}} size="lg">
          Comprobar
        </Button>{" "}
      </div>
  );
};

export default ButtonComprobar;