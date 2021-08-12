import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './imglogin/Logo.png'

const hrcolor = {
    color: 'aliceblue',
}

const pcolor = {
    color: '#BDECB6',
    textDecoration: 'none',

}

const googlebutton = {
    width: '350px',
    height: '60px',
}

const Log = {
     width:'100px',      
}

export default class Login extends Component {
    render() {
        return (
            <div className="bg-dark m-0 vh-100 row justify-content-center align-items-center">
                <div className="col-auto bg">
                    <div className="text-center">
                        <img style={Log} src={Logo}></img>
                    </div>
                    <br></br>
                    <h2 className="text-white text-center">Iniciar Sesion</h2>
                    <br></br>
                    <button style={googlebutton} type="button" class="btn btn-danger text-white" onclick="'"><i class="fab fa-google"></i> Continuar con Google</button>
                    <hr style={hrcolor}></hr>
                    <div className="form-group col auto">
                        <label for="examepleInputEmail1" className="text-white">Correo Electrónico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Ingrese su correo electrónico"></input>
                    </div>
                    <br></br>
                    <p class="text-white text-center"><a href="#" style={pcolor}>¿Se te olvidó tu contraseña?</a></p>
                    <p class="text-white text-center">¿Aún no tienes cuenta?<a href="#" style={pcolor}> Inscribirse</a></p>
                </div>
            </div>
        )
    }
}
