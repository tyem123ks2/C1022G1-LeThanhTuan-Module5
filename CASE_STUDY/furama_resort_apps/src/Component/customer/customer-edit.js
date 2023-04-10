import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Oval, RotatingLines} from "react-loader-spinner";
import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as customerService from "../../Service/customerService"
import customerTypeList from "../../data/customerType";

function CustomerEdit() {
    let navigate = useNavigate();

    const param = useParams();

    const [customer, setCustomer] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const response = await customerService.detail(param.id)
            setCustomer(response)
        }
        fetchApi();
    }, [])
    if (!customer) {
        return null
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: customer?.id,
                    name: customer?.name,
                    dateOfBirth: customer?.dateOfBirth,
                    gender: customer?.gender,
                    idCard: customer?.idCard,
                    phone: customer?.phone,
                    email: customer?.email,
                    address: customer?.address,
                    customerType: customer?.customerType.name
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("required"),
                    email: Yup.string()
                        .required("required")
                        .email(),
                    phone: Yup.string()
                        .required("required"),
                    idCard: Yup.string()
                        .required("Trường này bắt buộc nhập")
                        .matches(
                            "^\\d{9}$",
                            "Số CMND phải đúng định dạng XXXXXXXXX hoặc XXXXXXXXXXXX"
                        ),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    const edit = async () => {
                        await customerService.edit(values)
                        console.log(values);
                        setSubmitting(false);
                        toast("Thêm mới thành công");
                        navigate("/customer-list")
                    };
                    edit();
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
                                       value='Nam'/>
                                <label className='form-check-label' htmlFor='rd-1'>Nam</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='radio' id='rd-2'
                                       name='gender'
                                       value='Nữ'/>
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
                                <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                <Field type='text' className='form-control' id='phoneNumber'
                                       name='phone'/>
                                <ErrorMessage name='phone' component='span'
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
                            <label htmlFor="customerType" className="form-label">Loại khách hàng:</label>
                            <Field className='form-control' component="select" name="customerType">
                                {
                                    customerTypeList.map((type) => (
                                        <>
                                            <option key={type.id} value={type.id}>{type.name}</option>
                                        </>
                                    ))
                                }
                            </Field>
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