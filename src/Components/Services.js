import {
  Center,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Wrap,
} from '@chakra-ui/react';
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
    title: 'Auditing Services',
    points: [
      'Internal Audit',
      'Statutory Audit',
      'Income Tax Audit',
      'GST Audit',
      'All types of Bank Audit',
    ],
    img: One,
  },
  {
    title: 'Income Tax Services',
    points: [
      'Income Tax Return for Individual, HUF, Partnership Firms, LLPs/ AOPs, & Companies',
      'Income Tax Notice Reply',
      'Appeal Filing',
      'Refund of Income Tax',
      'Litigation/ Representation & Other matters',
    ],
    img: Two,
  },
  {
    title: 'Business set up services',
    points: [
      'Incorporation of all types of Companies & LLPs.',
      'Annual Filing of Companies/ LLPs and other compliances with ROC',
      'Representations before the MCA authorities for any notices issued, or otherwise. ',
      'Conversion of Private limited company to LLP.',
    ],
    img: Three,
  },
  {
    title: 'Indirect Tax Services',
    points: [
      'GST/VAT Registration',
      'Monthly/ Quarterly/ Annual Filing of GST Returns',
    ],
    img: Four,
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
          Our Services
        </Heading>
        <Text
          textAlign="center"
          maxW="2xl"
          px="1rem"
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight={'300'}
        >
          M/s{' '}
          <Text as="span" fontWeight="400">
            A A R S H & Associates
          </Text>
          , Chartered Accountants has emerged as a specialized legal and
          taxation firm providing a wide range of services to our clients with a
          motive of fulfilling every requirement of our clients
        </Text>
      </MotionCenter>
      <Wrap
        spacing={['4', '6', '8']}
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
            spacing="1rem"
            minH={{ base: '24rem', md: '24rem', lg: '24rem' }}
            minW={{ base: '16rem', md: '18rem', lg: '24rem' }}
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
            <UnorderedList
              fontWeight={'300'}
              fontSize={{ base: 'xs', lg: 'sm' }}
              maxW={{ base: '12rem', lg: '14rem', xl: '18rem' }}
            >
              {card.points.map(point => (
                <ListItem mx="0.6rem">{point}</ListItem>
              ))}
            </UnorderedList>
          </MotionVStack>
        ))}
      </Wrap>
    </VStack>
  );
};

export default Services;
