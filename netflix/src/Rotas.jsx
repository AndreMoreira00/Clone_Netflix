import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Inicio from "./pages/Inicio"
import Explorar from "./pages/Explorar";
import Video from "./pages/Video";
import Painel from "./pages/Painel.jsx";


export default function Rotas() {
    return <BrowserRouter>
      <Routes>
        {/* <Route index path="/" element={ <Inicio/> }/> */}
        <Route path="/painel" element={ <Painel/>}/>
        <Route path="/explorar" element={<Explorar/>}/>
        {/* <Route path="/video/:codigo" element={<video/>}/> */}
      </Routes>
    </BrowserRouter> 
}