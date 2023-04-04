import {facility as data} from "../facility/data/facilityList"
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {facility} from "./data/facilityList";


function FacilityList() {
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
                <button className="ms-3 bd-blue-100">Thêm mới dịch vụ</button>
            </div>
            <div className="p-3">
                <h2 className="text-center fw-bold my-3">DANH SÁCH DỊCH VỤ</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th>Tên dịch vụ</th>
                        <th>Diện tích (m<sup>2</sup>)</th>
                        <th>Chi phí thuê</th>
                        <th>Số người tối đa</th>
                        <th>Loại phòng</th>
                        <th>Mô tả tiện nghi khác</th>
                        <th>Diện tích hồ bơi</th>
                        <th>Số tầng</th>
                        <th>Dịch vụ miễn phí kèm</th>
                        <th>Kiểu thuê</th>
                        <th>Loại dịch vụ</th>
                        <th className="text-center"></th>
                        <th className="text-center"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        facility.map((value, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{value.name}</td>
                                    <td>{value.area}</td>
                                    <td>{value.cost}</td>
                                    <td>{value.maxPeople}</td>
                                    <td>{value.standardRoom}</td>
                                    <td>{value.descriptionOtherCovenience}</td>
                                    <td>{value.poolArea}</td>
                                    <td>{value.numberOfFloors}</td>
                                    <td>{value.facilityFree}</td>
                                    <td>{value.rentType.name}</td>
                                    <td>{value.facilityType.name}</td>
                                    <td>
                                        <button type='button' className='btn btn-warning ms2'
                                                >Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FacilityList;