"use client";
import { TOKEN_TO_REFRESH, refreshToken } from '@/lib/api';
import { TOKEN_VALIDITY } from '@/lib/constants';
import { WrapperProps } from '@/lib/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';


import React, { useEffect, useState } from 'react'

const Provider: React.FC<WrapperProps> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());

    const refreshAuthToken = () => {
        const tokenMeta = window.localStorage.getItem(TOKEN_VALIDITY.auth_token);
        const token: TOKEN_TO_REFRESH = tokenMeta && JSON.parse(tokenMeta);
        if (token) {
            const timeToRefresh = token.life - Date.now();
            if (timeToRefresh <= 60000 && timeToRefresh > 0) {
                refreshToken(TOKEN_VALIDITY.auth_token);
            }
        }
    }


    useEffect(() => {
        const id = setInterval(refreshAuthToken, 1000);
        return () => clearInterval(id);
    }, []);


    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Provider