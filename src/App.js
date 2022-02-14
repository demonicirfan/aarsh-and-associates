import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Center,
  Grid,
  Heading,
  Image,
  Button,
  Stack,
} from '@chakra-ui/react';
import NavBar from './Components/Navbar';
import theme from './Theme';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Footer from './Components/Footer';
import AboutUS from './Components/AboutUS';
import Profile from './profile.jpeg';
import ContactUS from './Components/ContactUS';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  colors: { ...theme.colors, primary: '#ffffff' },
};

function App() {
  const [readMore, setReadMore] = React.useState(0);

  const aboutUsRef = React.useRef();
  const contactUsRef = React.useRef();

  return (
    <ChakraProvider theme={newTheme}>
      <Center w="full" bg="brand.300" flexDirection="column">
        <NavBar aboutReference={aboutUsRef} contactReference={contactUsRef} />
        <Hero />
      </Center>
      <Center maxW="8xl" mx="auto">
        <Services />
      </Center>
      <AboutUS />
      <Center
        ref={aboutUsRef}
        flexDirection={'column'}
        bg={'brand.300'}
        color="white"
        w="100%"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          py={'4rem'}
          gap={{ base: '0.5rem', md: '2rem', lg: '4rem' }}
        >
          <Image
            src={Profile}
            alt="profile"
            w={{ base: '280px', md: '340px', lg: '360px' }}
            alignSelf={{ base: 'center', lg: 'start' }}
            py="2rem"
          />
          <VStack
            alignItems={{ base: 'start', md: 'start' }}
            spacing={'1rem'}
            justify={{ base: 'start', md: 'center' }}
            p="2rem"
          >
            <Heading fontSize={{ base: 'xl', lg: '3xl' }}>
              CA. Rachit Goyal
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }}>Managing Partner</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              A reputed Tax Consultant in Chandigarh
              <br />
              (B.com, F.C.A, LL.B)
            </Text>
            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              maxW="30rem"
              fontWeight={'300'}
              textAlign={{ base: 'start', md: 'start' }}
            >
              CA Rachit Goyal is the managing partner of the firm since
              incorporation and has a strong legal and tax background. He has a
              wide experience of over 10 years in this profession, with his
              expertise in Direct Tax.
              <br />
              <br />
              He has experience of conducting internal, statutory, concurrent,
              revenue and Information system Audits of various banks and PSUs.
              <Box
                as="button"
                w="fit-content"
                bg="#edf2f726"
                p="0.1rem 0.5rem"
                rounded="full"
                onClick={() => {
                  setReadMore(!readMore);
                  console.log(readMore);
                }}
                alignSelf={'end'}
              >
                {''}
                {readMore ? '...Read More' : ''}
              </Box>
              {!readMore && (
                <Text
                  fontSize={{ base: 'xs', md: 'sm' }}
                  maxW="60rem"
                  fontWeight={'300'}
                  textAlign={{ base: 'start', md: 'start' }}
                >
                  <br />
                  <br />
                  He believes in providing personalized services to the clients
                  which are best suited to their business needs and has advised
                  significant number of client of various matters ranging from
                  designing business structures, tax structures, etc.
                  <br />
                  <br />
                  He is currently the fellow member of Institute of Chartered
                  Accountants of India and also the Chairman at NICASA,
                  Chandigarh Branch of NIRC of ICAI for the term 2019-22. He is
                  also a certified Indirect Tax and Concurrent Audit Expert from
                  ICAI. He is also an active member at various business and
                  social clubs.
                  <Box
                    as="button"
                    w="fit-content"
                    bg="#edf2f726"
                    p="0.1rem 0.5rem"
                    rounded="full"
                    onClick={() => {
                      setReadMore(!readMore);
                      console.log(readMore);
                    }}
                    alignSelf={'end'}
                  >
                    {readMore ? '' : '...Read Less'}
                  </Box>
                </Text>
              )}
            </Text>
          </VStack>
        </Stack>
      </Center>
      <ContactUS reference={contactUsRef} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
