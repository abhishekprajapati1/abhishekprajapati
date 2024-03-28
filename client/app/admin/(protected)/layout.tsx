import Navbar from '@/components/admin/navigations/Navbar';
import { protect } from '@/lib/server-helpers'
import { WrapperProps } from '@/lib/types'
import React, { FC } from 'react'

const AdminLayout: FC<WrapperProps> = ({ children }) => {
    protect();

    return (
        <div className='h-full overflow-auto'>
            <Navbar />
            <div className='py-8 h-full content-wrapper'>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout