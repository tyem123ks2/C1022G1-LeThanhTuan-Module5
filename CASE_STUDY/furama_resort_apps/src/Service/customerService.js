import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:3006/customer`);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

export const findAllCustomerType = async () => {
    try {
        const result = await axios.get(`http://localhost:3006/customerType`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}


export const save = async (customer) => {
    try {
        await axios.post(`http://localhost:3006/customer/`, {...customer});
    } catch (e) {
        console.log(e)
    }
}

export const detail = async (id) => {
    try {
        return (await axios.get(`http://localhost:3006/customer/${id}`)).data;
    } catch (e) {
        console.log(e)
    }
}

export const edit = async (customer) => {
    try {
        return await axios.put(`http://localhost:3006/customer/${customer.id}`, {...customer});
    } catch (e) {
        console.log(e)
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:3006/customer/${id}`)
        alert("Xóa khách hàng thành công!!")
    } catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        const customerId = await axios.get(`http://localhost:3006/customer/${id}`)
        return customerId;
    } catch (error) {
        console.log(error)
    }
}