import React, {useEffect, useState} from "react"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {RotatingLines} from 'react-loader-spinner'
import {useNavigate} from "react-router";
import * as customerService from "../../Service/customerService"
import {toast} from "react-toastify";

function CustomerCreate() {
    const navigate = useNavigate();

    const [customerTypeList, setCustomerTypeList] = useState([]);

    const getCustomerTypeList = async () => {
        const customerTypeData = await customerService.findAllCustomerType();
        setCustomerTypeList(customerTypeData);
    };

    useEffect(() => {
        getCustomerTypeList();
    }, []);
    return (
        <>
            <Formik initialValues={{
                name: '',
                dateOfBirth: '',
                gender: '',
                idCard: '',
                phone: '',
                email: '',
                address: '',
                customerType: customerTypeList[0]?.name,
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Required"),
                        dateOfBirth: Yup.string().required("Required"),
                        gender: Yup.string().required("Required"),
                        idCard: Yup.string().required("Required"),
                        phone: Yup.string().required("Required"),
                        email: Yup.string().email().required("Required"),
                        address: Yup.string().required("Required"),
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        //call API
                        const add = async () => {
                            console.log(values);
                            await customerService.save(values);
                            setSubmitting(false);
                            toast("Thêm mới khách hàng thành công!")
                            navigate("/customer-list")
                        };
                        add();
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
                            <label htmlFor="address" className="form-label">Loại khách hàng:</label>
                            <Field className='form-control' component="select" name="customerType">
                                {
                                    customerTypeList.map((type) => (
                                            <option key={type.id} value={type.id}>{type.name}</option>
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

export default CustomerCreate;