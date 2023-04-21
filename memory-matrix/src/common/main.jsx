import React from 'react'
import ReactDOM from 'react-dom/client'
import App_old from './App_old'
import './index.css'
import UserWelcome from '../profile/UserWelcome'
import Routing from './Routing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
)
