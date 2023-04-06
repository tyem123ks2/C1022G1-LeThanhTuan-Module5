import React, {Compoment} from "react";

class ContractList extends Compoment {
    render() {
        return (
            <>
                <div className="p-3">
                    <h2 className="text-center fw-bold my-3">DANH SÁCH HỢP ĐỒNG</h2>
                    <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <th className="text-center">STT</th>
                            <th>Tên dịch vụ</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Tiền đặt cọc</th>
                            <th>Tổng tiền</th>
                            <th className="text-center">Các dịch vụ đi kèm</th>
                        </tr>
                        <tr>
                            <td scope="row"/>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </>

        );
    }
}

export default ContractList;