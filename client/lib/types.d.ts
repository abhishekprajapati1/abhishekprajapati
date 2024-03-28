import React, { SVGProps } from "react"

export type WrapperProps = {
    children?: React.ReactNode;
}

export interface IconInterface extends SVGProps<SVGSVGElement> {

}

export type SkillCardProps = {
    label: string;
    image: string;
    href: string;
}

export type PostType = {
    id: string;
    published: string;
    updated: string;
    selfLink: string;
    title: string;
    content: string | TrustedHTML;
    author: {
        id: string;
        displayName: string;
        url: string;
        image: ImageData
    },
    replies: {
        totalItems: string;
        selfLink: string;
    },
    etag: string;
}

// to be used for admin only

export interface IUser {
    id: string;
    name: string;
    username: string;
}

export type BlogStatus = "archived" | "draft" | "published";

export interface ITag {
    id: string; name: string;
}

export interface IBlog {
    slug: string;
    user: IUser;
    id: string;
    title: string;
    content: string;
    status: BlogStatus;
    created_at: Date;
    updated_at: Date;
    tags: ITag[];
}