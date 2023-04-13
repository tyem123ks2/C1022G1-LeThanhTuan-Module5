import React, {useEffect, useState} from "react";
import * as bookService from "../service/bookService";
import * as categoryService from "../service/categoryService";
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {RotatingLines} from "react-loader-spinner";
import * as Yup from "yup";


function CreateBook() {
    const navigate = useNavigate();

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const showAllCategory = async () => {
            const response = await categoryService.getAllCategory();
            setCategoryList(response);
        }
        showAllCategory()
    }, [])

    return (
        <>
            <Formik initialValues={{
                codeBook: '',
                name: '',
                date: '',
                quantity: '',
                category: '',
            }}
                    validationSchema={Yup.object({
                        codeBook: Yup.string().required("Vui lòng không để trống!").matches("^(BO-\\d{4})$","Mã sách phải đúng định dạng BO-XXXX (X là các số)"),
                        name: Yup.string().required("Vui lòng không để trống!").matches("^[\\w+\\s]{0,100}$", "Tên sách không được dài quá 100 kí tự!"),
                        date: Yup.string().required("Vui lòng không để trống!").matches(""),
                        quantity: Yup.string().required("Vui lòng không để trống!").matches(
                            "^[1-9][\\d]*$", "Số lượng sách phải lớn hơn 0")
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        //call API
                        const addNewBooks = async () => {
                            console.log(values);
                            await bookService.createBooks({
                                ...values,
                                category: +values.category,
                            });
                            setSubmitting(false);
                            alert("Thêm mới sách thành công!")
                            navigate("/books")
                        };
                        addNewBooks();
                    }}
            >
                {({isSubmitting}) => (
                    <Form className='row g-3'
                          style={{marginRight: 75, marginLeft: 75, marginTop: 20, marginBottom: 20}}>
                        <h3 style={{textAlign: "center"}}>THÊM MỚI THÔNG TIN SÁCH</h3>
                        <div className="col-md-6">
                            <label htmlFor="codeBook" className="form-label">Mã sách</label>
                            <Field type='text' className='form-control' id='codeBook' name='codeBook'/>
                            <ErrorMessage name='codeBook' component='span' className='form-err text-danger'/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Tên sách</label>
                            <Field type='text' className='form-control' id='codeBook' name='name'/>
                            <ErrorMessage name='name' component='span' className='form-err text-danger'/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="age" className="form-label">Ngày nhập sách</label>
                            <Field type='date' className='form-control' id='area' name='date'/>
                            <ErrorMessage name='date' component='span' className='form-err text-danger'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Thể loại sách</label>
                            <Field className='form-control' component="select" name="category">
                                {
                                    categoryList.map((category) => (
                                        <>
                                            <option key={category.id}
                                                    value={category.id}>{category.name}</option>
                                        </>
                                    ))
                                }
                            </Field>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="quantity" className="form-label">Số lượng sách:</label>
                            <Field type='text' className='form-control' id='quantity' name='quantity'/>
                            <ErrorMessage name='quantity' component='span' className='form-err text-danger'/>
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
                                        Thêm mới
                                    </button>
                                    <Link to="/books" className="btn btn-primary">
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

export default CreateBook;