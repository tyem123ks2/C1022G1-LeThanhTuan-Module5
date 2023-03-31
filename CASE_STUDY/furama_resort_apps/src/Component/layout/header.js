import {Component} from "react"

class Header extends Component{
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg fixed-top" style="background-color: #000000;">
                    <div className="container-fluid">
                        <a className="navbar-brand ms-4" href="#">
                            <img src="../../../image/20220621154454120_furama.png"
                                 height="80" width="190px"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-3">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Trang chủ</a>
                                </li>
                                <li className="nav-item mx-3 dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Giới thiệu
                                    </a>
                                    <!--                        <ul class="dropdown-menu">-->
                                    <!--                            <li><a class="dropdown-item" href="#">Giới thiệu</a></li>-->
                                    <!--                            <li><a class="dropdown-item" href="#">Loại phòng</a></li>-->
                                    <!--                            <li><a class="dropdown-item" href="#">Ẩm thực</a></li>-->
                                    <!--                            <li><a class="dropdown-item" href="#">Sự kiện</a></li>-->
                                    <!--                            <li><a class="dropdown-item" href="#">Giải trí</a></li>-->
                                    <!--                            &lt;!&ndash; <li><hr class="dropdown-divider"></li>-->
                                    <!--                            <li><a class="dropdown-item" href="#">Something else here</a></li> &ndash;&gt;-->
                                    <!--                        </ul>-->
                                </li>
                                <li className="nav-item mx-3 dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Loại phòng
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">VIP</a></li>
                                        <li><a className="dropdown-item" href="#">Thường</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-white" href="#">Ẩm thực</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-white" href="#">Sự kiện</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-white" href="#">Chức năng</a>
                                </li>
                            </ul>

                            <form className="d-flex" role="search" onSubmit="">
                                <input id="idSearch" className="form-control me-3 rounded-pill"
                                       style="padding-left: 40px"
                                       type="search" placeholder="Tìm kiếm..." aria-label="Search"><i
                                    className="ti-search"></i>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item mx-2">
                                            <a style="width: 95px;" href="#"
                                               className="nav-link active login text-nav box-shadow-login"
                                               aria-current="page">Đăng nhập</a>
                                        </li>
                                        <span style="margin-right: 13px; font-size: 25px;">|</span>
                                        <li className="nav-item me-5">
                                            <a style="width: 74px;"
                                               className="nav-link active register box-shadow-login"
                                               aria-current="page" href="#">Đăng ký</a>
                                        </li>
                                    </ul>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

