import React from "react";
import {Formik, Form, Field} from "formik";
import {RotatingLines} from 'react-loader-spinner'
import * as bookService from "../Service/bookService";
import {toast} from "react-toastify";
import {Navigate} from "react-router";
import {useNavigate} from "react-router-dom";


function Add() {
    const navigate = useNavigate();
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
                        await bookService.save(values);
                        setSubmitting(false);
                        toast("Added successful");
                        navigate("/");
                    };
                    add();
                    }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h1>Add a new Book</h1>
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
                                <button type='submit' className='btn btn-primary'>Save</button>
                        }
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default Add;