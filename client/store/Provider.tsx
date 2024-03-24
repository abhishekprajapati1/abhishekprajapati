"use client";
import { WrapperProps } from '@/lib/types';
import { ThemeProvider } from 'next-themes';


import React from 'react'

const Provider: React.FC<WrapperProps> = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Provider