import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Cond from './Cond'
import MealInfo from './MealInfo'
import {BrowserRouter , Route , Routes} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <React.StrictMode>
  <Routes>

<Route path='/' element={  <Cond />}/>
<Route path='/:idMeal' element={  <MealInfo />}/>


  </Routes>
  </React.StrictMode>
  
  </BrowserRouter>
  
)
