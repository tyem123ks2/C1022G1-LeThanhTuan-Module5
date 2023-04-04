import {Component} from "react"

class CustomerEdit extends Component {
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
                <h1 style={{fontWeight: "bold", textAlign: "center"}}>
                    CẬP NHẬT DỊCH VỤ KHÁCH HÀNG
                </h1>
                <div className="d-flex justify-content-center mt-3">
                    <form className="w-50 border border-2 border-success p-3 rounded">
                        <input type="hidden"/>
                        <div className="form-group">
                            <label htmlFor="name" style={{fontWeight: "bold"}}>
                                Tên:
                            </label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    placeholder="Nhập tên"
                                    name="name"
                                />
                                <span className="input-group-text"/>
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="area" style={{fontWeight: "bold"}}>
                                Diện tích:
                            </label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="area"
                                    className="form-control"
                                    placeholder="Nhập diện tích"
                                    name="area"
                                />
                                <span className="input-group-text"/>
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="cost" style={{fontWeight: "bold"}}>
                                Giá tiền:
                            </label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="cost"
                                    className="form-control"
                                    placeholder="Nhập giá tiền"
                                    name="cost"
                                />
                                <span className="input-group-text"/>
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="maxPeople" style={{fontWeight: "bold"}}>
                                Số người tối đa:
                            </label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="maxPeople"
                                    className="form-control"
                                    placeholder="Nhập số người tối đa"
                                    name="maxPeople"
                                />
                                <span className="input-group-text"/>
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="standardRoom" style={{fontWeight: "bold"}}>
                                Tiêu chuẩn phòng:
                            </label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="standardRoom"
                                    className="form-control"
                                    placeholder="Tiêu chuẩn phòng"
                                    name="standardRoom"
                                />
                                <span className="input-group-text"/>
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label
                                htmlFor="descriptionOtherConvenience"
                                style={{fontWeight: "bold"}}
                            >
                                Mô tả:
                            </label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="descriptionOtherConvenience"
                                    className="form-control"
                                    placeholder="Nhập mô tả"
                                    name="descriptionOtherConvenience"
                                />
                                <span className="input-group-text"/>
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="poolArea" style={{fontWeight: "bold"}}>
                                Diện tích hồ bơi:
                            </label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="poolArea"
                                    className="form-control"
                                    placeholder="Nhập diện tích hồ bơi"
                                    name="poolArea"
                                />
                                <span className="input-group-text"/>
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="numberOfFloors" style={{fontWeight: "bold"}}>
                                Số tầng:
                            </label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="numberOfFloors"
                                    className="form-control"
                                    placeholder="Nhập số tầng"
                                    name="numberOfFloors"
                                />
                                <span className="input-group-text"/>
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="facilityFree" style={{fontWeight: "bold"}}>
                                Dịch vụ miễn phí:
                            </label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="facilityFree"
                                    className="form-control"
                                    placeholder="Nhập dịch vụ miễn phí"
                                    name="facilityFree"
                                />
                                <span className="input-group-text"/>
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="facilityType" style={{fontWeight: "bold"}}>
                                Loại dịch vụ:
                            </label>
                            <div className="input-group">
                                <select
                                    id="facilityType"
                                    className="form-control"
                                    name="facilityType"
                                >
                                    <option/>
                                </select>
                                <span className="input-group-text"/>
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="rentType" style={{fontWeight: "bold"}}>
                                Kiểu thuê:
                            </label>
                            <div className="input-group">
                                <select id="rentType" className="form-control" name="rentType">
                                    <option/>
                                </select>
                                <span className="input-group-text"/>
                            </div>
                        </div>
                        <div className="mt-3 text-center">
                            <button
                                className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                                -- Save --
                            </button>
                        </div>
                    </form>
                </div>
            </>


        );
    }
}

export default CustomerEdit;