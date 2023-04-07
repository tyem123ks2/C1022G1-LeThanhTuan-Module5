import React, {useEffect, useState} from "react";
import {Formik, Form, Field} from "formik";
import {RotatingLines} from 'react-loader-spinner'
import * as bookService from "../Service/bookService";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router";

function Edit() {
    let navigate = useNavigate();
    const param = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const response = await bookService.detail(param.id)
            setBook(response)
        }
        fetchApi()
    }, [])

    if (!book) {
        return null
    }

    return (
        <>
            <Formik
                initialValues={{
                    id: book?.id,
                    title: book?.title,
                    quantity: book?.quantity,
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const edit = async () => {
                        await bookService.edit(values)
                        console.log(values);
                        setSubmitting(false);
                        toast("Edit successfully!!!");
                        navigate('/')
                    };
                    edit();
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h1>Edit</h1>
                            <Field type='hidden' name="id"/>
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
    );
}

export default Edit;