import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as customerService from "../../Service/customerService"
import CustomerModalDelete from "../modalDelete/deleteCustomer";
import {findAll} from "../../Service/customerService";
import {toast} from "react-toastify";
import ReactPaginate from "react-paginate";

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

    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState("")
    const getPropsDeleteCustomer = (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    }

    function handleUpdate(id) {
        navigate(`/customer-edit/${id}`)
    }

    //State: Phục vụ cho việc phân trang (pagination)
    const [paginationCustomer, setPaginationCustomer] = useState([]);
    const PAGE_SIZE = 3;

    useEffect(() => {
        const pagination = async () => {
            const result = await customerService.findAll();
            setPaginationCustomer(result.slice(0,3));
        };
    }, []);

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
                                        customerId.id === customer.customerType
                                    ))[0]?.name}</td>
                                    <td>
                                        <button type='button'
                                                className='btn btn-primary'
                                                onClick={() => handleUpdate(customer.id)}>Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-secondary" style={{color: "red"}}
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                                onClick={() => getPropsDeleteCustomer(customer.id, customer.name)}>
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            {/*Phân trang*/}
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/*<CustomerModalDelete*/}
            {/*    id={deleteId}*/}
            {/*    name={deleteName}*/}
            {/*/>*/}
            <CustomerModalDelete
                id={deleteId}
                name={deleteName}
                getShowList = {() => {
                    toast("Thêm mới thành công");
                    findAll();
                }}
            />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                // onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={Math.floor(customerList.length / PAGE_SIZE)}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

// function deleteId(id, name) {
//     document.getElementById("deleteId").value = id;
//     document.getElementById("deleteName").innerHTML = name;
// }

export default CustomerList;