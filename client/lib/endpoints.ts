const ENDPOINTS = {
    LOGIN: "auth/login",
    LOGOUT: "auth/logout",
    DETAILS: "auth/details",
    REFRESH_TOKEN: "auth/refresh-token",
    BLOGS: "blogs",
    REMOVE_BLOG: (id: string) => `blogs/${id}`,
    TAGS: "tags"
}

export default ENDPOINTS;