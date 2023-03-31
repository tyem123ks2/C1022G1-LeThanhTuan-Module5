import {Component} from "react";

class CustomerList extends Component {
    render() {
        return (
            <div className="p-3">
                <h2 className="text-center fw-bold my-3">DANH SÁCH KHÁCH HÀNG</h2>
                <table className="table table-bordered">
                    <tr>
                        <th className="text-center">#</th>
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
                            <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Xoá
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default CustomerList;