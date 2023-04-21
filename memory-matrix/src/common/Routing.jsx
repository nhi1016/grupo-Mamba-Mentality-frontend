import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App_old from './App_old'

import App from './App'
import Instructions from '../game/Instructions'
import AboutUs from '../Components/AboutUs'
import Login from '../game/Login'
import Signup from '../game/signup'

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/instructions'} element={<Instructions/>}/>
                <Route path={'/about-us'} element={<AboutUs/>}/>
                <Route path={'/old'} element={<App_old/>}/>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing
