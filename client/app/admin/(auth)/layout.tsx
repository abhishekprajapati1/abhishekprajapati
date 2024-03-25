import { checkToken } from '@/lib/server-helpers';
import { WrapperProps } from '@/lib/types'
import { redirect } from 'next/navigation';
import { FC } from 'react'

const AuthLayout: FC<WrapperProps> = ({ children }) => {
    const isLoggedIn = checkToken();
    if (isLoggedIn) redirect("/admin");

    return (
        <>
            {children}
        </>
    )
}

export default AuthLayout