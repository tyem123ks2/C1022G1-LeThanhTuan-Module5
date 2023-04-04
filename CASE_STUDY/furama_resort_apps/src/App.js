import logo from './logo.svg';
import './App.css';
import Header from "./Component/layout/header";
import FacilityList from "./Component/facility/facility-list";
import Footer from "./Component/layout/footer";

function App() {
  return (
  <div>
    <FacilityList/>
    <Footer/>
  </div>
  );
}

export default App;
