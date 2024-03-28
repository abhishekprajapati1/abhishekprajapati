import api, { RequestError, showErrorMessage } from "@/lib/api";
import ENDPOINTS from "@/lib/endpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query"


const useRemoveBlog = (id: string) => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async () => {
            const response = await api.delete(ENDPOINTS.REMOVE_BLOG(id));
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

export default useRemoveBlog;