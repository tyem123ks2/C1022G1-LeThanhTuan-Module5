import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import BookList from "./component/bookList";
import CreateBook from "./component/create";

function App() {
    return (
        <>
            <Routes>
                <Route path='/books/' element={<BookList/>}/>
                <Route path='/books-create' element={<CreateBook/>}/>
            </Routes>
        </>
    );
}

export default App;
