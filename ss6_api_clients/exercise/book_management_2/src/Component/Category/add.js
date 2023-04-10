import React from "react";
import {Formik, Form, Field} from "formik";
import {RotatingLines} from 'react-loader-spinner'
import * as categoryService from "../../Service/categoryService"
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


function Add1() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    type: "",
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const add = async () => {
                        console.log(values);
                        await categoryService.save(values);
                        setSubmitting(false);
                        toast("Added successful");
                        navigate("/");
                    };
                    add();
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h1>Add a new Category</h1>
                        <div className="mb-3">
                            <label htmlFor="type" className='form-label'>Type</label>
                            <Field id="type" name="type"/>
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

export default Add1;