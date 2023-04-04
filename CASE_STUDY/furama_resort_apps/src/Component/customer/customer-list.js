import {Component} from "react";

class CustomerList extends Component {
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
                <div>
                    <button className="ms-3 bd-blue-100">Thêm mới Khách hàng</button>
                </div>
                <div className="p-3">
                    <h2 className="text-center fw-bold my-3">DANH SÁCH KHÁCH HÀNG</h2>
                    <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <th className="text-center">STT</th>
                            <th>Tên khách hàng</th>
                            <th>Giới tính</th>
                            <th>Ngày sinh</th>
                            <th>Số CMND/CCCD</th>
                            <th>SĐT</th>
                            <th>Email</th>
                            <th>Địa chỉ</th>
                            <th>Loại khách</th>
                            <th className="text-center">Sửa</th>
                            <th className="text-center">Xóa</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Tuấn</td>
                            <td>Nam</td>
                            <td>10/11/1998</td>
                            <td>197434279</td>
                            <td>0359066333</td>
                            <td>thanhtuan12773@yahoo.com.vn</td>
                            <td>Khe Sanh</td>
                            <td>Diamond</td>
                            <td className="text-center">
                                <button>Sửa</button>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Xoá
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Xoá khách hàng
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <span>Bạn có muốn xoá khách hàng: </span>
                                <span style={{color: "red"}}>Tuấn</span>
                                <span>?</span>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    data-bs-dismiss="modal"
                                    className="btn btn-danger"
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default CustomerList;