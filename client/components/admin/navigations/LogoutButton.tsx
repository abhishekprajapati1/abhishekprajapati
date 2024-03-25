'use client';
import api from '@/lib/api';
import ENDPOINTS from '@/lib/endpoints';
import { useRouter } from 'next/navigation';
import React from 'react'


const LogoutButton = () => {
    const router = useRouter();
    const logout = async () => {
        try {
            await api.post(ENDPOINTS.LOGOUT);
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