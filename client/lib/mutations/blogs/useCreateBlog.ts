import api, { RequestError, showErrorMessage } from "@/lib/api";
import ENDPOINTS from "@/lib/endpoints";
import { IPostForm } from "@/lib/form";
import { useMutation } from "@tanstack/react-query"

const useCreateBlog = () => {
    const mutation = useMutation({
        mutationFn: async (data: IPostForm) => {
            const response = await api.post(ENDPOINTS.BLOGS, data);
            return response.data;
        },
        onSuccess: (data) => {
            alert(data.message);
        },
        onError: (error: RequestError) => {
            showErrorMessage({ error: error });
        },
    });
    return mutation;
}

export default useCreateBlog;