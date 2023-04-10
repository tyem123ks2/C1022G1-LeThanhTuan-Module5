import React, {Component} from "react"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {RotatingLines} from 'react-loader-spinner'

class ContractCreate extends Component {
    render() {
        return (
            <>
                <Formik initialValues={{
                    facility: '',
                    customer: '',
                    startDate: '',
                    endDate: '',
                    deposit: '',
                    totalMoney: '',
                }}
                        validationSchema={Yup.object({
                            facility: Yup.string().required("Required"),
                            customer: Yup.string().required("Required"),
                            startDate: Yup.string().required("Required"),
                            endDate: Yup.string().required("Required"),
                            deposit: Yup.string().required("Required"),
                            totalMoney: Yup.string().required("Required"),
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
                            <h3 style={{textAlign: "center"}}>THÊM MỚI HỢP ĐỒNG</h3>
                            <div className="col-md-6">
                                <label htmlFor="facility" className="form-label">Tên dịch vụ</label>
                                <Field type='text' className='form-control' id='facility' name='facility'/>
                                <ErrorMessage name='facility' component='span' className='form-err text-danger'/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="customer" className="form-label">Tên khách hàng</label>
                                <Field type='text' className='form-control' id='customer' name='customer'/>
                                <ErrorMessage name='customer' component='span' className='form-err text-danger'/>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="startDate" className="form-label">Ngày bắt đầu</label>
                                    <Field type='date' className='form-control' id='startDate' name='startDate'/>
                                    <ErrorMessage name='startDate' component='span' className='form-err text-danger'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="endDate" className="form-label">Ngày kết thúc</label>
                                    <Field type='date' className='form-control' id='endDate'
                                           name='endDate'/>
                                    <ErrorMessage name='endDate' component='span'
                                                  className='form-err text-danger'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="deposit" className="form-label">Giá thuê</label>
                                    <Field type='text' className='form-control' id='deposit' name='deposit'/>
                                    <ErrorMessage name='deposit' component='span' className='form-err text-danger'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="totalMoney" className="form-label">Tổng tiền</label>
                                    <Field type='text' className='form-control' id='totalMoney' name='totalMoney'/>
                                    <ErrorMessage name='totalMoney' component='span' className='form-err text-danger'/>
                                </div>
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
                                            Thêm mới hợp đồng
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

export default ContractCreate;