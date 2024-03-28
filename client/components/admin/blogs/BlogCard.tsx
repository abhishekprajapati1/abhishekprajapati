import { IBlog } from '@/lib/types'
import dayjs from 'dayjs'
import React from 'react'
import BlogAction from './BlogAction'

interface BlogCard extends IBlog { }

const BlogCard: React.FC<BlogCard> = ({ ...blog }) => {
    return (
        <div className='pb-3 pt-1 flex flex-wrap md:flex-nowrap gap-x-10'>
            <div className=''>
                <h3 className='text-lg'>{blog.title}</h3>
                <div className='flex items-center flex-wrap gap-x-14 mt-1'>
                    <p className='text-gray-400 text-sm'>Created at - {dayjs(blog.created_at).format("MMM DD, YYYY")}</p>
                    <p className='text-gray-400 text-sm'>Last updated at - {dayjs(blog.created_at).format("MMM DD, YYYY")}</p>
                </div>
            </div>

            <BlogAction blog_id={blog.id} />
        </div>
    )
}

export default BlogCard