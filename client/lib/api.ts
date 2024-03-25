import axios, { AxiosError } from "axios";
import ENDPOINTS from "./endpoints";
import { TOKEN_VALIDITY } from "./constants";
import { getCookie, setCookie } from "cookies-next";

export const baseURL = process.env.NODE_ENV === "development" ? 'http://localhost:4000/api/' : 'https://itisabhi.onrender.com/api/';

export const Imageapi = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        "Content-Type": "multipart/formdata"
    },
});

const api = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + getCookie("auth_token"),
        "refresh_token": getCookie("refresh_token")
    },
});

export type RequestError = AxiosError & {
    response: {
        data: {
            success: boolean,
            message?: string,
            error?: any;
        }
    }
}

export const logout = async () => {
    try {
        const response = await api.post(ENDPOINTS.LOGOUT);
        alert(response?.data?.message);
        window.localStorage.clear();
        location.href = "/admin/login"
    } catch (err: any) {
        showErrorMessage({ error: err });
    }
}

interface IShowErrorMessage {
    error: RequestError,
    redirect?: {
        path?: string;
        shouldRedirect?: boolean;
    }
}

export const showErrorMessage = (data: IShowErrorMessage) => {

    const { error, redirect } = data || {};
    const { shouldRedirect = true, path = "/admin/login" } = redirect || {};

    let message;
    if (Array.isArray(error?.response?.data?.message) && error?.response?.data?.message.length > 0) {
        message = error?.response?.data?.message[0];
    } else {
        message = error?.response?.data?.message || data?.error?.message || "Something went wrong";
    }

    if (error.response.status === 401 && shouldRedirect) {
        window.location.href = path;
    }

    alert(message);
}



export type TOKEN_TO_REFRESH = {
    type: string;
    life: number;
    value: string;
}



export const refreshToken = async (keyname: string = TOKEN_VALIDITY.auth_token) => {
    try {
        const response = await api.get(ENDPOINTS.REFRESH_TOKEN);
        const newToken: TOKEN_TO_REFRESH = response.data?.data?.auth_token;
        if (newToken) {
            window?.localStorage?.setItem(keyname, JSON.stringify({ type: newToken.type, life: newToken.life }));
        }
        if (newToken && response?.data?.data?.refresh_token) {
            setCookie('auth_token', newToken.value);
            setCookie('refresh_token', response?.data?.data?.refresh_token);
        }
    } catch (error: any) {
        showErrorMessage({ error });
    }
}

export default api;