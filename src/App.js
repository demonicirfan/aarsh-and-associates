import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Center,
  Grid,
} from '@chakra-ui/react';
import NavBar from './Components/Navbar';
import theme from './Theme';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Footer from './Components/Footer';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  colors: { ...theme.colors, primary: '#ffffff' },
};

function App() {
  return (
    <ChakraProvider theme={newTheme}>
      <Center w="full" bg="brand.300" flexDirection="column">
        <NavBar />
        <Hero />
      </Center>
      <Center maxW="8xl" mx="auto">
        <Services />
      </Center>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
