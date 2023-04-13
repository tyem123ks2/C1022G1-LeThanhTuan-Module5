import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import customerList from "../../data/customer"
import facilityList from "../../data/facility"
import * as contractService from '../../Service/contractService'
import {toast} from "react-toastify";
import {findAll} from "../../Service/customerService";
import ContractModalDelete from "../modalDelete/deleteContract";

function ContractList() {
    const navigate = useNavigate();
    const [contractList, setContractList] = useState([]);

    useEffect(()=> {
        const showAll = async () => {
            const result = await contractService.findAll();
            setContractList(result);
        };
        showAll()
    },[])

    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState("")
    const getPropsDeleteContract = (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    }

    return (
        <div className="p-3">
            <h2 className="text-center fw-bold my-3">DANH SÁCH HỢP ĐỒNG</h2>
            <div>
                <NavLink className="btn btn-light" to='/contract-create'>
                    <img src="https://img.icons8.com/cute-clipart/256/add-file.png" height="50" width="50"/>
                    THÊM MỚI HỢP ĐỒNG </NavLink>
            </div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên dịch vụ</th>
                    <th>Tên khách hàng</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Giá thuê</th>
                    <th>Tổng tiền</th>
                    <th className="text-center"></th>
                </tr>
                </thead>
                <tbody>
                {
                    contractList.map((contract, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{facilityList.filter((facility) => (
                                facility.id === contract.facility)
                            )[0].name}</td>
                            <td>{customerList.filter((customer) => (
                                customer.id === contract.customer)
                            )[0].name}</td>
                            <td>{contract.dateStart}</td>
                            <td>{contract.dateEnd}</td>
                            <td>{contract.deposit}</td>
                            <td>{contract.totalMoney}</td>
                            <td>
                                <button className="btn btn-outline-secondary" style={{color: "red"}}
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal2"
                                        onClick={() => getPropsDeleteContract(contract.id, contract.name)}>
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ContractModalDelete
                id={deleteId}
                name={deleteName}
                getShowList = {() => {
                    toast("Thêm mới thành công");
                    findAll();
                }}
            />
        </div>

    )
}

export default ContractList;