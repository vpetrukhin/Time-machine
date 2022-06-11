import axios from "axios";
import {IRegisterObj} from "../types/auth.types";

class AuthenticationService {
    private baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    signin = (username: string, password: string) => {
        return axios.post(`${this.baseUrl}/api/auth/signin`, {username, password})
            .then(response => response.data)
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
}

export default new AuthenticationService('http://localhost:8081');