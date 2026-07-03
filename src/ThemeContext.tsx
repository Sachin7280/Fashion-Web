import { createContext, useContext } from 'react';
import { Theme, themes } from './themes';

export const ThemeContext = createContext<{theme: Theme}>({ theme: themes[0] });
export const useTheme = () => useContext(ThemeContext);
