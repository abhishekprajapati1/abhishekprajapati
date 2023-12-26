import React from 'react'
import PostCard from '../PostCard';
import { fetchPosts } from '@/services/post';
import { PostType } from '@/lib/types';


const RecentArticles = async () => {
    let posts: PostType[] | null = await fetchPosts();
    posts?.pop();
    posts?.pop();


    return (
        <div className='flex flex-col gap-8'>
            <h2 className='font-semibold text-2xl'>sharing is caring... </h2>
            <p>
                I'm not a big writer, but I believe in sharing what I know in a way that everyone can get it.
                Join me in this journey where I try to turn complex tech talk into something everyone can understand. 📚✨
            </p>

            {
                Array.isArray(posts) && posts.map((post) => <PostCard key={post.id} data={post} />)
            }
        </div>
    )
}

export default RecentArticles