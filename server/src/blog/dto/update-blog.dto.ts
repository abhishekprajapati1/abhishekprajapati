import { BlogStatus } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsArray, IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateBlogStatusDto {
    @IsString()
    @IsNotEmpty()
    @IsIn(["published", "archived", "draft"])
    status: BlogStatus;
}

export class UpdateBlogDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    title?: string;

    @IsOptional()
    @IsArray()
    @Transform(({ value }: { value: string[] }) => value.map(value => value.toLowerCase()))
    keywords?: string[];

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    content?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @IsIn(["published", "draft"])
    status?: BlogStatus;

    @IsOptional()
    @IsArray()
    tag_ids?: string[];

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: { value: string }) => value.toLowerCase())
    slug?: string;
}