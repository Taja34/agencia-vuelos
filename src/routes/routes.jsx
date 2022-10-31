import React, { createContext, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from '../App'
import Pago from "../main/pago/Pago";
import Asientos from "../main/vuelos/asientos/Asientos";

import Vuelos from "../main/vuelos/Vuelos";
export const AppContext = createContext({})
export const boleanoContext = createContext({})
const Router = () => {
    const [theme, settheme] = useState({})
    const [original, setoriginal] = useState({})
    const [theme2, settheme2] = useState({})
    const [asientosO, setasientoO] = useState({})
    const [showTitle2, setShowTitle2] = useState(true);
    const [boleano, setBoleano] = useState(false)
    return ( 
        <AppContext.Provider value={{theme,settheme,asientosO,setasientoO,showTitle2,setShowTitle2,boleano,setBoleano,settheme2,theme2,setoriginal,original}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="asientos" element={<Asientos />} />
                <Route path="vuelos"  element={<Vuelos />} />
                <Route path="pago"  element={<Pago />} />
                
            </Routes>
        </BrowserRouter>
        </AppContext.Provider>
    )
}

export default Router;