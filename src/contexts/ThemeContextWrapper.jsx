import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './themeContext.js';

const ThemeContextWrapper = (props) => {

    const [theme, setTheme] = useState(themes.dark);

    const changeTheme = (theme) => {
        setTheme(theme);
    }

    useEffect(()=>{
        switch (theme) {
            case themes.light:
                document.body.classList.add('theme-light');
                document.getElementById('toggle-mode').children[0].classList.remove('fa-sun');
                document.getElementById('toggle-mode').children[0].classList.add('fa-moon');
                document.getElementById('toggle-mode').setAttribute('title', 'Enable dark mode');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('theme-light');
                document.getElementById('toggle-mode').children[0].classList.remove('fa-moon');
                document.getElementById('toggle-mode').children[0].classList.add('fa-sun');
                document.getElementById('toggle-mode').setAttribute('title', 'Enable light mode');
                break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme:theme, changeTheme: changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextWrapper