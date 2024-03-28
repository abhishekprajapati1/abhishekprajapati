'use client';
import React from 'react'
import LogoutButton from './LogoutButton'
import useFetch from '@/lib/hooks/useFetch';
import ENDPOINTS from '@/lib/endpoints';

const Navbar = () => {
    const { data, isLoading } = useFetch({ endpoint: ENDPOINTS.DETAILS });


    if (isLoading) {
        return (
            <div className='flex content-wrapper items-center h-[60px] bg-white shadow-lg shadow-[#00000005] justify-between sticky top-0'>
                <div className='h-6 w-1/3 rounded-md bg-gray-200 animate-pulse' />
                <div className='h-6 w-6 rounded-md bg-gray-200 animate-pulse' />
            </div>
        )
    }


    return (
        <div className='flex content-wrapper items-center h-[60px] bg-white shadow-lg shadow-[#00000005] justify-between sticky top-0'>
            <div>
                Hello {data?.name},
            </div>
            <div>
                <LogoutButton />
            </div>
        </div>
    )
}

export default Navbar