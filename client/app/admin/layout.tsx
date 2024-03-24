import { WrapperProps } from '@/lib/types'
import React, { FC } from 'react'

const AdminLayout: FC<WrapperProps> = ({ children }) => {
    return (
        <div className='h-full'>
            {children}
        </div>
    )
}

export default AdminLayout