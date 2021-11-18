import { get, post } from "api";
import { BaseSetting } from "utils/common";
const apis = {
    login: async (data) => {
        try {
            if (navigator.onLine) {
                const response = await post(BaseSetting.apiDomain + "login", data);
                console.log(response);
                return response.data;
            }
            else {
                // TODO: When system Offline
            }
        } catch (error) {
            console.error(error)
        }
    },

};

export default apis;