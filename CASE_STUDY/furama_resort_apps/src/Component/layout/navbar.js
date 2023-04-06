import {Component, React} from "react";
import {NavLink} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div
                className="row"
                style={{background: "#046056", height: 60, textAlign: "center"}}>
                <nav className="navbar navbar-expand-lg" style={{background: "#046056"}}>
                    <div className="collapse navbar-collapse container-fluid" id="navbarNavAltMarkup">
                        <div className="col-lg-1"/>
                        <div className="navbar-nav col-lg-8">
                            <div>
                                <button type="button" className="btn btn-close-white">
                                    <a href="/" style={{textDecoration: "none"}}>
                                        TRANG CHỦ
                                    </a>
                                </button>
                            </div>
                            <div style={{marginLeft: 30}}>
                                <button type="button" className="btn btn-close-white">
                                    <a href="../customer/customer-list" style={{textDecoration: "none"}}>
                                        NHÂN VIÊN
                                    </a>
                                </button>
                            </div>
                            <div style={{marginLeft: 30}}>
                                <button type="button" className="btn btn-close-white">
                                    <NavLink className="dropdown-item" to='/customer-list'>
                                       KHÁCH HÀNG
                                    </NavLink>
                                </button>
                            </div>
                            <div style={{marginLeft: 30}}>
                                <button type="button" className="btn btn-close-white">
                                    <NavLink className="dropdown-item" to='/facility-list'>
                                        KHÁCH HÀNG
                                    </NavLink>
                                </button>
                            </div>
                            <div style={{marginLeft: 30}}>
                                <button type="button" className="btn btn-close-white">
                                    <a href="/contract" style={{textDecoration: "none"}}>
                                        HỢP ĐỒNG
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <form className="d-flex" method="get">
                                <input className="form-control me-2 algin" type="text" placeholder="Search"/>
                                <button className="btn btn-outline-success text-white" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
