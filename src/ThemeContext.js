// @flow
import React, { type Node } from 'react';

type ThemeValue = 'light' | 'dark';

type ThemeContextValue = {
  theme: ThemeValue,
  toggleTheme: () => void;
};

export const ThemeContextInitialValue: ThemeContextValue = {
  theme: 'dark',
  toggleTheme: () => {}
}

export const ThemeContext = React.createContext<ThemeContextValue>(ThemeContextInitialValue);

type ThemeContextContainerProps = {|
  children: Node
|};

export const ThemeContextContainer = ({ children }: ThemeContextContainerProps) => {
  const [theme, setTheme] = React.useState<ThemeValue>(ThemeContextInitialValue.theme);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}