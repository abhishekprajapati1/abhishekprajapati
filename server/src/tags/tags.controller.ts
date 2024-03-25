import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { ITenant, Tenant } from '../auth/decorators/tenant.decorator';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) { }

    @Get()
    async findAll() {
        const tags = await this.tagsService.findAll();
        return { success: true, data: tags }
    }

    @Post()
    async createTag(@Body() createTagDto: CreateTagDto, @Tenant() user: ITenant) {
        const exist = await this.tagsService.isDuplicate({ name: createTagDto.name });
        if (exist) throw new BadRequestException({ success: false, message: "Tag already exists." });

        await this.tagsService.create({ data: createTagDto, user_id: user.id });
        return { success: true, message: "Tag created successfully." }
    }
}
