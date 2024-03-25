import api, { RequestError, showErrorMessage } from "@/lib/api";
import ENDPOINTS from "@/lib/endpoints";
import { ITagForm } from "@/lib/form";
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useCreateTag = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (data: ITagForm) => {
            const response = await api.post(ENDPOINTS.TAGS, data);
            return response.data;
        },
        onSuccess: (data) => {
            alert(data.message);
            queryClient.invalidateQueries({ queryKey: [ENDPOINTS.TAGS] });
        },
        onError: (error: RequestError) => {
            showErrorMessage({ error: error });
        },
    });
    return mutation;
}

export default useCreateTag;