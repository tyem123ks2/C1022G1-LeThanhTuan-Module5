import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:3006/facility`);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

export const findAllFacilityType = async () => {
    try {
        const result = await axios.get(`http://localhost:3006/facilityType`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}

export const findAllRentType = async () => {
    try {
        const result = await axios.get(`http://localhost:3006/rentType`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}


export const save = async (facility) => {
    try {
        await axios.post(`http://localhost:3006/facility/`, {...facility});
    } catch (e) {
        console.log(e)
    }
}

export const detail = async (id) => {
    try {
        return (await axios.get(`http://localhost:3006/facility/${id}`)).data;
    } catch (e) {
        console.log(e)
    }
}

export const edit = async (facility) => {
    try {
        return await axios.put(`http://localhost:3006/facility/${facility.id}`, {...facility});
    } catch (e) {
        console.log(e)
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:3006/facility/${id}`)
        alert("Xóa khách hàng thành công!!")
    } catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        const facilityId = await axios.get(`http://localhost:3006/facility/${id}`)
        return facilityId;
    } catch (error) {
        console.log(error)
    }
}