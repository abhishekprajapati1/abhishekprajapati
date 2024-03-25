import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTagDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: { value: string }) => value.toLowerCase())
    name: string;
}