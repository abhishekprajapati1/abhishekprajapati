"use client";
import { WrapperProps } from '@/lib/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';


import React, { useState } from 'react'

const Provider: React.FC<WrapperProps> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default Provider