import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:3002/book`)
        return result.data;
    } catch (error) {
        console.log(error)
    }
}

export const save = async (book) => {
    try {
            await axios.post(`http://localhost:3002/book/`, {...book})
    } catch (error) {
        console.log(error)
    }
}
export const detail = async (id) => {
    try {
        return (await axios.get(`http://localhost:3002/book/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}

export const edit = async (book) => {
    console.log(book)
    try {
        return await axios.put(`http://localhost:3002/book/${book.id}`, {...book})
    } catch (error) {
        console.log(error)
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:3002/book/${id}`)
        alert("Xóa thành công!!")
    } catch (error) {
        console.log(error)
    }
}

export const findById = async (id) => {
    try {
        const bookId = await axios.get(`http://localhost:3002/book/${id}`)
        return bookId;
    } catch (error) {
        console.log(error)
    }
}