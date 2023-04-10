import React from "react";
import {contract} from "./data/contractList";
import {NavLink} from "react-router-dom";

function ContractList() {
    return (
        <div>
            <center>
                <h1>DANH SÁCH HỢP ĐỒNG</h1>
                <div>
                    <NavLink className="btn btn-light" to='/contract-create'>
                        <img src="https://img.icons8.com/cute-clipart/256/add-file.png" height="50" width="50"/>
                        THÊM MỚI HỢP ĐỒNG </NavLink>
                </div>
            </center>
            <table className="table table-light">
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Facility</th>
                    <th>Customer</th>
                    <th>Date Start</th>
                    <th>Date End</th>
                    <th>Deposit</th>
                    <th>Total Money</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    contract.map((contractList, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{contractList.facility.name}</td>
                            <td>{contractList.customer.name}</td>
                            <td>{contractList.dateStart}</td>
                            <td>{contractList.dateEnd}</td>
                            <td>{contractList.deposit}</td>
                            <td>{contractList.totalMoney}</td>
                            <td>
                                <button className="btn btn-outline-secondary" style={{color: "red"}}>Delete</button>
                            </td>

                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ContractList;