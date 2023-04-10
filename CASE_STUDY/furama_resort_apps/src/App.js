import './App.css';
import Footer from "./Component/layout/footer";
import React from "react";
import CustomerList from "./Component/customer/customer-list";
import Header from "./Component/layout/header";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import CustomerCreate from "./Component/customer/customer-create";
import Navbar from "./Component/layout/navbar";
import CustomerEdit from "./Component/customer/customer-edit";
import FacilityList from "./Component/facility/facility-list";
import FacilityEdit from "./Component/facility/facility-edit";
import FacilityCreate from "./Component/facility/facility-create";
import ContractCreate from "./Component/contract/contract-create";
import ContractList from "./Component/contract/contract-list";
import Home from "./Component/layout/home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/facility-list/' element={<FacilityList/>}/>
                    <Route path='/facility-edit' element={<FacilityEdit/>}/>
                    <Route path='/facility-create' element={<FacilityCreate/>}/>
                    <Route path='/customer-list' element={<CustomerList/>}/>
                    <Route path='/customer-create' element={<CustomerCreate/>}/>
                    <Route path='/customer-edit/:id' element={<CustomerEdit/>}/>
                    <Route path='/contract-create' element={<ContractCreate/>}/>
                    <Route path='/contract-list' element={<ContractList/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    );
}

export default App;
