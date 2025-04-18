import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from '@/theme/index';
import { ThemeMode } from '@/types/index';
import { useRouter } from 'next/router';

const THEMES_KEYS: { [key in ThemeMode]: Theme } = {
  light: LightTheme,
  dark: DarkTheme
};

const LIGHT_THEME: ThemeMode = 'light';
const DARK_THEME: ThemeMode = 'dark';

const getActiveTheme = (themeMode: ThemeMode) => THEMES_KEYS[themeMode];

interface IThemeContextProps {
  theme: ThemeMode;
  themeMui: Theme;
  toggleTheme: () => void;
  changeTheme: (theme: ThemeMode) => void;
  changeThemeMui: (theme: Theme) => void;
}

export const ThemeCustomContext = createContext({} as IThemeContextProps);

interface IThemeContextProviderProps {
  children: React.ReactNode;
  emotionCache: EmotionCache;
}

export const ThemeContextProvider: React.FC<IThemeContextProviderProps> = ({ children, emotionCache }) => {
  // Boolean(window.matchMedia(PREFERS_SCHEME_COLOR).matches);

  // const router = useRouter();

  const isDarkMode = useCallback(() => false, []);
  const getTheme = useCallback(() => (isDarkMode() ? DARK_THEME : LIGHT_THEME), [isDarkMode]);
  const [activeTheme, setActiveTheme] = useState<Theme>(THEMES_KEYS[getTheme()]);
  const [selectedTheme, setSelectedTheme] = useState<ThemeMode>(getTheme());
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    let themeCurrent: ThemeMode = selectedTheme;

    if (isMounted.current) {
      themeCurrent = getTheme();
      isMounted.current = false;
    }

    const themeRoot = getActiveTheme(themeCurrent);
    // if (router.pathname.includes('/dashboard')) {
    //   themeRoot.palette.background.default = '#F9F9FB';
    // }

    setActiveTheme(themeRoot);
  }, [getTheme, selectedTheme]);

  const toggleTheme = useCallback(() => {
    let theme: ThemeMode = LIGHT_THEME;
    if (selectedTheme === LIGHT_THEME) theme = DARK_THEME;
    setSelectedTheme(theme);
  }, [selectedTheme]);

  const changeTheme = (theme: ThemeMode) => {
    setSelectedTheme(theme);
  };

  const changeThemeMui = (theme: Theme) => {
    setActiveTheme({ ...theme });
  };

  const memorizedValue = useMemo(
    () => ({
      theme: selectedTheme,
      toggleTheme,
      changeTheme,
      themeMui: activeTheme,
      changeThemeMui
    }),
    [selectedTheme, toggleTheme]
  );

  return (
    <ThemeCustomContext.Provider value={memorizedValue}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={activeTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </ThemeCustomContext.Provider>
  );
};

export const useThemeContextProvider = () => {
  const context = useContext(ThemeCustomContext);

  if (context === undefined) {
    throw new Error('useThemeContextProvider must be used within a ThemeContextProvider');
  }

  return context;
};
