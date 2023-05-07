import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header';

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';



  



function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>
      
      <Header />
      <Home />
      <Profile />
      
      
      
     
    </div>
  )
}


export default App
