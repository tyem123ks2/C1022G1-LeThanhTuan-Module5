import axios from "axios";


export const getAllBooks = async () => {
    return (await axios.get(`http://localhost:3003/books`)).data;
}

export const getBookId = async (id) => {
    return (await axios.get(`http://localhost:3003/books/${id}`)).data
};

export const createBooks = async (books) => {
    return await axios.post(`http://localhost:3003/books`, {...books});
};