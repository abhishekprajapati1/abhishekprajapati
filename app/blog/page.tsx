import PostCard from '@/components/PostCard';
import { PostType } from '@/lib/types';
import { fetchPosts } from '@/services/post';
import React from 'react'

const BlogListingPage = async () => {
    const posts: PostType[] | null = await fetchPosts();
    posts?.pop();
    posts?.pop();

    return (
        <main className='mt-14'>
            <div className='flex flex-col gap-8'>
                <h1 className='font-semibold text-2xl'>read my blog</h1>
                <div className='flex flex-col gap-6'>
                    {
                        Array.isArray(posts) && posts?.map((post) => <PostCard key={post.id} data={post} />)
                    }
                </div>
            </div>
        </main>
    )
}

export default BlogListingPage;