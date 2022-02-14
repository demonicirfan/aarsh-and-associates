import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Center,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import Button from './Button';
import Logo from './Logo';

const Navbar = props => {
  const [newFinalFocusRef, setNewFinalFocusRef] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollToDiv = ref => window.scrollTo(0, ref.current.offsetTop);
  const btnRef = React.useRef();

  return (
    <Container maxW="8xl" bg="brand.300" color="white">
      <HStack justifyContent={'space-between'} p={'1rem'}>
        <Logo />
        <HStack
          spacing="2rem"
          display={{ base: 'none', lg: 'flex' }}
          fontWeight="500"
          fontSize={'md'}
        >
          <Box as="button" onClick={() => scrollToDiv(props.aboutReference)}>
            <Center minW={'6rem'}>About Us</Center>
          </Box>
          <Box as="button" onClick={() => scrollToDiv(props.contactReference)}>
            <Center minW={'6rem'}>Contact Us</Center>
          </Box>
          <Button />
        </HStack>
        <Box
          display={{ base: 'block', lg: 'none' }}
          as={'button'}
          ref={btnRef}
          onClick={onOpen}
        >
          <RiMenu4Line size={28} />
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={newFinalFocusRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="#EBC351">
            <DrawerCloseButton m="0.5rem" />
            <DrawerBody>
              <Box
                as="button"
                onClick={() => {
                  setNewFinalFocusRef(props.aboutReference);
                  onClose();
                  scrollToDiv(props.aboutReference);
                }}
              >
                <Center minW={'6rem'}>About Us</Center>
              </Box>
              <Box
                as="button"
                onClick={() => {
                  setNewFinalFocusRef(props.contactReference);
                  onClose();
                  scrollToDiv(props.contactReference);
                }}
              >
                <Center minW={'6rem'}>Contact Us</Center>
              </Box>
            </DrawerBody>
            <DrawerFooter>
              <Logo />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Container>
  );
};

export default Navbar;
