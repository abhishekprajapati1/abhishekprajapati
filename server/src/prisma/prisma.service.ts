import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

export interface IWithPrismaClient { prisma?: Prisma.TransactionClient };

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super();
        let prisma = new PrismaClient();
        prisma.$connect().then(() => Logger.log("Database connection established.")).catch(() => Logger.error("Error connecting to database."));
    }
}
