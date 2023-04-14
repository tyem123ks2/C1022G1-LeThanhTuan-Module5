import React, {useEffect, useState} from "react";
import * as bookService from "../service/bookService"
import * as categoryService from "../service/categoryService"
import {NavLink, useNavigate} from "react-router-dom";
import BookModalDelete from "./deleteBookModal";

function BookList() {
    const navigate = useNavigate();
    const [bookList, setBookList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    const fetchApi = async () => {
        const bookRes = await bookService.getAllBooks();
        const categoryRes = await categoryService.getAllCategory();
        setBookList(bookRes.content);
        setCategoryList(categoryRes.content);
    }

    useEffect(() => {
        fetchApi()
    }, []);


    function handleUpdate1(id) {
        navigate(`/edit/${id}`);
    }

    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState("")
    const getPropsDeleteBook = (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    }

    return (
        <>
            <div className="p-3">
                <h2 className="text-center fw-bold my-3">THƯ VIỆN SKY GARDEN</h2>
                <div>
                    <NavLink className="btn btn-light" to='/books-create'>
                        <img src="https://img.icons8.com/cute-clipart/256/add-file.png" height="50" width="50"/>
                        THÊM MỚI SÁCH </NavLink>
                </div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Mã sách</th>
                        <th className="text-center">Tên sách</th>
                        <th className="text-center">Thể loại</th>
                        <th className="text-center">Ngày nhập sách</th>
                        <th className="text-center">Số lượng</th>
                        <th className="text-center">Chỉnh sửa</th>
                        <th className="text-center">Xóa</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        bookList.map((book, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{book.codeBook}</td>
                                    <td>{book.name}</td>
                                    <td>{book.category.name}</td>
                                    <td>{book.loanDay}</td>
                                    <td>{book.quantity}</td>
                                    <td>
                                        <button type='button'
                                                className='btn btn-primary'
                                                onClick={() => handleUpdate1(book.id)}>Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-secondary" style={{color: "red"}}
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1"
                                                onClick={() => getPropsDeleteBook(book.id, book.name)}>
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
            <BookModalDelete
                id={deleteId}
                name={deleteName}
                getShowList = {() => {
                    toast("Xóa thành công");
                    fetchApi();
                }} />
        </>
    )
}

export default BookList;
