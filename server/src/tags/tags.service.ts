import { Injectable } from '@nestjs/common';
import { IWithPrismaClient, PrismaService } from '../prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';

interface IisDuplicate extends IWithPrismaClient { name: string }
interface ICreate extends IWithPrismaClient { user_id: string; data: CreateTagDto }

@Injectable()
export class TagsService {
    constructor(private readonly prisma: PrismaService) { }

    async isDuplicate({ name, prisma }: IisDuplicate) {
        const PRISMA = prisma || this.prisma;
        return await PRISMA.tag.findUnique({ where: { name }, select: { id: true } });
    }

    async findAll() {
        return await this.prisma.tag.findMany({ select: { id: true, name: true } });
    }

    async create({ user_id, data, prisma }: ICreate) {
        const PRISMA = prisma || this.prisma;
        await PRISMA.tag.create({
            data: {
                ...data,
                user: { connect: { id: user_id } }
            }
        })
    }

}
