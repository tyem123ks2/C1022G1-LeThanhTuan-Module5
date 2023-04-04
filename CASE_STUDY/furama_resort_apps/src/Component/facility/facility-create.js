import {Component} from "react";

class FacilityCreate extends Component {
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
                <h2 style={{textAlign: "center"}}>THÊM MỚI DỊCH VỤ</h2>
                <div className="d-flex justify-content-center mt-3">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Tên dịch vụ{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                aria-describedby="name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dientich" className="form-label">
                                Diện tích sử dụng{" "}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="dientich"
                                aria-describedby="dateOfBirth"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="chiphi" className="form-label">
                                Chi phí thuê{" "}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="chiphi"
                                aria-describedby="dateOfBirth"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="maxPeople" className="form-label">
                                Số lượng người tối đa{" "}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="maxPeople"
                                aria-describedby="dateOfBirth"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="kieuthue" className="form-label">
                                Kiểu thuê{" "}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="kieuthue"
                                aria-describedby="dateOfBirth"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="typeService" className="form-label">
                                Dịch vụ miễn phí đi kèm:{" "}
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="typeService"
                                aria-describedby="dateOfBirth"
                            />
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

export default FacilityCreate;