import './App.css';
import React, {useState} from "react";
import {Formik} from "formik";

function App() {
    const REGEX = {
        name: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };
    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.name) {
            errors.name = "Required";
        } else if (!REGEX.name.test(form.name)) {
            errors.name = "Invalid name"
        }
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
            console.log("code")
        }
        if (!form.phone) {
            errors.phone = "Required";
        }
        return errors;
    }

    function handleSubmit() {
        alert("Login in successfully!!!");
    }

    return (
        <div>
            <h1>FORM-CONTACT</h1>
            <Formik initialValues={form}
                    validate={handleValidate}
                    onSubmit={handleSubmit}>
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className="custom-input"
                        >
                            <label>Name</label>
                            <input
                                type="name"
                                name="name"
                                value={form.name || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.name}</p>
                        </div>
                        <div
                            className="custom-input"
                        >
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.email}</p>
                        </div>
                        <div
                            className="custom-input"
                        >
                            <label>Phone</label>
                            <input
                                type="phone"
                                name="phone"
                                value={form.phone || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.phone}</p>
                        </div>
                        <div
                            className="custom-input"
                        >
                            <label>Message</label>
                            <textarea
                                type="message"
                                name="message"
                                value={form.message || ""}
                                onChange={handleChange}
                            />
                            {/*<p className="error">{errors.message}</p>*/}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default App;
