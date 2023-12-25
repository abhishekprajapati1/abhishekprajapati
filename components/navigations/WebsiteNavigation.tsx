import Link from 'next/link'
import React from 'react'
import ThemeToggler from './ThemeToggler'

const WebsiteNavigation = () => {
    return (
        <nav className='flex items-center justify-between'>
            <ul className='flex items-center gap-4'>
                <li>
                    <Link href="/">home</Link>
                </li>
                <li>
                    <Link href="/work">work</Link>

                </li>
                <li>
                    <Link href="/blog">blog</Link>

                </li>
                <li>
                    <Link href="/interests">interests</Link>
                </li>
            </ul>
            <ThemeToggler />
        </nav>
    )
}

export default WebsiteNavigation