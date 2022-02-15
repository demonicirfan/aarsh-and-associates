import { Box } from '@chakra-ui/react';
import React from 'react';

const Logo = () => {
  return (
    <Box
      as="button"
      onClick={() => {
        window.location = 'https://www.aarshassociates.in/';
      }}
      fontWeight="600"
      fontSize={{ base: 'sm', md: 'md', lg: 'xl' }}
    >
      A A R S H & ASSOCIATES
    </Box>
  );
};

export default Logo;
