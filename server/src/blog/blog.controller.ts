import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { ITenant, Tenant } from '../auth/decorators/tenant.decorator';
import { UpdateBlogStatusDto } from './dto/update-blog.dto';

@Controller('blogs')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @Get()
    async getBlogs(@Tenant() user: ITenant) {
        const blogs = await this.blogService.findAll({ user_id: user.id });
        return { success: true, data: blogs }
    }

    @Get(":slug")
    async findSingleBlogPost(@Param('slug') slug: string) {
        const data = await this.blogService.findOne({ slug });
        return { success: true, data }
    }


    @Post()
    async createBlog(@Body() createBlogDto: CreateBlogDto, @Tenant() user: ITenant) {
        let slug: string = "";

        if (!createBlogDto.slug) slug = createBlogDto.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        else slug = createBlogDto.slug;

        // check if duplicate slug
        const exist = await this.blogService.isDuplicateSlug({ slug });
        console.log('see this', exist);
        if (exist) throw new BadRequestException({ success: false, message: "An article already exists with the same slug." });


        await this.blogService.create({ data: { ...createBlogDto, slug }, user_id: user.id });

        return { success: true, slug, message: "Blog created successfully." };
    }

    @Patch(':id')
    async updateBlog() {
        return { success: true, message: "Blog updated successfully." };
    }

    @Delete(':id')
    async deleteBlog(@Param('id') id: string) {
        const exist = await this.blogService.blogExists({ blog_id: id });
        if (!exist) throw new NotFoundException({ success: false, message: "Blog does not exist." })
        await this.blogService.deletePermanently(id);
        return { success: true, message: "Blog deleted permanently." };
    }

    @Post(':id/update-status')
    async updateBlogStatus(@Body() updateBlogStatusDto: UpdateBlogStatusDto, @Param('id') id: string) {
        const exist = await this.blogService.blogExists({ blog_id: id });
        if (!exist) throw new NotFoundException({ success: false, message: "Blog does not exist." });

        await this.blogService.updateBlog({ blog_id: id, data: updateBlogStatusDto });

        return { success: true, message: "Blog status updated successfully." };
    }

}
