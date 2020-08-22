import React from 'react'
import Axios from 'axios'

const authentication = e =>{
    e.preventDefault()
    const form = e.target 
    
    const data ={
        "email": form.email.value,
        "password": form.password.value
    }
   
    Axios.post('http://3.230.230.245:5000/api/auth/login',data)
    .then(r => {
        localStorage.setItem('token',r.data.token)
        window.location="/"
    })
    .catch(e => console.log(e))
}


const login = () => {
    return(
    <div className="ed-grid">
        <div className="l-block"></div>
            <div className="m-to-center m-60 lg-30">
                <h1 className="center">
                <img src="http://miqueperu.com/img/me.png" alt="MDlogo"  />
                </h1>
                <form onSubmit={authentication.bind()}>
                <div className="form__item">
                    <label htmlFor="email">
                        Correo Electronico
                        <input type="email" name="email" id="email" placeholder="Ingrese su e-mail" required/>
                    </label>
                </div>
                <div className="form__item">
                    <label htmlFor="password">
                        Contraseña
                        <input type="password" name="password" id="password" placeholder="Ingrese su Contraseña" required/>
                    </label>
                </div>
                <div className="form_item">
                    <input type="submit" className="button full" value="Iniciar Sesion"/>
                </div>
                </form>
            </div>
        </div>
    )
}

export default login
