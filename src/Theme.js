import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: '#FAFAFA',
      200: '#EBC351',
      300: '#03233A',
      4: '#C7EDE4',
      5: '#000000',
    },
  },
  fonts: {
    body: 'Roboto',
  },
  styles: {
    global: {
      'html, body': {
        // fontFamily: 'sans',
        background: '#FAFAFA',
        color: '#0A0A0A',
      },
    },
  },
});

export default theme;
