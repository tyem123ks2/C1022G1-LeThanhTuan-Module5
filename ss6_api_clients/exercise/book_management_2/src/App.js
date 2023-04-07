import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import ShowList from "../src/Component/bookList"
import Add from "./Component/add";
import Edit from "./Component/edit";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<ShowList/>}/>
                <Route path='/add' element={<Add/>}/>
                <Route path='/edit/:id' element={<Edit/>}
                />
            </Routes>
        </>
    );
}

export default App;
