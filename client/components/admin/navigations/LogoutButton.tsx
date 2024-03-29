'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { deleteCookie, getCookies } from 'cookies-next'


const LogoutButton = () => {
    const router = useRouter();
    const logout = () => {
        try {
            const cookies = getCookies();
            for (let cookie in cookies) {
                deleteCookie(cookie);
            }
            router.refresh();
        } catch (error) {
            alert("Error while logging out.")
        }
    }

    return (
        <button onClick={() => logout()} type="button">Logout</button>
    )
}

export default LogoutButton