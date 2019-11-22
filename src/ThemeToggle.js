import React from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const containerStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme === 'dark' ? 'black' : 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div style={containerStyle}>
      <button onClick={toggleTheme}>Toggle the Theme</button>
    </div>
  )
}