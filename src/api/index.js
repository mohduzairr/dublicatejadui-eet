import Axios from "axios";
import { BaseSetting } from "utils/common";

const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

function returnAxiosInstance(customHeaders = headers) {
    return Axios.create({
        baseURL: BaseSetting.apiDomain,
        timeout: 5000,
        headers: customHeaders,
    });
}

export function get(url, customHeaders = headers) {
    let cancelToken;
    if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("######################TOKEN CANCELLED#################################")
    }
    cancelToken = Axios.CancelToken.source();
    const axios = returnAxiosInstance(customHeaders);
    return axios.get(url, { cancelToken: cancelToken.token });
}

export function post(url, requestData, customHeaders = headers) {
    const axios = returnAxiosInstance(customHeaders);
    return axios.post(url, requestData);
}