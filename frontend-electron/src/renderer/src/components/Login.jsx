
export const Login = () => {
  return (
    <div className="login">
      <div className="topLine"></div>
      <form className="formLogin" action="" method="">
        <h1>Iniciar Sesión</h1>
        <label htmlFor="email">Correo Electronico</label>
        <input id="email" type="email"></input>
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password"></input>
        <input type="submit" value="Ingresar"></input>
      </form>
      <div className="img"></div>
      <div className="bottomLine"></div>
    </div>
  )

}

