'use client';
import ENDPOINTS from '@/lib/endpoints';
import useFetch from '@/lib/hooks/useFetch';
import React from 'react'
import BlogCard from './BlogCard';
import { IBlog } from '@/lib/types';

const Blogs = () => {
    const { data, isLoading } = useFetch({ endpoint: ENDPOINTS.BLOGS });

    if (isLoading || !data) {
        return (
            <div className='flex items-center h-full justify-center'>
                loading...
            </div>
        )
    }

    return (
        <div className='divide-y'>
            {
                data.map((d: IBlog) => (
                    <BlogCard key={d.id} {...d} />
                ))
            }
        </div>
    )
}

export default Blogs