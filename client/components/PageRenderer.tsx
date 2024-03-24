'use client';
import { WrapperProps } from '@/lib/types';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react'

export interface PageRendererProps extends WrapperProps {
    pathnames: string[];
    behaviour?: "include" | "exclude";
}

const PageRenderer: FC<PageRendererProps> = ({ children, pathnames, behaviour = "exclude" }) => {

    const pathname = usePathname();


    if (behaviour === "include") {
        if (pathnames.includes(pathname)) {
            return <>{children}</>;
        } else {
            return <></>;
        }
    } else if (behaviour === "exclude") {
        if (!pathnames.includes(pathname)) {
            return <>{children}</>;
        } else {
            return <></>;
        }
    }

    return (
        <div className="p-4 border border-destructive text-destructive">
            Please provide props in PageRenderer component.
        </div>
    )
}

export default PageRenderer;