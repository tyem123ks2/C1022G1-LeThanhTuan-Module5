import './App.css';
import FacilityList from "./Component/facility/facility-list";
import Footer from "./Component/layout/footer";
import React from "react";
import CustomerList from "./Component/customer/customer-list";

function App() {
  return (
  <div>
    <CustomerList/>
    <Footer/>
  </div>
  );
}

export default App;
