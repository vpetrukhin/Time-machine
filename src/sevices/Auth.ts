import axios from "axios";
import {IRegisterObj} from "../types/auth.types";
import {IModel} from "../types/model.types";

axios.interceptors.request.use(config => {
    const user = JSON.parse(localStorage.getItem('user') as string);

    if (user && user.token) {
        config.headers = {...config.headers, "Authorization": 'Bearer ' + user.token};
    }

    return config;
});

class AuthenticationService {

    signin = (username: string, password: string) => {
        return axios.post("/api/auth/signin", {username, password})
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }

    signOut() {
        localStorage.removeItem("user");
    }

    register = async (registerInfo: IRegisterObj) => {
        return axios.post("/api/auth/signup", registerInfo);
    }
    getRoles = async () => {
        return await axios.get("/api/auth/roles")
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user') as string);
    }

    getModel() {
        return axios.get("/model");
    }

    sendModel(modelList: IModel[]) {
        return axios.post("/model",modelList);
    }
}

export default new AuthenticationService();