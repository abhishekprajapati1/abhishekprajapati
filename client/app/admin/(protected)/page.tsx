import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
    return (
        <div className='overflow-auto h-full'>
            <div className='grid grid-cols-12 gap-4 w-full'>
                <Link href="/admin/blogs/new" className='col-span-6 md:col-span-4 lg:col-span-3 grid place-content-center h-40 shadow-xl shadow-[#00000005] rounded-xl hover:scale-110 transition-all ease-linear'>
                    Create
                </Link>
                <Link href="/admin/tags" className='col-span-6 md:col-span-4 lg:col-span-3 grid place-content-center h-40 shadow-xl shadow-[#00000005] rounded-xl hover:scale-110 transition-all ease-linear'>
                    Tags
                </Link>
                <Link href="/admin/blogs" className='col-span-6 md:col-span-4 lg:col-span-3 grid place-content-center h-40 shadow-xl shadow-[#00000005] rounded-xl hover:scale-110 transition-all ease-linear'>
                    All Blogs
                </Link>
            </div>
        </div>
    )
}

export default DashboardPage