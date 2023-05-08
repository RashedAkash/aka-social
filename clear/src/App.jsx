import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header';

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound';



  



function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>
      
      <Header />
      
      
      <BrowserRouter>
        <Routes>
    <Route  path='/' element = {<Home />}>  </Route>         
              
          
          <Route path='/Profile' element={<Profile />}>          
          </Route>

          <Route path='*' element ={<NotFound />}>
            
          </Route>

          

          
        </Routes>
      
      </BrowserRouter>
      
      
      
     
    </div>
  )
}


export default App
