import {Route, Routes} from 'react-router-dom'
import './App.css';
import ShowList from "./Component/show_list";
import Add from "./Component/add";
import Edit from "./Component/edit";
import {ToastContainer} from "react-toastify";
import React from "react";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<ShowList/>}/>
                <Route path='/add' element={<Add/>}/>
                <Route path='/edit/:id'
                       element={<Edit/>}
                />
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
