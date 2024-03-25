
import Tags from '@/components/admin/tags'
import CreateTag from '@/components/admin/tags/CreateTag'
import React from 'react'

const TagsPage = () => {


    return (
        <div className='h-full overflow-auto'>
            <CreateTag />
            <Tags />
        </div>
    )
}

export default TagsPage