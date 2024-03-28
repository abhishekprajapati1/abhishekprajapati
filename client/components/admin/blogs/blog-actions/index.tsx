'use client'
import ArchiveIcon from '@/components/icons/ArchiveIcon';
import EditIcon from '@/components/icons/EditIcon';
import SpinnerIcon from '@/components/icons/SpinnerIcon';
import React from 'react'
import RemoveButton from './RemoveButton';
import Link from 'next/link';

interface BlogAction {
  blog_id: string;
}

const BlogAction: React.FC<BlogAction> = ({ blog_id }) => {
  let isArchiving, isDrafting = false;


  return (
    <div className='flex items-center flex-grow md:justify-end gap-2 flex-wrap mt-4 md:mt-0'>
      <Link href={`/admin/blogs/edit?blog_id=${blog_id}`} type='button' className='icon-button bg-blue-50 text-blue-600'>
        <EditIcon />
      </Link>
      <button disabled={true} type='button' className='icon-button bg-orange-50 text-orange-400'>
        {isArchiving && <SpinnerIcon />}
        {!isArchiving && <ArchiveIcon />}
      </button>
      <RemoveButton blog_id={blog_id} />
    </div>
  )
}

export default BlogAction