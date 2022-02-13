import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import NavBar from './Components/Navbar';
import theme from './Theme';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  colors: { ...theme.colors, primary: '#ffffff' },
};

function App() {
  return (
    <ChakraProvider theme={newTheme}>
      <NavBar />
    </ChakraProvider>
  );
}

export default App;
