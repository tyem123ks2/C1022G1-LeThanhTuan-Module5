import {Component} from "react";

class ContractCreate extends Component {
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
                <div className="card-header">
                    <strong id="inDam">
                        <h1 className="card-title" style={{color: "red", textAlign: "center"}}>
                            TẠO MỚI HỢP ĐỒNG
                        </h1>
                    </strong>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <form>
                        <div className="card-body">
                            <div className="row col-md-12 col-xl-12 col-sm-12">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="facility">
                                        {" "}
                                        Tên dịch vụ{" "}
                                    </label>
                                    <select className="form-select" id="facility">
                                        <option/>
                                        <option/>
                                        <option/>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name_customer">
                                        {" "}
                                        Tên khách hàng{" "}
                                    </label>
                                    <select className="form-select" id="name_customer">
                                        <option>IT</option>
                                        <option>Blade Runner</option>
                                        <option>Thor Ragnarok</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="startDate">
                                        Ngày bắt đầu
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control time-mask"
                                        id="startDate"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="endDate">
                                        Ngày kết thúc
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control time-mask"
                                        placeholder="input number people"
                                        id="endDate"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="deposit">
                                        Giá thuê:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control block-mask"
                                        placeholder="giá"
                                        id="deposit"
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <button
                                    type="reset"
                                    className="btn btn-primary me-1 waves-effect waves-float waves-light"
                                >
                                    Submit
                                </button>
                                <button
                                    type="reset"
                                    className="btn btn-outline-secondary waves-effect"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>

        );
    }
}

export default ContractCreate;