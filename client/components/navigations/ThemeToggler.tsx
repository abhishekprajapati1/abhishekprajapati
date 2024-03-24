'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import MoonIcon from '../icons/MoonIcon'

const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="">
            <MoonIcon className={`w-[25px] h-[25px] ${theme === "light" ? 'text-gray-400' : "text-yellow-500"}`} />
        </button>
    )
}

export default ThemeToggler;