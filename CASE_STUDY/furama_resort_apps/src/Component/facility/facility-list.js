import React, {useState, useEffect} from "react";
import {facility} from "./data/facilityList";


function FacilityList() {
    return (
        <>
            <div className="p-3">
                <h2 className="text-center fw-bold my-3">DANH SÁCH DỊCH VỤ</h2>
                <div>
                    <button className="ms-3 bd-blue-100">Thêm mới dịch vụ</button>
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