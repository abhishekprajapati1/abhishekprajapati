import { BlogStatus } from "@prisma/client";
import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class UpdateBlogStatusDto {
    @IsString()
    @IsNotEmpty()
    @IsIn(["published", "archived", "draft"])
    status: BlogStatus;
}