'use client'
import { useEffect } from 'react';
import useLocalStorage from '@/lib/hooks/useLocalStorage';
import BulbIcon from '../icons/BulbIcon';

const ThemeToggler = () => {
    const { value: theme, updateValue: setTheme } = useLocalStorage({ name: "theme" });

    const toggleTheme = () => {
        const document = window?.document;
        if (document) {
            let htmlClasses = document.documentElement.classList;
            if (htmlClasses.contains("dark")) {
                htmlClasses.remove("dark");
                setTheme("light");
            } else {
                htmlClasses.add("dark");
                setTheme("dark");
            }
        }
    }

    useEffect(() => {
        if (!theme || theme === "light") {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    }, [theme]);

    return (
        <button type='button' className='icon-button dark:text-primary' onClick={toggleTheme}>
            <BulbIcon className={`w-[25px] h-[25px]`} />
        </button>
    )
}

export default ThemeToggler;