import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { compareString } from 'lib/utils';

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
}
