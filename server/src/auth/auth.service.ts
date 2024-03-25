import { Injectable } from '@nestjs/common';
import { IWithPrismaClient, PrismaService } from '../prisma/prisma.service';
import { compareString } from '../../lib/utils';

interface IGetDetails extends IWithPrismaClient { user_id: string }

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) { }

    async validateUser(username: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { username } });

        if (user) {
            let isPasswordCorrect = compareString(password, user.password);
            if (isPasswordCorrect) {
                delete user.password;
                return user;
            }
        }
    }

    async getDetails({ user_id, prisma }: IGetDetails) {
        const PRISMA = prisma || this.prisma;
        return await PRISMA.user.findUnique({ where: { id: user_id }, select: { id: true, name: true, username: true } })
    }
}
