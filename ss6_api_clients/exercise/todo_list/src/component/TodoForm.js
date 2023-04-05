import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as todoService from '../service/TodoService'
import {toast} from "react-toastify";

function TodoForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: ''
                }}
                onSubmit={(values) => {
                    const create = async () => {
                        await todoService.save(values)
                        toast("Thêm mới thành công!!");
                    }
                    create()
                }}
            >
                <Form>
                    <h2>TODO LIST</h2>
                    <Field type='text' name='name'/>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default TodoForm;