import React, {Component, useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {RotatingLines} from "react-loader-spinner";
import {useNavigate} from "react-router";
import * as facilityService from "../../Service/facilityService"

function FacilityCreate() {
    const navigate = useNavigate();

    const [facilityTypeList, setFacilityTypeList] = useState([]);
    const [rentTypeList, setRentTypeList] = useState([]);

    const getFacilityTypeList = async () => {
        const facilityTypeData = await facilityService.findAllFacilityType();
        setFacilityTypeList(facilityTypeData);
    }

    const getRentTypeList = async () => {
        const rentTypeData = await facilityService.findAllRentType();
        setRentTypeList(rentTypeData);
    }

    useEffect(() => {
        getFacilityTypeList();
        getRentTypeList();
    }, []);

    if (facilityTypeList.length === 0 || rentTypeList.length === 0) return null;

    return (
        <> <Formik initialValues={{
            name: '',
            area: '',
            cost: '',
            maxPeople: '',
            standardRoom: '',
            description: '',
            poolArea: '',
            numberOfFloors: '',
            facilityFree: '',
            facilityType: facilityTypeList[0].id,
            rentType: rentTypeList[0].id,
        }}
                   validationSchema={Yup.object({
                       name: Yup.string().required("Vui lòng không để trống!"),
                       area: Yup.string().required("Vui lòng không để trống!"),
                       cost: Yup.string().required("Vui lòng không để trống!"),
                       maxPeople: Yup.string().required("Vui lòng không để trống!"),
                       standardRoom: Yup.string().required("Vui lòng không để trống!"),
                       description: Yup.string().required("Vui lòng không để trống!"),
                       poolArea: Yup.string().required("Vui lòng không để trống!"),
                       numberOfFloors: Yup.string().required("Vui lòng không để trống!"),
                       facilityFree: Yup.string().required("Vui lòng không để trống!"),
                   })}
                   onSubmit={(values, {setSubmitting}) => {
                       //call API
                       const add = async () => {
                           console.log(values);
                           await facilityService.save({
                               ...values,
                               facilityType: +values.facilityType,
                               rentType: +values.rentType
                           });
                           setSubmitting(false);
                           alert("Thêm mới dịch vụ thành công!")
                           navigate("/facility-list")
                       };
                       add();
                   }}
        >
            {({isSubmitting}) => (
                <Form className='row g-3'
                      style={{marginRight: 75, marginLeft: 75, marginTop: 20, marginBottom: 20}}>
                    <h3 style={{textAlign: "center"}}>THÊM MỚI DỊCH VỤ</h3>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Tên dịch vụ</label>
                        <Field type='text' className='form-control' id='name' name='name'/>
                        <ErrorMessage name='name' component='span' className='form-err text-danger'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="area" className="form-label">Diện tích</label>
                        <Field type='text' className='form-control' id='area' name='area'/>
                        <ErrorMessage name='area' component='span' className='form-err text-danger'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cost" className="form-label">Giá thuê</label>
                        <Field type='text' className='form-control' id='cost' name='cost'/>
                        <ErrorMessage name='cost' component='span' className='form-err text-danger'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="maxPeople" className="form-label">Lượng người tối đa</label>
                        <Field type='text' className='form-control' id='maxPeople' name='maxPeople'/>
                        <ErrorMessage name='maxPeople' component='span' className='form-err text-danger'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="standardRoom" className="form-label">Kiểu phòng</label>
                        <Field type='text' className='form-control' id='standardRoom' name='standardRoom'/>
                        <ErrorMessage name='standardRoom' component='span' className='form-err text-danger'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="description" className="form-label">Mô tả tiện tích khác</label>
                        <Field type='text' className='form-control' id='description' name='description'/>
                        <ErrorMessage name='description' component='span' className='form-err text-danger'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="poolArea" className="form-label">Diện tích hồ bơi</label>
                        <Field type='text' className='form-control' id='poolArea' name='poolArea'/>
                        <ErrorMessage name='poolArea' component='span' className='form-err text-danger'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="numberOfFloors" className="form-label">Số tầng</label>
                        <Field type='text' className='form-control' id='numberOfFloors' name='numberOfFloors'/>
                        <ErrorMessage name='numberOfFloors' component='span' className='form-err text-danger'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="facilityFree" className="form-label">Dịch vụ miễn phí</label>
                        <Field type='text' className='form-control' id='facilityFree' name='facilityFree'/>
                        <ErrorMessage name='facilityFree' component='span' className='form-err text-danger'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="facilityType" className="form-label">Loại hình dịch vụ:</label>
                        <Field className='form-control' component="select" name="facilityType">
                            {
                                facilityTypeList.map((facilityType) => (
                                    <option key={facilityType.id} value={facilityType.id}>{facilityType.name}</option>
                                ))
                            }
                        </Field>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rentType" className="form-label">Loại hình thanh toán:</label>
                        <Field className='form-control' component="select" name="rentType">
                            {
                                rentTypeList.map((rentType) => (
                                    <option key={rentType.id} value={rentType.id}>{rentType.name}</option>
                                ))
                            }
                        </Field>
                    </div>
                    {
                        isSubmitting ?
                            <RotatingLines
                                strokeColor='grey'
                                strokeWidth='5'
                                animationDuration='0.75'
                                width='50'
                                visible={true}
                            /> :
                            <div className="col-6">
                                <button type="submit" className="btn btn-primary">
                                    Thêm mới dịch vụ
                                </button>
                            </div>
                    }
                </Form>
            )}
        </Formik>
        </>
    );
}

export default FacilityCreate;