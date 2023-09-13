import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './signup'
import Login from './login'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div> 
     <BrowserRouter>
     <Routes>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/patient' element={<Login/>}></Route>
     </Routes>
     </BrowserRouter>
   </div>
  )
}

export default App
