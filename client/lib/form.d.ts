export interface ILoginForm {
    username: string;
    password: string;
}

export type PostStatus = "draft" | "published";
export interface IPostForm {
    title: string;
    content: string;
    status: PostStatus;
    tag_ids: string[];
    slug: string;
}

export interface ITagForm {
    name: string;
}