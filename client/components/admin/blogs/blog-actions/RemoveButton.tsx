import SpinnerIcon from '@/components/icons/SpinnerIcon';
import TrashIcon from '@/components/icons/TrashIcon';
import useRemoveBlog from '@/lib/mutations/blogs/useRemoveBlog';
import React from 'react';
interface RemoveButtonProps {
    blog_id: string;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ blog_id }) => {
    const { mutate, isPending: isDeleting } = useRemoveBlog(blog_id);
    return (
        <button disabled={isDeleting} onClick={() => mutate()} type='button' className='icon-button bg-red-50 text-red-600'>
        {isDeleting && <SpinnerIcon />}
        {!isDeleting && <TrashIcon />}
      </button>
    )
}

export default RemoveButton