import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Auth} from "../../pages";
import {Result} from "../../pages/Result/Result";
import {Private} from "../hoc";

function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/auth' element={<Auth/>}/>
                <Route path='/' element={<Private><Result/></Private>}/>
            </Routes>
        </div>
    );
}

export default App;