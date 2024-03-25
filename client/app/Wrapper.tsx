'use client';
import { M_PLUS_Code_Latin } from 'next/font/google'
import { WrapperProps } from '@/lib/types';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react'



const mpcl = M_PLUS_Code_Latin({ subsets: ['latin'] })

const Wrapper: FC<WrapperProps> = ({ children }) => {
    const pathname = usePathname();

    if (pathname.startsWith("/admin")) {
        return (
            <body className={`w-full h-screen overflow-auto sm:w-[90%] mx-auto ${mpcl.className}`}>
                {children}
            </body>
        )
    }

    return (
        <body className={`w-full h-screen overflow-auto sm:w-[90%] md:w-[60%] lg:w-[732px] mx-auto px-6 py-[58px] ${mpcl.className}`}>
            {children}
        </body>
    )
}

export default Wrapper