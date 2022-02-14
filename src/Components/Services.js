import { Center, Heading, Image, Text, VStack, Wrap } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import One from '../Images/one.png';
import Two from '../Images/two.png';
import Three from '../Images/three.png';
import Four from '../Images/four.png';
import Five from '../Images/five.png';
import Six from '../Images/six.png';
import { motion } from 'framer-motion';

const MotionCenter = motion(Center);
const MotionVStack = motion(VStack);

const Data = [
  {
    title: 'Start my Business',
    body: 'Considering registrations company in India and that too in a fast and hassle-free',
    img: One,
  },
  {
    title: 'Business and Tax Registration',
    body: 'In the era of globalization entrepreneurship is the need of the',
    img: Two,
  },
  {
    title: 'GST',
    body: 'GST is a huge reform in India post-independence',
    img: Three,
  },
  {
    title: 'Intellectual property Rights',
    body: 'A trademark is typically a name, word. phrase symbol design image.',
    img: Four,
  },
  {
    title: 'Startup Advisory',
    body: 'We understand that for  a startup the primary focus is to grow now',
    img: Five,
  },
  {
    title: 'Foreign Investment in India',
    body: 'Foreign investment in India is primarily regulated by the FDI policy',
    img: Six,
  },
];

const Services = () => {
  return (
    <VStack
      maxW={{ base: '90vw', lg: '60vw' }}
      mx="auto"
      my="6rem"
      gap={{ base: '2rem', md: '4rem' }}
      color="brand.300"
    >
      <MotionCenter
        maxW="2xl"
        flexDirection={'column'}
        gap={{ base: '1rem', md: '2rem' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay: 2, ease: 'easeInOut' },
        }}
      >
        <Heading
          textAlign="center"
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        >
          We are committed to delivering top Quality Financial Services
        </Heading>
        <Text
          textAlign="center"
          maxW="2xl"
          px="1rem"
          fontSize={{ base: 'xs', md: 'sm' }}
          fontWeight={'300'}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim
        </Text>
      </MotionCenter>
      <Wrap
        spacing={['4', '5', '6']}
        mx="auto"
        justify={'center'}
        align="center"
        my="2rem"
      >
        {Data.map(card => (
          <MotionVStack
            bg="white"
            p="2rem 1.8rem "
            alignItems={'start'}
            spacing="0.8rem"
            minH={{ base: '14rem', lg: '16rem' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 2.5, ease: 'easeInOut' },
            }}
          >
            <Image my="0.4rem" src={card.img} />
            <Text fontWeight={'500'} fontSize={{ base: 'sm', lg: 'md' }}>
              {card.title}
            </Text>
            <Text
              fontWeight={'300'}
              fontSize={{ base: 'xs', lg: 'sm' }}
              maxW={{ base: '12rem', lg: '14rem', xl: '18rem' }}
            >
              {card.body}
            </Text>
          </MotionVStack>
        ))}
      </Wrap>
    </VStack>
  );
};

export default Services;
