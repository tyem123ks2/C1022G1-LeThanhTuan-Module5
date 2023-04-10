import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:3002/category`)
        return result.data;
    } catch (error) {
        console.log(error)
    }
}

export const save = async (category) => {
    try {
        await axios.post(`http://localhost:3002/category/`, {...category})
    } catch (error) {
        console.log(error)
    }
}
export const detail = async (id) => {
    try {
        return (await axios.get(`http://localhost:3002/category/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}

export const edit = async (category) => {
    console.log(category)
    try {
        return await axios.put(`http://localhost:3002/category/${category.id}`, {...category})
    } catch (error) {
        console.log(error)
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:3002/category/${id}`)
        alert("Xóa thành công!!")
    } catch (error) {
        console.log(error)
    }
}

export const findById = async (id) => {
    try {
        const categoryId = await axios.get(`http://localhost:3002/category/${id}`)
        return categoryId;
    } catch (error) {
        console.log(error)
    }
}