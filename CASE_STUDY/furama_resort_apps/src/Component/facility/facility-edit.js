import React, {Component} from 'react';
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {RotatingLines} from "react-loader-spinner";
import {toast} from "react-toastify";

function FacilityEdit() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    area: '',
                    cost: '',
                    maxPeople: '',
                    standardRoom: '',
                    descriptionOtherCovenience: '',
                    poolArea: '',
                    numberOfFloors: '',
                    facilityFree: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Vui lòng nhập thông tin vào đây")
                        .matches("^([^0-9]*)$", "Tên dịch vụ không được chứa số"),
                    area: Yup.string().required("Vui lòng nhập thông tin vào đây"),
                    cost: Yup.string().required("Vui lòng nhập thông tin vào đây"),
                    maxPeople: Yup.string().required("Vui lòng nhập thông tin vào đây"),
                    standardRoom: Yup.string().required("Vui lòng nhập thông tin vào đây"),
                    descriptionOtherCovenience: Yup.string().required(
                        "Vui lòng nhập thông tin vào đây"
                    ),
                    poolArea: Yup.string()
                        .required("Vui lòng nhập thông tin vào đây")
                        .matches(
                            "^[1-9][\\d]*$",
                            "Diện tích hồ bơi phải > 0"
                        ),
                    numberOfFloors: Yup.string()
                        .required("Trường này bắt buộc nhập")
                        .matches("^[1-9][\\d]*$", "Số tầng phải > 0"),
                    facilityFree: Yup.string().required(
                        "Vui lòng nhập thông tin vào đây"
                    ),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                    toast('Thêm mới dịch vụ thành công!!')
                }}
            >{({isSubmitting}) => (
                <Form className='row g-3'
                      style={{marginRight: 75, marginLeft: 75, marginTop: 20, marginBottom: 20}}>
                    <h3 style={{textAlign: "center"}}>CHỈNH SỬA THÔNG TIN DỊCH VỤ</h3>
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
                        <label htmlFor="descriptionOtherCovenience" className="form-label">Mô tả tiện tích khác</label>
                        <Field type='text' className='form-control' id='descriptionOtherCovenience' name='descriptionOtherCovenience'/>
                        <ErrorMessage name='descriptionOtherCovenience' component='span' className='form-err text-danger'/>
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
                        <label className="fs-5" htmlFor="">
                            Loại dịch vụ:{" "}
                        </label>
                        <select className="form-select" aria-label="Default select example">
                            <option value="">Diamond</option>
                            <option value="">Platinium</option>
                            <option value="">Gold</option>
                            <option value="">Silver</option>
                            <option value="">Member</option>
                        </select>
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
                                    SỬA
                                </button>
                            </div>
                    }
                </Form>
            )}
            </Formik>
        </>
    )
}

export default FacilityEdit;