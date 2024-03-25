'use client';
import ENDPOINTS from '@/lib/endpoints';
import useFetch from '@/lib/hooks/useFetch';
import React from 'react'

const Tags = () => {
    const { data, isLoading } = useFetch({ endpoint: ENDPOINTS.TAGS });

    if (isLoading || !data) {
        return (
            <div className='flex items-center'>
                loading...
            </div>
        )
    }

    return (
        <div className='grid grid-cols-12 gap-4'>
            {
                Array.isArray(data) && data.length > 0 && data.map(d => (
                    <div key={d.id} className='h-40 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 grid place-content-center shadow-xl rounded-xl'>
                        {d.name}
                    </div>
                ))
            }
            {
                Array.isArray(data) && data.length <= 0 && (
                    <div className='w-full h-full grid place-content-center'>
                        No tags yet. create some to see here...
                    </div>
                )
            }
        </div>
    )
}

export default Tags