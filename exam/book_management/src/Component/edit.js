import React, {useState} from "react";
import {Formik, Form, Field} from "formik";
import {RotatingLines} from 'react-loader-spinner'
import * as bookService from "../Service/bookService";
import {toast} from "react-toastify";
import {useParams} from "react-router";

function Edit(props) {
    const param = useParams();
    const [book, setBook] = useState(async () => {
        const bookDetail = await bookService.findById(param.id);
        return setBook(bookDetail);
    });

    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    quantity: "",
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const add = async () => {
                        console.log(values);
                        setSubmitting(false);
                        toast("Edit successfully!!!");
                    };
                    add();
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h1>Edit</h1>
                        <div className="mb-3">
                            <label htmlFor="title" className='form-label'>Title</label>
                            <Field id="title" name="title"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className='form-label'>Quantity</label>
                            <Field type="number" id="quantity" name="quantity"/>
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
                                <button type='submit' className='btn btn-primary'>ADD</button>
                        }
                    </Form>
                )}
            </Formik>
        </>
    )
        ;
}

export default Edit;