import axios from "axios";


export const getAllBooks = async () => {
    return (await axios.get(`http://localhost:8080/books`)).data;
}

export const getBookId = async (id) => {
    return (await axios.get(`http://localhost:8080/books/${id}`)).data
};

export const createBooks = async (books) => {
    return await axios.post(`http://localhost:8080/books`, {...books});
};

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/books/${id}`)
        alert("Xóa sách thành công!!")
    } catch (e) {
        console.log(e)
    }
}