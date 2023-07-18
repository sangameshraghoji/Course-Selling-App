import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup.jsx';
import Signin from './Signin'
import Appbar from './Appbar'
import AddCourse from './AddCourse'
import Courses from './Courses'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Appbar/>
      <Router>
          <Routes>
              <Route path="/login" element={ <Signin/>} />
              <Route path="/signup" element={ <Signup/>} />
              <Route path="/Addcourse" element={ <AddCourse/>} />
              <Route path="/Courses" element={ <Courses/>} />
              
          

          </Routes> 
      </Router>
    </div>
  );
}



export default App
