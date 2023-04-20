import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App_old from './App_old'

import App from './App'
import Instructions from '../game/Instructions'
import UserWelcome from '../profile/UserWelcome'
import AboutUs from '../Components/AboutUs'

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/instructions'} element={<Instructions/>}/>
                <Route path={'/welcome'} element={<UserWelcome/>}/>
                <Route path={'/about-us'} element={<AboutUs/>}/>

                <Route path={'/old'} element={<App_old/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing
