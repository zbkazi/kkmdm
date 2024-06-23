import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <NextThemesProvider attribute="class" defaultTheme="system">{children}</NextThemesProvider>;
};

export default ThemeProvider;
