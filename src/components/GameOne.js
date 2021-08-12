import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProgressBar} from 'react-bootstrap'
import { 
 Container,
 Row,
 Col,
 Button,
 FormGroup,
 Input,
 Label,
} from 'reactstrap';
import '../style/app.css';
import check from '../style/assets/bien.png';
import caracters from '../style/assets/caracters.png';



const GameOne = () => {

 const[seleccion, setSeleccion] = useState();

  const cambioSeleccion = (e) => {

    setSeleccion(e.target.value);
  }

  const now = 60;


 return (
  <Container fluid="md">
  <Row className="justify-content-md-center">
   <Col md={5} className='d-flex flex-column justify-content-between align-items-center vh-100 bg-danger'>
    <Row className='mt-3'>
     <Col><h1 className='bg-primary d-flex justify-content-center align-items-center text-light'>hola</h1></Col>
     <Col>2</Col>
     <ProgressBar now={now} label={`${now}%`} visuallyHidden />
    </Row>
    <Row md={6} className='d-flex justify-content-around'>
     <img className="caracters col-3 d-flex aling-items-center"src={caracters} alt="avatar" />
     <p className='text-light col-7 fs-3'>¿Qué etiqueta es semánticamente correcta para el contenido principal?</p>
    </Row>
    <Row>
    <FormGroup>
      <FormGroup className="formGroupRadios">
        
          <Label for="radio1">
            Main
          <Input
            id="radio1"
            type="radio"
            value="main"
            checked={seleccion === 'main' ? true : false}
            onChange={cambioSeleccion}
          />
          <img className="check"src={check} alt="" />
          </Label>
       

        
          <Label for="radio2">
            Section
          <Input
            id="radio2"
            type="radio"
            value="section"
            checked={seleccion === 'section' ? true : false}
            onChange={cambioSeleccion}
          />
          <img className="check"src={check} alt="" />
          </Label>
        

       
          <Label for="radio3">
            Header
          <Input
            id="radio3"
            type="radio"
            value="header"
            checked={seleccion === 'header' ? true : false}
            onChange={cambioSeleccion}
          />
          <img className="check"src={check} alt="" />
          </Label>
        
      </FormGroup>
     </FormGroup>
    </Row>
    <Row className="d-grid gap-2 mb-3">
     <Button variant="primary" size="lg" disabled>
       Block level button
     </Button>
    </Row>
    </Col>
  </Row>
</Container>
  
 )
}

export default GameOne
