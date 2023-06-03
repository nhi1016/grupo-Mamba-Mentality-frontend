import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from '../Views/App'
import Instructions from '../Views/Instructions'
import AboutUs from '../Components/AboutUs'
import Login from '../Views/Login'
import Signup from '../Views/Signup'
import Board from '../Views/Board'

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/instructions'} element={<Instructions/>}/>
                <Route path={'/about-us'} element={<AboutUs/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<Signup/>}/>
                <Route path={'/board'} element={<Board/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing
