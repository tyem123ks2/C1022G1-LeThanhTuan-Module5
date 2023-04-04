import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {Formik} from "formik";

export default function App() {
    let SEX_LIST;
    SEX_LIST = [{label: "Nam", value: "male"}, {label: "Nữ", value: 'female'}]
    const [form, setForm] = useState({});
    
    function handleChange(event) {

    }
    
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}


