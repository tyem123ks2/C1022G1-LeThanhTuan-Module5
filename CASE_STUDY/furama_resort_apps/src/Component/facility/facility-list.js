import React, {useState, useEffect} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as facilityService from "../../Service/facilityService"
import {toast} from "react-toastify";
import {findAll} from "../../Service/customerService";
import FacilityModalDelete from "../modalDelete/deleteFacility";

function FacilityList() {
    const [facilityList, setFacilityList] = useState([]);
    const [facilityType, setFacilityType] = useState([]);
    const [rentType, setRentType] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const showAll = async () => {
            const result = await facilityService.findAll();
            setFacilityList(result);
        }
        const facilityType = async () => {
            const result = await facilityService.findAllFacilityType();
            setFacilityType(result);
        }
        const rentType = async () => {
            const result = await facilityService.findAllRentType();
            setRentType(result);
        }
        showAll();
        facilityType();
        rentType();
    }, [])

    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState("")
    const getPropsDeleteFacility = (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    }

    function handleUpdate1(id) {
        navigate(`/facility-edit/${id}`)
    }

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
                    {
                        facilityList.map((facility, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{facility.name}</td>
                                    <td>{facility.area}</td>
                                    <td>{facility.cost}</td>
                                    <td>{facility.maxPeople}</td>
                                    <td>{facility.standardRoom}</td>
                                    <td>{facility.description}</td>
                                    <td>{facility.poolArea}</td>
                                    <td>{facility.numberOfFloors}</td>
                                    <td>{facility.facilityFree}</td>
                                    <td>{rentType.filter(facilityId => (
                                        facilityId.id === facility.rentType
                                    ))[0]?.name}</td>
                                    <td>{facilityType.filter(facilityId => (
                                        facilityId.id === facility.facilityType
                                    ))[0]?.name}</td>
                                    <td>
                                        <button type='button'
                                                className='btn btn-primary'
                                                onClick={() => handleUpdate1(facility.id)}>Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-secondary" style={{color: "red"}}
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1"
                                                onClick={() => getPropsDeleteFacility(facility.id, facility.name)}>
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
                <FacilityModalDelete
                    id={deleteId}
                    name={deleteName}
                    getShowList = {() => {
                        toast("Thêm mới thành công");
                        facilityService.findAll();
                    }} />
            </div>
        </>
    );
}

export default FacilityList;