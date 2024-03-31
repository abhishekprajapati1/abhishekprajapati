const ENDPOINTS = {
    LOGIN: "auth/login",
    LOGOUT: "auth/logout",
    DETAILS: "auth/details",
    REFRESH_TOKEN: "auth/refresh-token",
    BLOGS: "blogs",
    RECENT_BLOGS: "blogs/public/recent",
    GET_BLOG_PUBLIC: (slug: string) => `blogs/public/${slug}`,
    UPDATE_BLOG: (id: string) => `blogs/${id}`,
    REMOVE_BLOG: (id: string) => `blogs/${id}`,
    GET_BLOG_FOR_ADMIN: (id?: string) => `blogs/details/${id}`,
    TAGS: "tags"
}

export default ENDPOINTS;