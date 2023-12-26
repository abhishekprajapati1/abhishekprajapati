import React from 'react'
import GoArrowIcon from './icons/GoArrowIcon';
import Link from 'next/link';
import { PostType } from '@/lib/types';
import dayjs from 'dayjs';

const PostCard: React.FC<{ data: PostType }> = ({ data }) => {

    return (
        <Link href={`/blog/${data.id}`} className='group p-4 border rounded flex items-center justify-between cursor-pointer'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-gray-600 font-semibold'>{data.title}</h3>
                <p className='text-base text-gray-400'>{dayjs(data.published).format("MMM DD, YYYY")}</p>
            </div>
            <GoArrowIcon className='w-[20px] h-[20px] transition-transform ease-linear group-hover:-rotate-12' />
        </Link>
    )
}

export default PostCard