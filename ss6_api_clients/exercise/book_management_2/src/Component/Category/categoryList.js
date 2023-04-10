
import React, { useEffect, useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as categoryService from "../../Service/categoryService"

function ShowList1() {
    const [categoryList, setCategoryList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const showAll = async () => {
            const result = await categoryService.findAll();
            setCategoryList(result);
        };
        showAll();
    }, []);

    const handleDelete = async (id) => {
        await categoryService.remove(id);
        let result = await categoryService.findAll()
        setCategoryList(result);
    };

    function handleUpdate(id) {
        navigate(`/editCategory/${id}`)
    }

    return (
        <>
            <h1>Category</h1>
            <NavLink to='addCategory' className='btn btn-secondary'>Add a new Category</NavLink>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope='col'>STT</th>
                    <th scope='col'>Type</th>
                </tr>
                </thead>
                <tbody>
                {
                    categoryList.map((category, index) => {
                        return (
                            <tr key={index}>
                                <td>{category.type}</td>
                                <td>
                                    <button type='button'
                                            className='btn btn-primary'
                                            onClick={() => handleUpdate(category.id)} >Edit</button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(category.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default ShowList1;