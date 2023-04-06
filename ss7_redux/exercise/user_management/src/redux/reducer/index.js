import {combineReducers} from "redux";
import userService from "../../Service/UserService";

export const rootReducer = combineReducers({
    countState: userService,
})