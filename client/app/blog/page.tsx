import PostCard from '@/components/PostCard';
import { commonKeywords } from '@/lib/list';
import { IBlog, PostType } from '@/lib/types';
import { fetchAllPosts, fetchPosts } from '@/services/post';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Blog | Abhishek Prajapati',
    description: `Explore a collection of insightful and engaging articles on my blog page. Dive into the world of technology, development, and beyond as I share my experiences, insights, and perspectives. Stay informed, inspired, and join the conversation on the ever-evolving landscape of the digital realm.`,
    verification: {
        google: "UBW1X58fR9f4b1tUjStrdvJm6h_1CvFOTHkXEUgCi1w"
    },
    keywords: [...commonKeywords, 'Blogs Abhishek Prajapati', 'blog Abhishek Prajapati', "articles", "tech blogs", "technical blogs", "programming", "web development blogs", "best articles in web development"],
}


const BlogListingPage = async () => {
    const allPosts: IBlog[] | null = await fetchAllPosts();

    return (
        <main className='mt-14'>
            <div className='flex flex-col gap-8'>
                <h1 className='font-semibold text-2xl'>read my blog</h1>
                <div className='flex flex-col gap-6'>
                    {
                        Array.isArray(allPosts) && allPosts?.map((post) => <PostCard key={post.id} data={post} />)
                    }
                </div>
            </div>
        </main>
    )
}

export default BlogListingPage;