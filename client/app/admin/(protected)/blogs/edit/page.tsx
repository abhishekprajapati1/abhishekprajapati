import BlogForm from '@/components/admin/blogs/BlogForm';
import React from 'react'

interface EditBlogPageProps {
    searchParams: { blog_id: string }
}

const EditBlogPage: React.FC<EditBlogPageProps> = ({ searchParams: { blog_id } }) => {
    return (
        <div>
            <BlogForm blog_id={blog_id} />
        </div>
    )
}

export default EditBlogPage;