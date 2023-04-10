import React from "react";
import {NavLink} from "react-router-dom";

function ContractList() {
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
                {/*{*/}
                {/*    contract.map((contractList, index) =>*/}
                {/*        <tr key={index}>*/}
                {/*            <td>{index + 1}</td>*/}
                {/*            <td>{contractList.facility.name}</td>*/}
                {/*            <td>{contractList.customer.name}</td>*/}
                {/*            <td>{contractList.dateStart}</td>*/}
                {/*            <td>{contractList.dateEnd}</td>*/}
                {/*            <td>{contractList.deposit}</td>*/}
                {/*            <td>{contractList.totalMoney}</td>*/}
                {/*            <td className="text-center">*/}
                {/*                <button className="btn btn-outline-secondary" style={{color: "red"}}>Xóa</button>*/}
                {/*            </td>*/}

                {/*        </tr>*/}
                {/*    )}*/}
                </tbody>
            </table>
        </div>
    )
}

export default ContractList;