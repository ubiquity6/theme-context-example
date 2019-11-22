import React, { type Node } from 'react';
import { ThemeContextContainer } from './ThemeContext';
import { ThemeToggle } from './ThemeToggle';

function App(): Node {
  return (
    <ThemeContextContainer>
      <ThemeToggle />
    </ThemeContextContainer>
  );
}

export default App;
