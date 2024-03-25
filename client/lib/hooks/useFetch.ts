import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { AxiosRequestConfig } from "axios";

interface UseFetch {
    endpoint: string;
    extractData?: boolean;
    options?: AxiosRequestConfig;
}

const useFetch = ({ endpoint, extractData = true, options }: UseFetch) => {
    const result = useQuery({
        queryKey: [endpoint],
        queryFn: async () => {
            const res = await api.get(endpoint, { ...(options && options) });
            if (extractData) {
                return res.data?.data;
            }
            return res.data;
        },
    });
    return result;
};

export default useFetch;