import React, {Component} from "react";
import {customer} from "./data/customerList";
import {NavLink} from "react-router-dom";

class CustomerList extends Component {
    render() {
        return (
            <>
                <div className="p-3">
                    <h2 className="text-center fw-bold my-3">DANH SÁCH KHÁCH HÀNG</h2>
                    <div>
                        <NavLink className="btn btn-light" to='/customer-create'>
                            <img src="https://img.icons8.com/cute-clipart/256/add-file.png" height="50" width="50"/>
                            THÊM MỚI KHÁCH HÀNG </NavLink>
                    </div>
                    <table className="table table-bordered">
                        <thead>
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
                        </thead>
                        <tbody>
                        {
                            customer.map((value, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{value.name}</td>
                                        <td>{value.gender}</td>
                                        <td>{value.dateOfBirth}</td>
                                        <td>{value.idCard}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                        <td>{value.customerType.name}</td>
                                        <td>
                                            <button type='button' className='btn btn-warning ms2'
                                            >
                                                <NavLink to='/customer-edit'>Sửa</NavLink>
                                            </button>
                                        </td>
                                        <td>
                                            <button type='button' className='btn btn-danger'>Xóa</button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
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