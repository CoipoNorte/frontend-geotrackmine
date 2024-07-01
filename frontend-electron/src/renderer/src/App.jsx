import { Login } from './components/Login'
import io from 'socket.io-client'

const socket = io("/") //dirección del backend

export const App = () => {
  return (
    <>
      <Login></Login>
    </>
  )
}

export default App
