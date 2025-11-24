import { createContext, useContext, useEffect, useState } from 'react';


const ThemeContext = createContext();

export const ContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme' || 'light'))

    useEffect(() => {
        const body = document.body;
        document.body.classList.remove('bg-white', 'bg-white')
        if (theme === 'light') {
            body.classList.add('bg-white');
        } else {
            body.classList.add('bg-white')
        }
        
        document.body.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme])
    const ToggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)