import React from "react";
import { Card, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Label } from "reactstrap";
import ButtonComprobar from "./ButtonComprobar";
import "../style/app.css";
import corazon from "../style/assets/corazon.png";
import Progreso from "./Progreso";



/* const Cards3 = () => {
    return (
    <div className='d-flex justify-content-center align-items-center vh-100 vw-100'style={{ background:"#6B47DC" }}>
      <Card className="celu bg-dark" style={{ width: "19rem" }}>
        <Card.Body className="d-flex justify-content-between" style={{ height:"40px" }}>
          <span className="text-white mx-2">X</span>
          <Progreso />
          <span className="text-white d-flex mx-2">
            <Card.Img src={corazon} style={{ width:"20px", height:"20px" }}/>4
          </span>
        </Card.Body>
        <Card.Body className="d-flex mx-4 justify-content-between" style={{ height:"auto" }}>
            <Card.Text className="text-light text-center fs-5">
            pregunta 2
            </Card.Text>
        <hr style={{color:"white"}}/>

            <p>respuesta</p>
          
        </Card.Body>
        <hr style={{color:"white"}}/>
        <Card.Body style={{ height:"auto" }}>
          <Card.Text>
              <FormGroup className="formJuegoDos d-flex flex-wrap justify-content-center align-items-center">
                <Input className="r-radio"type="radio" name="respuesta-juego3" value="angular" id="angular">
                <Label for="angular">
                <Card.Img src={} alt={} />
                Angular
                </Label>
                <Input className="r-radio"type="radio" name="respuesta-juego3" value="vue" id="vue">
                <Label for="vue">
                <Card.Img src={} alt={} />
                Vue.js
                </Label>
                <Input className="r-radio"type="radio" name="respuesta-juego3" value="windows" id="windows">
                <Label for="windows">
                <Card.Img src={} alt={} />
                Windows
                </Label>
                <Input className="r-radio"type="radio" name="respuesta-juego3" value="katlin" id="katlin">
                <Label for="katlin">
                <Card.Img src={} alt={} />
                Katlin
                </Label>
            </FormGroup>
          </Card.Text>
        </Card.Body>
        <Card.Body style={{ height:"50px" }}>
            <Button style={{background:"#7F5AF0"}} size="lg" disabled={!seleccion} onClick={()=> handleComprobar}>
          Comprobar
          </Button>
        </Card.Body>
      </Card>
      
        </div>
    )
}
 */
export default Cards3