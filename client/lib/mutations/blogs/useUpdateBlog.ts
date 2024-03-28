import api, { RequestError, showErrorMessage } from "@/lib/api";
import ENDPOINTS from "@/lib/endpoints";
import { IPostForm } from "@/lib/form";
import { useMutation, useQueryClient } from "@tanstack/react-query"


const useUpdateBlog = (id: string) => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async (data: IPostForm) => {
            const response = await api.patch(ENDPOINTS.GET_BLOG_FOR_ADMIN(id), data);
            return response.data;
        },
        onSuccess: (data) => {
            alert(data.message);
            queryClient.invalidateQueries({ queryKey: [ENDPOINTS.BLOGS] })
        },
        onError: (error: RequestError) => {
            showErrorMessage({ error: error });
        },
    });
    return mutation;
}

export default useUpdateBlog;