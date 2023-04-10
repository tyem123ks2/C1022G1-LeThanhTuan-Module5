import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";


function FacilityList() {
    return (
        <>
            <div className="p-3">
                <h2 className="text-center fw-bold my-3">DANH SÁCH DỊCH VỤ</h2>
                <div>
                    <NavLink className="btn btn-light" to='/facility-create'>
                        <img src="https://img.icons8.com/cute-clipart/256/add-file.png" height="50" width="50"/>
                        THÊM MỚI DỊCH VỤ </NavLink>
                </div>
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
                    {/*{*/}
                    {/*    facility.map((value, index) => (*/}
                    {/*            <tr key={index}>*/}
                    {/*                <td>{index}</td>*/}
                    {/*                <td>{value.name}</td>*/}
                    {/*                <td>{value.area}</td>*/}
                    {/*                <td>{value.cost}</td>*/}
                    {/*                <td>{value.maxPeople}</td>*/}
                    {/*                <td>{value.standardRoom}</td>*/}
                    {/*                <td>{value.descriptionOtherCovenience}</td>*/}
                    {/*                <td>{value.poolArea}</td>*/}
                    {/*                <td>{value.numberOfFloors}</td>*/}
                    {/*                <td>{value.facilityFree}</td>*/}
                    {/*                <td>{value.rentType.name}</td>*/}
                    {/*                <td>{value.facilityType.name}</td>*/}
                    {/*                <td>*/}
                    {/*                    <button type='button' className='btn btn-warning ms2'*/}
                    {/*                    >*/}
                    {/*                        <NavLink to='/facility-edit'>Sửa</NavLink>*/}
                    {/*                    </button>*/}
                    {/*                </td>*/}
                    {/*                <td>*/}
                    {/*                    <button type='button' className='btn btn-danger'>Delete</button>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*        )*/}
                    {/*    )*/}
                    {/*}*/}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FacilityList;