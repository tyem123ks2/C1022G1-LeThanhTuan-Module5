import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {RotatingLines} from "react-loader-spinner";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as facilityService from "../../Service/facilityService";
import rentType from "../../data/rentType";
import facilityType from "../../data/facilityType";

function FacilityEdit() {
    let navigate = useNavigate();

    const param = useParams();

    const [facility, setFacility] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const response = await facilityService.detail(param.id)
            setFacility(response)
        }
        fetchApi();
    }, [])
    if (!facility) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: facility?.id,
                    name: facility?.name,
                    area: facility?.area,
                    cost: facility?.cost,
                    maxPeople: facility?.maxPeople,
                    standardRoom: facility?.standardRoom,
                    description: facility?.description,
                    poolArea: facility?.poolArea,
                    numberOfFloors: facility?.numberOfFloors,
                    facilityFree: facility?.facility,
                    facilityType: facility?.facilityType,
                    rentType: facility?.rentType,
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Vui lòng nhập thông tin vào đây")
                        .matches("^([^0-9]*)$", "Tên dịch vụ không được chứa số"),
                    area: Yup.string().required("Vui lòng nhập thông tin vào đây"),
                    cost: Yup.string().required("Vui lòng nhập thông tin vào đây"),
                    maxPeople: Yup.string().required("Vui lòng nhập thông tin vào đây"),
                    standardRoom: Yup.string().required("Vui lòng nhập thông tin vào đây"),
                    description: Yup.string().required(
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
                onSubmit={(values, {setSubmitting}) => {
                    const edit = async () => {
                        await facilityService.edit({
                            ...values,
                            facilityType: +values.facilityType,
                            rentType: +values.rentType
                        });
                        console.log(values);
                        setSubmitting(false);
                        alert("Chỉnh sửa thành công!");
                        navigate("/facility-list")
                    };
                    edit();
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
                                facilityType.map((facilityType) => (
                                    <>
                                        <option key={facilityType.id}
                                                value={facilityType.id}>{facilityType.name}</option>
                                    </>
                                ))
                            }
                        </Field>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rentType" className="form-label">Loại hình thanh toán:</label>
                        <Field className='form-control' component="select" name="rentType">
                            {
                                rentType.map((rentType) => (
                                    <>
                                        <option key={rentType.id} value={rentType.id}>{rentType.name}</option>
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
                                <Link to="/facility-list" className="btn btn-primary">
                                    Quay lại
                                </Link>
                            </>
                        )}
                    </div>
                </Form>
            )}
            </Formik>
        </>
    )
}
export default FacilityEdit;