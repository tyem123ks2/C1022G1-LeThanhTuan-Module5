import React, { useEffect, useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as bookService from "../../Service/bookService"

function ShowList() {
    const [bookList, setBookList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const showAll = async () => {
            const result = await bookService.findAll();
            setBookList(result);
        };
        showAll();
    }, []);

    const handleDelete = async (id) => {
        await bookService.remove(id);
        let result = await bookService.findAll()
        setBookList(result);
    };

    function handleUpdate(id) {
        navigate(`/edit/${id}`)
    }

    return (
        <>
            <h1>Library</h1>
            <NavLink to='add' className='btn btn-secondary'>Add a new book</NavLink>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    bookList.map((book, index) => {
                        return (
                            <tr key={index}>
                                <td>{book.title}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <button type='button'
                                            className='btn btn-primary'
                                            onClick={() => handleUpdate(book.id)} >Edit</button>
                                </td>
                            <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(book.id)}
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

export default ShowList;