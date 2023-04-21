import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Instructions from '../game/Instructions'
import UserWelcome from '../profile/UserWelcome'
import Login from '../game/Login'
import Signup from '../game/signup'

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/instructions'} element={<Instructions/>}/>
                <Route path={'/welcome'} element={<UserWelcome/>}/>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing
