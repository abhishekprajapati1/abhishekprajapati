import { BlogStatus } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsArray, IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBlogDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(["published", "archived", "draft"])
    status: BlogStatus;

    @IsArray()
    @Transform(({ value }: { value: string[] }) => value.map(value => value.toLowerCase()))
    keywords?: string[];

    @IsArray()
    tag_ids: string[];

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: { value: string }) => value.toLowerCase())
    slug: string;
}