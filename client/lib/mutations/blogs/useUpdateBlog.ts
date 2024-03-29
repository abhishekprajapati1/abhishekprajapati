import api, { RequestError, showErrorMessage } from "@/lib/api";
import ENDPOINTS from "@/lib/endpoints";
import { IPostForm } from "@/lib/form";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation";


const useUpdateBlog = (id: string) => {
    const router = useRouter();
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async (data: IPostForm) => {
            const response = await api.patch(ENDPOINTS.UPDATE_BLOG(id), data);
            return response.data;
        },
        onSuccess: (data) => {
            alert(data.message);
            queryClient.invalidateQueries({ queryKey: [ENDPOINTS.BLOGS] });
            router.replace("/admin/blogs");

        },
        onError: (error: RequestError) => {
            showErrorMessage({ error: error });
        },
    });
    return mutation;
}

export default useUpdateBlog;