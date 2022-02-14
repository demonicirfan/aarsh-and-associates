import { Box } from '@chakra-ui/react';
import React from 'react';

const Button = () => {
  return (
    <Box
      as="button"
      p="0.5rem 1.4rem "
      bg="brand.200"
      maxW={'fit-content'}
      fontSize={{ base: 'sm', lg: 'md' }}
    >
      Button
    </Box>
  );
};

export default Button;
