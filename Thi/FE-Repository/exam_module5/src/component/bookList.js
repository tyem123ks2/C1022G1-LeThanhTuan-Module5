import {useEffect, useState} from "react";
import * as bookService from "../service/bookService"
import * as categoryService from "../service/categoryService"
import {NavLink} from "react-router-dom";

function BookList() {
    const [bookList, setBookList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const showAllBooks = async () => {
        const response = await bookService.getAllBooks();
        setBookList(response.content);
        console.log(response.content)
    }
    const showAllCategory = async () => {
        const response = await categoryService.getAllCategory();
        setCategoryList(response);
    }
    useEffect(() => {
        showAllBooks()
        showAllCategory()
    }, [])


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
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BookList;
