import { API_REQUEST_FAILED } from "../constants";

export const apiRequestFailed = (error: Error) => {
    return {
        type: API_REQUEST_FAILED,
        payload: error
    };
};