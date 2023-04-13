import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:3006/contract`);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

// export const findAllFacilityType = async () => {
//     try {
//         const result = await axios.get(`http://localhost:3006/facilityType`)
//         return result.data
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// export const findAllRentType = async () => {
//     try {
//         const result = await axios.get(`http://localhost:3006/rentType`)
//         return result.data
//     } catch (e) {
//         console.log(e)
//     }
// }
//
//
// export const save = async (facility) => {
//     try {
//         await axios.post(`http://localhost:3006/contract/`, {...contract});
//     } catch (e) {
//         console.log(e)
//     }
// }

export const detail = async (id) => {
    try {
        return (await axios.get(`http://localhost:3006/contract/${id}`)).data;
    } catch (e) {
        console.log(e)
    }
}

export const edit = async (contract) => {
    try {
        return await axios.put(`http://localhost:3006/customer/${contract.id}`, {...contract});
    } catch (e) {
        console.log(e)
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:3006/contract/${id}`)
        alert("Xóa khách hàng thành công!!")
    } catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        const contractId = await axios.get(`http://localhost:3006/contract/${id}`)
        return contractId;
    } catch (error) {
        console.log(error)
    }
}