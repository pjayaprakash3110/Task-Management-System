import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'
import Home from './layouts/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateTask from './pages/CreateTask'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
      <BrowserRouter>
      <Routes>
        <Route path="/CreateTask" element={<CreateTask />} />
        <Route path="/Home" element={<Home/>} />
       
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
