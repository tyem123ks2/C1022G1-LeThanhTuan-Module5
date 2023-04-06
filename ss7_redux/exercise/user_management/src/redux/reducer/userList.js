import {GET_ALL_USER, DELETE_USER} from "../action/types";

const initialState = [];

const userReducer = (users = initialState, action) => {
    const {type, payload} = action;
    console.log(payload);

    switch (action.type) {
        case GET_ALL_USER:
            return action.payload;
        case DELETE_USER:
            return [...users]
        default:
            return users;
    }
};

export default userReducer();