import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './core/Home'
import Appori from './core/Appori'
import HelloWorld from './core/HelloWorld'


const MainRouter = () =>{
return(
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="appori" element={<Appori />} />
        <Route path="hello" element={<HelloWorld/>} />
    </Routes>
)
}

export default MainRouter