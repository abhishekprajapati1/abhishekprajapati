
import api from "@/lib/api";
import { ILoginForm } from "@/lib/form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useLogin = () => {
    const mutation = useMutation({
        mutationFn: async (data: ILoginForm) => {
            const response = await api.post("auth/login", data);
            return response.data;
        },
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {

        }
    });
    return mutation;
}
export default useLogin;