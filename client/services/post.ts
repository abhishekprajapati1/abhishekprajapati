'use server'
import prisma from "@/lib/prisma";
import { IBlog } from "@/lib/types";

export const fetchPosts = async (): Promise<IBlog[]> => {
    try {
        const posts: any = await prisma.blog.findMany({
            take: 5,
            orderBy: {
                created_at: 'desc'
            },
            where: {
                status: "published",
            },
            select: {
                id: true,
                slug: true,
                title: true,
                content: true,
                views: true,
                upvote: true,
                downvote: true,
                status: true,
                created_at: true,
                updated_at: true,
                keywords: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        username: true
                    }
                },
                tags: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
        return posts;
    } catch (error) {
        console.log("see this error", error);
    }

    return [];
}

export const fetchPost = async (slug: string) => {
    try {
        const post = await prisma.blog.findUnique({
            where: { slug: slug },
            select: {
                id: true,
                title: true,
                content: true,
                created_at: true,
                updated_at: true,
                keywords: true,
                status: true,
                slug: true,
                user: {
                    select: {
                        name: true,
                        id: true,
                        username: true,
                    }
                },
                tags: { select: { id: true, name: true } }
            }
        });
        return post;
    } catch (error) {
        console.log("see this error", error);
    }
    return {}
}

export const fetchAllPosts = async (page_number: number = 1, page_size: number = 10): Promise<IBlog[]> => {
    try {
        const posts: any = await prisma.blog.findMany({
            where: { status: "published" },
            take: 10,
            skip: (page_number - 1) * page_size,
            select: {
                id: true,
                slug: true,
                title: true,
                content: true,
                views: true,
                upvote: true,
                downvote: true,
                status: true,
                created_at: true,
                updated_at: true,
                keywords: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        username: true
                    }
                },
                tags: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
        return posts;
    } catch (error) {
        console.log("see this error", error);
    }
    return []
}