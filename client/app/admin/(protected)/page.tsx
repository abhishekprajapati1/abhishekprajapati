import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
    return (
        <div className='overflow-auto h-full py-4'>
            <div className='grid grid-cols-12'>
                <Link href="/admin/blogs/new" className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 grid place-content-center w-40 h-40 shadow-xl shadow-gray-100 rounded-xl'>
                    Create
                </Link>
                <Link href="/admin/tags" className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 grid place-content-center w-40 h-40 shadow-xl shadow-gray-100 rounded-xl'>
                    Tags
                </Link>
                <Link href="/admin/blogs" className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 grid place-content-center w-40 h-40 shadow-xl shadow-gray-100 rounded-xl'>
                    All Blogs
                </Link>
            </div>
        </div>
    )
}

export default DashboardPage