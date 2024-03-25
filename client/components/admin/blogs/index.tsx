'use client';
import ENDPOINTS from '@/lib/endpoints';
import useFetch from '@/lib/hooks/useFetch';
import React from 'react'

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
        <div>
            {
                data.map((d: any) => (
                    <div key={d.id} className='w-full p-6 rounded-xl shadow-xl'>
                        {d.title}
                    </div>
                ))
            }
        </div>
    )
}

export default Blogs