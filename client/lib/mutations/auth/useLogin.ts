
import api, { RequestError, TOKEN_TO_REFRESH, showErrorMessage } from "@/lib/api";
import { TOKEN_VALIDITY } from "@/lib/constants";
import ENDPOINTS from "@/lib/endpoints";
import { ILoginForm } from "@/lib/form";
import { useMutation } from "@tanstack/react-query";

const useLogin = (ret?: string) => {
    const mutation = useMutation({
        mutationFn: async (data: ILoginForm) => {
            const response = await api.post(ENDPOINTS.LOGIN, data);
            return response.data;
        },
        onSuccess: (data) => {
            alert(data.message);
            const token: TOKEN_TO_REFRESH = data?.data?.auth_token;
            if (token) {
                window.localStorage.setItem(TOKEN_VALIDITY.auth_token, JSON.stringify({ type: token.type, life: token.life }));
            }
            window.location.href = ret ? ret : "/admin";
        },
        onError: (error: RequestError) => {
            showErrorMessage({ error })
        }
    });
    return mutation;
}
export default useLogin;