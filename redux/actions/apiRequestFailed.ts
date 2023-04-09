import { API_REQUEST_FAILED } from "../constants";

/**
 * Action creator that returns an object representing an API request failure.
 * @param error An error object representing the failure.
 * @returns An object with type `API_REQUEST_FAILED` and a payload containing the error object.
 */

export const apiRequestFailed = (error: Error) => {
    return {
        type: API_REQUEST_FAILED,
        payload: error
    };
};