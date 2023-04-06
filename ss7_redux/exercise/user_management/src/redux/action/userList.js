import {GET_ALL_USER, DELETE_USER} from "./types";
import userService from '../../Service/UserService'

export const getAllUser = () => async (dispatch) => {
    try {
        const response = await userService.findAllUser();
        console.log(response.data);
        dispatch({
            type: GET_ALL_USER,
            payload: response.data,
        })
    } catch (error) {
        console.log(error)
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        const response = await userService.remove(id);
        alert("Delete Successfully!!!")
        console.log(response.data);
        dispatch({
            type: DELETE_USER,
        })
    } catch (error) {
        console.log(error)
    }
};
