import {ONCLICK_BUTTON_ACTION, ONCLICK_DELETE_ACTION} from "./types";

export const onClickButtonAction = () => {
    return {
        type: ONCLICK_BUTTON_ACTION,
    };
};

export const onClickDeleteAction = () => {
    return {
        type: ONCLICK_DELETE_ACTION,
    };
};