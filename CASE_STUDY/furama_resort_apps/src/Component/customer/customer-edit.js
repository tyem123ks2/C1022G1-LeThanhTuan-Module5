import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Oval, RotatingLines} from "react-loader-spinner";
import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

function CustomerEdit() {
    const [customer, setCustomer] = useState();
    return (
        <>
            <Formik
                initialValues={{
                    id: customer?.id,
                    name: customer?.name,
                    dateOfBirth: customer?.dateOfBirth,
                    gender: customer?.gender,
                    idCard: customer?.idCard,
                    phoneNumber: customer?.phoneNumber,
                    email: customer?.email,
                    customerType: customer?.customerType.name,
                    address: customer?.address,
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("required")
                        .matches(
                            "^[A-Z][a-z]+(\\s[A-Z][a-z]+)*$",
                            "Tên không được chứa số. Và các kí tự đầu tiên của mỗi từ phải viết hoa"
                        ),
                    email: Yup.string()
                        .required("required")
                        .email(),
                    phoneNumber: Yup.string()
                        .required("required")
                        .matches(
                            "^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[\\d]{7}$",
                            "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx."
                        ),
                    idCard: Yup.string()
                        .required("Trường này bắt buộc nhập")
                        .matches(
                            "^\\d{9}$",
                            "Số CMND phải đúng định dạng XXXXXXXXX hoặc XXXXXXXXXXXX"
                        ),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    setSubmitting(false);
                    toast("Thêm mới thành công");
                }}
            >
                {({isSubmitting}) => (
                    <Form className='row g-3'
                          style={{marginRight: 75, marginLeft: 75, marginTop: 20, marginBottom: 20}}>
                        <h3 style={{textAlign: "center"}}>CHỈNH SỬA THÔNG TIN KHÁCH HÀNG</h3>
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
                        <div className="item">
                            <label htmlFor="typeId">Loại khách</label>
                            <Field as="select" name="typeId">
                                <option value="1">Kim Cương</option>
                                <option value="2">Vàng</option>
                                <option value="3">Bạch Kim</option>
                            </Field>
                        </div>
                        <div className="item">
                            <label htmlFor="address">Địa chỉ</label>
                            <Field type="text" name="address" id="address"/>
                        </div>
                        <div className="btn-block">
                            {isSubmitting ? (
                                <RotatingLines
                                    strokeColor='grey'
                                    strokeWidth='5'
                                    animationDuration='0.75'
                                    width='50'
                                    visible={true}
                                />
                            ) : (
                                <>
                                    <button type="submit" className="btn btn-primary">
                                        Chỉnh sửa
                                    </button>
                                    <Link to="/customer-list" className="btn btn-primary">
                                        Quay lại
                                    </Link>
                                </>
                            )}
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CustomerEdit;