import logo from '../assets/tiny-Codelco_logo.svg'

export const Login = () => {
  return (
    <div className="container">
      <img className="backgroundImage"></img>
      <div className="login">
        <div className="logoCircle">
          <img className="logo" src={logo} />
        </div>
        <form className="formLogin" action="" method="">
          <label htmlFor="email">Usuario</label>
          <input name="email" id="email" type="email" placeholder="Inserte texto..."></input>
          <label htmlFor="password">Contraseña</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Inserte texto..."
          ></input>
          <input type="submit" value="Ingresar"></input>
        </form>
      </div>
    </div>
  )
}
