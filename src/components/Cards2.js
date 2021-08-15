import React, { useState, useEffect } from "react";
import { Card, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Button } from "reactstrap";
import "../style/app.css";
import corazon from "../style/assets/corazon.png";
import Progreso from "./Progreso";

const Cards2 = () => {
  const [boton, setBoton] = useState([]);

  useEffect(() => {
    //obtenerPregunta();
  },[]);

 /*  const obtenerPregunta = async () => {
    const url = "https://sprint-app-api.herokuapp.com/game2";
    const res = await fetch(url);
    const data = await res.json();
    setBoton(data);
    console.log(data)
  }  */ 
 
 
  const handleAddBoton = () => {
    
  }  
    
    return (
        <div
        className="d-flex justify-content-center align-items-center vh-100 vw-100"
        style={{ background: "#6B47DC" }}
        >
{
}
            <Card className="celu bg-dark" style={{ width: "19rem" }}>
          <Card.Body
            className="d-flex justify-content-between"
            style={{ height: "40px" }}
            >
            <span className="text-white mx-2">X</span>
            <Progreso />
            <span className="text-white d-flex mx-2">
              <Card.Img
                src={corazon}
                style={{ width: "20px", height: "20px" }}
                />
              4
            </span>
          </Card.Body>
          <Card.Body
            className="d-flex mx-4 justify-content-between flex-column"
            style={{ height: "auto" }}
            >
            <Card.Text className="text-light text-center fs-5">
            Organiza la estructura de un documento HTML5
            </Card.Text>
              <p>hola</p>
          </Card.Body>
          <hr style={{ color: "white" }} />
          <Card.Body style={{ height: "auto" }}>
            <Card.Text>
              <FormGroup>
                <FormGroup className="formJuegoDos d-flex flex-wrap justify-content-center align-items-center">
                  <input
                    onClick={handleAddBoton}
                    className="botoncito"
                    type="button"
                    name="<DOCTYPE html>"
                    value="<DOCTYPE html>"
                    />
                    <input
                      onClick={handleAddBoton}
                      className="botoncito"
                      type="button"
                      name="</html>"
                      value="</html>"
                      />
                  <input
                    onClick={handleAddBoton}
                    className="botoncito"
                    type="button"
                    name="<body></body>"
                    value="<body></body>"
                    />
                    <input
                      onClick={handleAddBoton}
                      className="botoncito"
                      type="button"
                      name="<html>"
                      value="<html>"
                      />
                  <input
                    onClick={handleAddBoton}
                    className="botoncito"
                    type="button"
                    name="<head></head>"
                    value="<head></head>"
                    />
                </FormGroup>
              </FormGroup>
            </Card.Text>
          </Card.Body>
          <Card.Body style={{ height: "50px" }}>
            <Button
              style={{ background: "#7F5AF0", width: "100%" }}
              size="lg"
              disabled
              >
              Comprobar
            </Button>
          </Card.Body>
        </Card>
        
    
    

      </div>
    );
};

export default Cards2;
