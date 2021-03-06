import { Box, Center } from '@chakra-ui/react';
import React from 'react';

const Button = props => {
  return (
    <Box
      as="button"
      p="0.5rem 1.4rem "
      bg="brand.200"
      maxW={'fit-content'}
      fontSize={{ base: 'sm', lg: 'md' }}
      _hover={{
        bg: '#DCA300',
      }}
      onClick={e => {
        window.location = 'mailto:aarsh.asso@gmail.com';
        e.preventDefault();
      }}
    >
      <Center minW={'6rem'} color="brand.300" fontWEight="500">
        <a href="mailto:aarsh.asso@gmail.com">{props.title}</a>
      </Center>
    </Box>
  );
};

export default Button;
