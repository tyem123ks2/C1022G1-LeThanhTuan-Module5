import React, {useEffect, useState} from "react";
import {Formik, Form, Field} from "formik";
import {RotatingLines} from 'react-loader-spinner'
import * as categoryService from "../../Service/categoryService"
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router";

function Edit1() {
    let navigate = useNavigate();
    const param = useParams();
    const [category, setCategory] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const response = await categoryService.detail(param.id)
            setCategory(response)
        }
        fetchApi()
    }, [])

    if (!category) {
        return null;
    }

    return (
        <>
            <Formik
                initialValues={{
                    id: category?.id,
                    type: category?.type,
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const edit = async () => {
                        await categoryService.edit(values)
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
                                <button type='submit' className='btn btn-primary'>ADD</button>
                        }
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default Edit1;