import {
  Container,
  Stack,
  Text,
  VStack,
  Center,
  Flex,
  Box,
  Image,
  Heading,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import CircleType from 'circletype';
import { motion } from 'framer-motion';
import Meet from '../Images/meet.png';
import Button from './Button';

const MotionCenter = motion(Center);
const MotionBox = motion(Box);

const Hero = () => {
  useEffect(() => {
    const circleType = new CircleType(document.getElementById('circularText'));
    circleType.radius(30).dir(-1);
  }, []); //empty array will run only once (after the initial render)

  return (
    <Container
      px={{ base: '0', md: '1rem', lg: '1.8rem' }}
      display={'flex'}
      flexDir={{ base: 'column', lg: 'row' }}
      justifyContent="space-between"
      maxW={{ base: '90vw', lg: '8xl' }}
      bg="brand.300"
      color="white"
      py="5rem"
      gap="4rem"
    >
      <MotionCenter
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: 'easeInOut' },
        }}
      >
        <VStack
          spacing={{ base: '1rem', lg: '2rem' }}
          alignItems={'left'}
          m="auto"
          maxW={'clamp(20rem,80vw, 46rem)'}
          overflow="none"
        >
          <Heading
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '7xl' }}
            letterSpacing="-1"
            lineHeight={'short'}
            //  w={'clamp(20rem, 80vw, 46rem)'}
            //  maxW="fit-content"
          >
            Lorem ipsum dolor sit amet sectetur adipiscing{' '}
          </Heading>
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight={{ base: '300', md: '400' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim
          </Text>
          <Button />
        </VStack>
      </MotionCenter>

      <Flex flexDir={'column'} alignItems={'start'} w={'fit-content'} mx="auto">
        <MotionBox
          zIndex={'1'}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.5, ease: 'easeInOut' },
          }}
        >
          <Image
            src={Meet}
            alt="hero"
            w={{ base: '60vw', md: '400px', lg: '400px' }}
            h={{ base: '300px', md: '500px' }}
            objectFit={'cover'}
            overflow={'clip'}
            my={{ base: '40px', md: '60px' }}
            //boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(85, 69, 154) 0px 30px 60px -30px'
            zIndex={'1'}
          />
          <Box>
            <Box
              _before={{
                content: `""`,
                position: 'absolute',
                //top: 'clamp(50px, 80vw, 66vh)',
                width: '150px',
                height: '150px',
                background: '#EBC351',
                filter: 'blur(80px)',
                zIndex: '-1',
                transform: 'translateY(-150px)',
              }}
            />
          </Box>
        </MotionBox>

        <MotionCenter
          zIndex={'1'}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 1, ease: 'easeInOut' },
          }}
        >
          <MotionCenter
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, type: 'tween' }}
            bgColor={'white'}
            rounded={'full'}
            w={{ base: '80px', md: '140px' }}
            h={{ base: '80px', md: '140px' }}
            position="absolute"
            zIndex={'2'}
            alignSelf="end"
          >
            <Text
              fontWeight={'700'}
              fontSize={{ base: '7px', md: '13px' }}
              textTransform={'uppercase'}
              className="text"
              textColor={'gray.800'}
              id="circularText"
            >
              AARSH & ASSOCIATES • AARSH & ASSOCIATES •{' '}
              {/* {props.roundedText}{' '}•{' '} {props.roundedText}{' '}•{' '} */}
            </Text>
          </MotionCenter>
        </MotionCenter>
      </Flex>
    </Container>
  );
};

export default Hero;
