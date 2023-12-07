import axios from "axios";
import { serverConfig } from "../../config";

export const vtalApi = axios.create({
    baseURL: serverConfig.vtalConfig.baseUrl,
});

export const vtalAuthApi = axios.create({
    baseURL: serverConfig.vtalConfig.authUrl,
    auth: {
        username: serverConfig.vtalConfig.username,
        password: serverConfig.vtalConfig.password,
    },
});
