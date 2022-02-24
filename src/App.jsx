import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import NewTodo from "./Components/NewTodo"
import { Route, Routes } from 'react-router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
        
       <NavBar/>
       <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/new' element={<NewTodo/>}/> 
        </Routes>
    </div>
  )
}

export default App
