import React from 'react'
import GoArrowIcon from './icons/GoArrowIcon';
import Link from 'next/link';
import { IBlog } from '@/lib/types';
import dayjs from 'dayjs';
import EyeIcon from './icons/EyeIcon';
import LikeIcon from './icons/LikeIcon';

const PostCard: React.FC<{ data: IBlog }> = ({ data }) => {

    return (
        <Link href={`/blog/${data.slug}`} className='group p-4 rounded flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between cursor-pointer'>
            <div className='flex flex-col gap-2 flex-grow'>
                <h3 className='font-semibold'>{data.title} <span><GoArrowIcon className='w-[20px] h-[20px] inline transition-transform ease-linear group-hover:-rotate-12' /></span></h3>
                <p className='text-base text-gray-400'>{dayjs(data.created_at).format("MMM DD, YYYY")}</p>
            </div>
            <div className='flex items-center h-full gap-2'>
                <div className='flex items-center gap-1 bg-black/5 rounded-xl py-1 px-2'>
                    <EyeIcon />
                    <span className='text-xs'>0</span>
                </div>
                <div className='flex items-center gap-1 bg-black/5 rounded-xl py-1 px-2'>
                    <LikeIcon />
                    <span className='text-xs'>0</span>
                </div>
            </div>
        </Link>
    )
}

export default PostCard