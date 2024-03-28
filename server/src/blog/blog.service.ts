import { Injectable } from '@nestjs/common';
import { IWithPrismaClient, PrismaService } from '../prisma/prisma.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Prisma } from '@prisma/client';

interface ICreate extends IWithPrismaClient { user_id: string; data: CreateBlogDto };
interface IisDuplicateSlug extends IWithPrismaClient { slug: string };
interface IFindAll extends IWithPrismaClient { user_id: string }
interface IFindOne extends IWithPrismaClient { slug: string }
interface IBlogExists extends IWithPrismaClient { blog_id: string }
interface IUpdateBlog extends IWithPrismaClient { blog_id: string, data: Prisma.BlogUpdateInput }

@Injectable()
export class BlogService {
    constructor(private readonly prisma: PrismaService) { }

    async isDuplicateSlug({ slug, prisma }: IisDuplicateSlug) {
        const PRISMA = prisma || this.prisma;
        return await PRISMA.blog.findUnique({ where: { slug }, select: { id: true, slug: true } });
    }

    async create({ user_id, data, prisma }: ICreate) {
        const PRISMA = prisma || this.prisma;
        const { tag_ids, ...rest } = data;

        await PRISMA.blog.create({
            data: {
                ...rest,
                tags: {
                    connect: tag_ids.map(tag_id => ({ id: tag_id }))
                },
                user: {
                    connect: { id: user_id }
                }
            }
        })
    }

    async findAll({ user_id, prisma }: IFindAll) {
        const PRISMA = prisma || this.prisma;
        const data = await PRISMA.blog.findMany({ where: { user: { id: user_id } }, select: { id: true, title: true, slug: true, tags: { select: { id: true, name: true } } } })
        return data;
    }

    async findOne({ slug, prisma }: IFindOne) {
        const PRISMA = prisma || this.prisma;
        const data = await PRISMA.blog.findUnique({
            where: { slug },
            select: {
                id: true,
                title: true,
                content: true,
                created_at: true,
                updated_at: true,
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
        })
        return data;
    }

    async blogExists({ blog_id, prisma }: IBlogExists) {
        const PRISMA = prisma || this.prisma;
        const data = await PRISMA.blog.findUnique({
            where: { id: blog_id },
            select: { id: true }
        })
        return data;
    }

    async updateBlog({ blog_id, data, prisma }: IUpdateBlog) {
        const PRISMA = prisma || this.prisma;
        await PRISMA.blog.update({
            where: { id: blog_id },
            data
        })
    }

    async deletePermanently(blog_id: string) {
        await this.prisma.blog.delete({
            where: { id: blog_id }
        })
    }
}
