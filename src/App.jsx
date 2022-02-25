import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import NewTodo from './Components/NewToDo/NewTodo';
import About from './Components/AboutMe/About'
import Task from './Components/task_details/Task'
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
            <Route path='/about' element={<About/>}/> 
            <Route path='/about' element={<About/>}/> 
            <Route path='/detail/:id' element={<Task/>}/> 

        </Routes>
    </div>
  )
}

export default App
