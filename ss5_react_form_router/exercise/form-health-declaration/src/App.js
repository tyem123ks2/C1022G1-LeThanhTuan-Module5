import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {RotatingLines} from 'react-loader-spinner'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

function FormHealth() {
    // let navigate = useNavigate()
    return (
        <>
            <Formik initialValues={{
                name: '', idCard: '', dateOfBirth: '', gender: '', country: '',
                company: '', position: '', healthCard: '', province: '', district: '',
                wards: '', houseNumber: '', phone: '', email: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required("Required"),
                        idCard: Yup.string()
                            .required("Required"),
                        dateOfBirth: Yup.string()
                            .required("Required"),
                        country: Yup.string()
                            .required("Required"),
                        province: Yup.string()
                            .required("Required"),
                        district: Yup.string()
                            .required("Required"),
                        wards: Yup.string()
                            .required("Required"),
                        houseNumber: Yup.string()
                            .required("Required"),
                        phone: Yup.number()
                            .required("Required")
                            .min(10, 'Must be 10 characters'),
                        email: Yup.string()
                            .email().required("Required"),

                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        //callAPI
                        setTimeout(() => {
                            console.log(values);
                            setSubmitting(false);
                            toast("Wow so easy!")
                            // navigate('/')
                        }, 500);
                    }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h3>TỜ KHAI Y TẾ</h3>
                        <div className='mb-3'>
                            <label htmlFor='humanName' className='form-label'>Họ và tên</label>
                            <Field type='text' className='form-control' id='humanName'
                                   name='name'
                            />
                            <ErrorMessage name='name' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='humanIdCard' className='form-label'>Số CMND/CCCD</label>
                            <Field type='text' className='form-control' id='humanIdCard'
                                   name='idCard'
                            />
                            <ErrorMessage name='idCard' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='dateOfBirth' className='form-label'>Ngày sinh</label>
                            <Field type='text' className='form-control' id='dateOfBirth'
                                   name='dateOfBirth'
                            />
                            <ErrorMessage name='dateOfBirth' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='humanGender' className='form-label'>Giới tính</label>
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
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='humanCountry' className='form-label'>Quốc tịch</label>
                            <Field type='text' className='form-control' id='humanCountry'
                                   name='country'
                            />
                            <ErrorMessage name='country' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='humanCompany' className='form-label'>Công ty làm việc</label>
                            <Field type='text' className='form-control' id='humanCompany'
                                   name='company'
                            />
                            <ErrorMessage name='country' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='humanPosition' className='form-label'>Vị trí làm việc</label>
                            <Field type='text' className='form-control' id='humanPosition'
                                   name='position'
                            />
                            <ErrorMessage name='position' component='span' className='form-err'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='humanHealthCard' className='form-label'>Có thẻ bảo hiểm y tế</label>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio1'
                                       name='healthCard'
                                       value='1'/>
                                <label className='form-check-label' htmlFor='radio1'>Có</label>
                            </div>
                        </div>
                        <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                        <div className='mb-3'>
                            <div className='mb-3'>
                                <label htmlFor='humanProvince' className='form-label'>Tỉnh thành</label>
                                <Field type='text' className='form-control' id='humanProvince'
                                       name='province'
                                />
                                <ErrorMessage name='province' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='humanDistrict' className='form-label'>Quận/huyện</label>
                                <Field type='text' className='form-control' id='humanDistrict'
                                       name='district'
                                />
                                <ErrorMessage name='district' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='humanWards' className='form-label'>Phường/xã</label>
                                <Field type='text' className='form-control' id='humanWards'
                                       name='wards'
                                />
                                <ErrorMessage name='wards' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='humanHouseNumber' className='form-label'>Số nhà, phố, tổ dân phố</label>
                                <Field type='text' className='form-control' id='humanHouseNumber'
                                       name='houseNumber'
                                />
                                <ErrorMessage name='houseNumber' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='humanPhone' className='form-label'>Số điện thoại</label>
                                <Field type='text' className='form-control' id='humanPhone'
                                       name='phone'
                                />
                                <ErrorMessage name='phone' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='humanEmail' className='form-label'>Địa chỉ Email</label>
                                <Field type='text' className='form-control' id='humanEmail'
                                       name='email'
                                />
                                <ErrorMessage name='email' component='span' className='form-err'/>
                            </div>
                        </div>
                        <h3>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ nào? (Có thể đi qua nhiều quốc
                            gia)</h3>
                        <div className='mb-3'>
                            <textarea rows="9" cols="70" placeholder='Để trống nếu không đi đến quốc gia nào!'>
                            </textarea>
                        </div>
                        <h3>Trong vòng 14 ngày qua, Anh/Chị có dấu hiệu nào sau đây hay không?</h3>
                        <div className='mb-3'>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-1'
                                       name='checkbox1'
                                       value='Sốt'/>
                                <label className='form-check-label' htmlFor='radio-check-1'>Sốt</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-2'
                                       name='checkbox1'
                                       value='Ho'/>
                                <label className='form-check-label' htmlFor='radio-check-2'>Ho</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-3'
                                       name='checkbox1'
                                       value='Khó thở'/>
                                <label className='form-check-label' htmlFor='radio-check-3'>Khó thở</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-4'
                                       name='checkbox1'
                                       value='Viêm phổi'/>
                                <label className='form-check-label' htmlFor='radio-check-4'>Viêm phổi</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-5'
                                       name='checkbox1'
                                       value='Đau họng'/>
                                <label className='form-check-label' htmlFor='radio-check-5'>Đau họng</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check-6'
                                       name='checkbox1'
                                       value='Mệt mỏi'/>
                                <label className='form-check-label' htmlFor='radio-check-6'>Mệt mỏi</label>
                            </div>
                        </div>
                        <h3>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với:</h3>
                        <div className='mb-3'>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check2-1'
                                       name='checkbox2'
                                       value='Người bệnh hoặc nghi ngờ
                                    mắc COVID-19'/>
                                <label className='form-check-label' htmlFor='radio-check2-1'>Người bệnh hoặc nghi ngờ
                                    mắc COVID-19</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check2-2'
                                       name='checkbox2'
                                       value='Người từ quốc gia có bệnh
                                    COVID-19'/>
                                <label className='form-check-label' htmlFor='radio-check2-2'>Người từ quốc gia có bệnh
                                    COVID-19</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field className='form-check-input' type='checkbox' id='radio-check2-3'
                                       name='checkbox2'
                                       value='Người có biểu hiện (Sốt,
                                    ho, khó thở, viêm phổi)'/>
                                <label className='form-check-label' htmlFor='radio-check2-3'>Người có biểu hiện (Sốt,
                                    ho, khó thở, viêm phổi)</label>
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
                                <button type='submit' className='btn btn-primary'>Submit</button>
                        }
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default FormHealth;