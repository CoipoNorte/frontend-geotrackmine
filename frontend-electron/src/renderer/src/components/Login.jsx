import logo from '../assets/tiny-Codelco_logo.svg'
import * as data from '../services/userDev.json'

const authUser = () => {
  const inputEmail = document.querySelector('#email')
  const inputPassword = document.querySelector('#password')
  if (data.user === inputEmail.value) {
    if (data.pass === inputPassword.value) {
      return window.location.replace('/alarma-lista')
    }
    return 'Contraseña incorrecta'
  }
  return
}

export const Login = () => {
  return (
    <div className="container">
      <img className="backgroundImage"></img>
      <div className="login">
        <div className="logoCircle">
          <img className="logo" src={logo} />
        </div>
        <div className="formLogin" action="" method="">
          <label htmlFor="email">Usuario</label>
          <input name="email" id="email" type="email" placeholder="Inserte texto..."></input>
          <label htmlFor="password">Contraseña</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Inserte texto..."
          ></input>
          <button id="authUser" type="button" onClick={authUser}>Ingresar</button>
        </div>
      </div>
    </div>
  )
}
