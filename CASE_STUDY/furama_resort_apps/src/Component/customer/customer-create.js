import React, {Component} from "react"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {RotatingLines} from 'react-loader-spinner'


class CustomerCreate extends Component {
    render() {
        return (
            <>
                <Formik initialValues={{
                    name: '',
                    dateOfBirth: '',
                    gender: '',
                    idCard: '',
                    phoneNumber: '',
                    email: '',
                    address: ''
                }}
                        validationSchema={Yup.object({
                            name: Yup.string().required("Required"),
                            dateOfBirth: Yup.string().required("Required"),
                            gender: Yup.string().required("Required"),
                            idCard: Yup.string().required("Required"),
                            phoneNumber: Yup.string().required("Required"),
                            email: Yup.string().email().required("Required"),
                            address: Yup.string().required("Required"),
                        })}
                        onSubmit={(values, {setSubmitting}) => {
                            //call API
                            setTimeout(() => {
                                console.log(values);
                                setSubmitting(false);
                                alert("Thêm mới thành công!")
                            }, 500);
                        }}
                >
                    {({isSubmitting}) => (
                        <Form className='row g-3'
                              style={{marginRight: 75, marginLeft: 75, marginTop: 20, marginBottom: 20}}>
                            <h3 style={{textAlign: "center"}}>THÊM MỚI KHÁCH HÀNG</h3>
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Họ và tên</label>
                                <Field type='text' className='form-control' id='name' name='name'/>
                                <ErrorMessage name='name' component='span' className='form-err text-danger'/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="dateOfBirth" className="form-label">Ngày sinh</label>
                                <Field type='date' className='form-control' id='dateOfBirth' name='dateOfBirth'/>
                                <ErrorMessage name='dateOfBirth' component='span' className='form-err text-danger'/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='gender' className='form-label'>Giới tính</label>
                                <div className='form-check form-check-inline'>
                                    <Field className='form-check-input' type='radio' id='rd-1'
                                           name='gender'
                                           value='1'/>
                                    <label className='form-check-label' htmlFor='rd-1'>Nam</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <Field className='form-check-input' type='radio' id='rd-2'
                                           name='gender'
                                           value='0'/>
                                    <label className='form-check-label' htmlFor='rd-2'>Nữ</label>
                                </div>
                                <ErrorMessage name='gender' component='span' className='form-err text-danger'/>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="idCard" className="form-label">Số CMND/CCCD</label>
                                    <Field type='text' className='form-control' id='idCard' name='idCard'/>
                                    <ErrorMessage name='idCard' component='span' className='form-err text-danger'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Số điện thoại</label>
                                    <Field type='text' className='form-control' id='phoneNumber'
                                           name='phoneNumber'/>
                                    <ErrorMessage name='phoneNumber' component='span'
                                                  className='form-err text-danger'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <Field type='text' className='form-control' id='email' name='email'/>
                                    <ErrorMessage name='email' component='span' className='form-err text-danger'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Địa chỉ liên hệ</label>
                                    <Field type='text' className='form-control' id='address' name='address'/>
                                    <ErrorMessage name='address' component='span' className='form-err text-danger'/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="fs-5" htmlFor="">
                                    Loại khách:{" "}
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
                                            Thêm mới khách hàng
                                        </button>
                                    </div>
                            }
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}

export default CustomerCreate;