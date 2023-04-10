import React, {Component, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as customerService from "../../Service/customerService"


function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [customerType, setCustomerType] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const showAll = async () => {
            const result = await customerService.findAll();
            setCustomerList(result);
        }
        const customerType = async () => {
            const result = await customerService.findAllCustomerType();
            setCustomerType(result);
        };
        showAll()
        customerType()
    }, []);

    const handleDelete = async (id) => {
        await customerService.remove(id);
        let result = await customerService.findAll()
        setCustomerList(result);
    };

    function handleUpdate(id) {
        navigate(`/customer-edit/${id}`)
    }

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
                        <th className="text-center"></th>
                        <th className="text-center"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        customerList.map((customer, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.gender}</td>
                                    <td>{customer.dateOfBirth}</td>
                                    <td>{customer.idCard}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.address}</td>
                                    <td>{customerType.filter(customerId => (
                                        customerId.id == customer.customerType
                                    ))[0]?.name}</td>
                                    <td>
                                        <button type='button'
                                                className='btn btn-primary'
                                                onClick={() => handleUpdate(customer.id)}>Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">
                                                {/*// onClick={deleteId(customer.id, customer.name)}>*/}
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Xóa khách hàng</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>

                        <div className="modal-body">Bạn có chắn chắn muốn xóa <span id="deleteName"
                                                                                    className="text-danger fw-bold"/> không?
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// function deleteId(id, name) {
//     document.getElementById("deleteId").value = id;
//     document.getElementById("deleteName").innerHTML = name;
// }

export default CustomerList;