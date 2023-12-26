export const fetchPosts = async () => {
    try {
        const response = await fetch(process.env.BLOGGER_BLOG_URI + "posts?key=" + process.env.BLOGGER_API_KEY);
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.log("see this error", error);
    }
}

export const fetchPost = async (id: string) => {
    try {
        const response = await fetch(`${process.env.BLOGGER_BLOG_URI}posts/${id}?key=${process.env.BLOGGER_API_KEY}`);
        const data = response.json();
        return data;
    } catch (error) {
        console.log("see this error", error);
    }
}