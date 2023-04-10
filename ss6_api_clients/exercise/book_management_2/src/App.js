import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import ShowList from "./Component/Book/bookList"
import Add from "./Component/Book/add";
import Edit from "./Component/Book/edit";
import ShowList1 from "./Component/Category/categoryList";
import Add1 from "./Component/Category/add";
import Edit1 from "./Component/Category/edit";

function App() {
    return (
        <>
            <Routes>
                {/*<Route path='/' element={<ShowList/>}/>*/}
                {/*<Route path='/add' element={<Add/>}/>*/}
                {/*<Route path='/edit/:id' element={<Edit/>}/>*/}
                <Route path='/' element={<ShowList1/>}/>
                <Route path='/addCategory' element={<Add1/>}/>
                <Route path='/editCategory/:id' element={<Edit1/>}/>
            </Routes>
        </>
    );
}

export default App;
