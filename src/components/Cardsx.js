import React, { useState, useEffect } from "react";
import { Card, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Label, Button } from "reactstrap";
import check from "../style/assets/bien.png";
import "../style/app.css";
import corazon from "../style/assets/corazon.png";
import caracters from "../style/assets/caracters.png";
import Progreso from "./Progreso";

const Cards = () => {
  const [seleccion, setSeleccion] = useState();

  const cambioSeleccion = (e) => {
    setSeleccion(e.target.value);
  };

  const [pregunta, setPregunta] = useState([]);


  useEffect(() => {
    obtenerPregunta();
  }, []);

  const obtenerPregunta = async () => {
    const url = "https://sprint-app-api.herokuapp.com/game";
    const res = await fetch(url);
    const data = await res.json();
    setPregunta(data);
  };

  const handleComprobar = () => {
    if (seleccion === "Main") {
      console.log("main");
    }
    if (seleccion === "<script>") {
      console.log("script");
    }
    if (seleccion === "Don't repeat yourself") {
      console.log("Dont");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 vw-100"
      style={{ background: "#6B47DC" }}
    >
      <Card className="celu bg-dark" style={{ width: "19rem" }}>
        <Card.Body className="d-flex justify-content-between">
          <span className="text-white mx-2">X</span>
          <Progreso />
          <span className="text-white d-flex mx-2">
            <Card.Img src={corazon} style={{ width: "20px", height: "20px" }} />
            4
          </span>
        </Card.Body>
        <Card.Title className="d-flex mx-4 justify-content-between">
         
             <Card.Img className="caracters " src={caracters} alt="caracters" />


          <Card.Text className="text-light text-center fs-5">
          ¿Qué etiqueta es semánticamente correcta para el contenido principal?
          </Card.Text>
        </Card.Title>
        <Card.Body>
          <Card.Text>
            <FormGroup>
              <FormGroup className="formGroupRadios">
                <Label for="Main">
                  Main
                  <Input
                    id="Main"
                    type="radio"
                    value="Main"
                    checked={seleccion === `Main` ? true : false}
                    onChange={cambioSeleccion}
                  />
                  <img className="check" src={check} alt="checkcheck" />
                </Label>

                <Label for="Section">
                  Section
                  <Input
                    id="Section"
                    type="radio"
                    value="Section"
                    checked={seleccion === `Section` ? true : false}
                    onChange={cambioSeleccion}
                  />
                  <img className="check" src={check} alt="check" />
                </Label>

                <Label for="Header">
                  Header
                  <Input
                    id="Header"
                    type="radio"
                    value="Header"
                    checked={seleccion === `Header` ? true : false}
                    onChange={cambioSeleccion}
                  />
                  <img className="check" src={check} alt="check" />
                </Label>
              </FormGroup>
            </FormGroup>
          </Card.Text>
          <Button
            style={{ background: "#7F5AF0", width: "100%" }}
            size="lg"
            disabled={!seleccion}
            onClick={() => handleComprobar}
          >
            Comprobar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Cards;
/*   <Button 
                onClick={() => setSmShow(true)} 
                style={{ background: "#7F5AF0", width: "100%" }}
                size="lg"
                disabled={!seleccion}
                >Comprobar
              </Button>
              <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                    Small Modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
              </Modal> */
