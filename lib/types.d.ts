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