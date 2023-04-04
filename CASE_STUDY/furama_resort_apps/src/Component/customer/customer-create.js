import {Component} from "react"

class CustomerCreate extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="header">
                        <div
                            style={{backgroundColor: "#fffafa"}}
                            className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom"
                        >
                            <a
                                href="#"
                                className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                                style={{marginRight: "-220px"}}
                            >
                                <img
                                    width="40px"
                                    style={{marginLeft: 100}}
                                    src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png"
                                    alt=""
                                />
                            </a>
                            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                    >
                                        Trang chủ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                    >
                                        Giới thiệu
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                    >
                                        Khách sạn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                    >
                                        Khuyến mãi
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                    >
                                        Hỗ trợ
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle fs-5 px-4 fw-bold text-dark text-hover"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Quản lí
                                    </a>
                                    <ul
                                        className="dropdown-menu"
                                        style={{backgroundColor: "#fffafa"}}
                                    >
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Dịch vụ
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Khách hàng
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Hợp đồng
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="col-md-3 ps-5">
                                <button type="button" className="btn btn-outline-dark me-2 shadow">
                                    Đăng nhập
                                </button>
                                <button
                                    type="button"
                                    className=" btn btn-dark shadow rigister-hover ms-2"
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
                <h3 style={{textAlign: "center"}}>THÊM MỚI KHÁCH HÀNG</h3>
                <div className="d-flex justify-content-center mt-3">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Họ và tên:{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                aria-describedby="name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateOfBirth" className="form-label">
                                Ngày sinh{" "}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="dateOfBirth"
                                aria-describedby="dateOfBirth"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">
                                Giới tính
                            </label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="gender"
                                />
                                <label className="form-check-label" htmlFor="gender">
                                    Nam
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="gender1"
                                    defaultChecked=""
                                />
                                <label className="form-check-label" htmlFor="gender1">
                                    Nữ
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="idCard" className="form-label">
                                Số CMND
                            </label>
                            <input type="text" className="form-control" id="idCard"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">
                                Số điện thoại:
                            </label>
                            <input type="text" className="form-control" id="phoneNumber"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email:
                            </label>
                            <input type="text" className="form-control" id="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Địa chỉ:
                            </label>
                            <input type="text" className="form-control" id="address"/>
                        </div>
                        <div className="mb-3">
                            <label className="fs-5" htmlFor="">
                                Loại khách:{" "}
                            </label>
                            <select className="form-select" aria-label="Default select example">
                                <option value="">Diamond</option>
                                <option value="">Platinium</option>
                                <option value="">Gold</option>
                                <option value="">Silver</option>
                                <option value="">Member</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </>
        );
    }
}

export default CustomerCreate;