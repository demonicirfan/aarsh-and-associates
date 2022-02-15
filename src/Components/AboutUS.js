import { Center, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const AboutUS = props => {
  return (
    <Container maxW={'full'}>
      <VStack my={{ base: '2rem', md: '4rem' }} ref={props.reference}>
        <VStack spacing="2rem" my={{ base: '2rem', md: '4rem' }} mx="auto">
          <Heading>About Us</Heading>
          <Center
            maxW={'4xl'}
            flexDir={'column'}
            textAlign={'center'}
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight={'300'}
            gap="2rem"
          >
            <Text>
              Founded in 2011, M/s A A R S H & Associates, is a Chandigarh based
              Chartered Accountancy Firm providing a multitude of tax,
              accounting and legal advisory services.{' '}
            </Text>
            <Text>
              Since constitution, our firm is focused on providing quality
              services and support to its clients following the code of conduct
              and ethics of the profession.
              <br />
              <br />
              Our mission is to provide one stop platform for professional
              services to our clients in the various matters relating to Direct
              Tax, Indirect Tax, Accounting Services, Company Law Matters, and
              all other related areas.
            </Text>
          </Center>
        </VStack>
      </VStack>
    </Container>
  );
};

export default AboutUS;
