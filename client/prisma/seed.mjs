import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.create({
        data: {
            name: "Abhishek Prajapati",
            username: "abhishek",
            password: bcrypt.hashSync("Admin@123", 10)
        }
    });
}

try {
    main();
} catch (error) {
    // eslint-disable-next-line
    console.log(error);
    process.exit(1);
} finally {
    prisma.$disconnect();
}