import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { AxiosRequestConfig } from "axios";

interface UseFetch {
    endpoint: string;
    extractData?: boolean;
    options?: AxiosRequestConfig;
    enabledKey?: any;
    validate?: boolean;
}

const useFetch = ({ endpoint, extractData = true, enabledKey, validate = false, options }: UseFetch) => {
    const result = useQuery({
        queryKey: [endpoint],
        queryFn: async () => {
            const res = await api.get(endpoint, { ...(options && options) });
            if (extractData) {
                return res.data?.data;
            }
            return res.data;
        },
        enabled: !validate ? true : Boolean(enabledKey) ? true : false
    });
    return result;
};

export default useFetch;