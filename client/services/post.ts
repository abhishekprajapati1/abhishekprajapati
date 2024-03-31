import api from "@/lib/api";
import ENDPOINTS from "@/lib/endpoints";

export const fetchPosts = async () => {
    try {
        const response = await api.get(ENDPOINTS.RECENT_BLOGS);
        return response.data?.data;
    } catch (error) {
        console.log("see this error", error);
    }
}

export const fetchPost = async (slug: string) => {
    try {
        const response = await api.get(ENDPOINTS.GET_BLOG_PUBLIC(slug));
        return response.data?.data;
    } catch (error) {
        console.log("see this error", error);
    }
}