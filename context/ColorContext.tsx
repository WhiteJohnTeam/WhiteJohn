import React, { createContext, useState } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ColorContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <ColorContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ColorContext.Provider>
    );
}

export default ColorContext;