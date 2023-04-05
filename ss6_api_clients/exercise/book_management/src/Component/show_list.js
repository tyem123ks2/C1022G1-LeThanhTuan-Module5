import React, {useEffect, useState} from "react";
import * as bookService from "../Service/bookService";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";

function ShowList() {
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        const showAll = async () => {
            const result = await bookService.findAll();
            setBookList(result);
        };
        showAll();
    }, []);

    const handleDelete = async (id) => {
        await bookService.remove(id);
        toast.success("Xóa thành công!");
    };

    return (
        <>
            <h1>Library</h1>
            <NavLink to="/add" className="btn btn-success">
                Add a new Book
            </NavLink>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {bookList.map((book) => {
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <NavLink
                                    to={`edit/${book.id}`}
                                    className="btn btn-primary me-4"
                                >
                                    Edit
                                </NavLink>
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
                })}
                </tbody>
            </table>
        </>
    );
}

export default ShowList;