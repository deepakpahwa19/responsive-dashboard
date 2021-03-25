import { STATUS } from '../../../constants/commonConstants';
import axiosInstance from '../../../services/axios/axiosInstance';
import { errorObject } from '../../../services/api/apiUtil';
import { API_ERRORS } from '../../../constants/commonConstants';

export const getBuyersAPI = () => {
    return axiosInstance
        .get('/get_buyer')
        .then(response => {
            console.log(response, response.data);
            return { status: STATUS.SUCCESS, ...response.data };
        })
        .catch(error => {
            if (error.response) {
                const { status } = error.response;
                return errorObject(status, 500, error.message);
            } else if (error.request) {
                return errorObject('', API_ERRORS.NO_RESPONSE_RECEIVED, error.message);
            } else {
                return errorObject('', API_ERRORS.NO_REQUEST_ATTACHED, error.message);
            }
        });
};
