import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Container maxW="8xl" bg="brand.300" color="white">
      <HStack justifyContent={'space-between'} p={'1rem'}>
        <Logo />
        <HStack spacing="2rem" display={{ base: 'none', lg: 'flex' }}>
          <Text>AboutUs</Text>
          <Text>ContactUs</Text>
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
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="#EBC351">
            <DrawerCloseButton m="0.5rem" />
            <DrawerBody>
              <VStack
                spacing="1.8rem"
                my="4rem"
                alignItems={'right'}
                color={'black'}
                fontWeight="500"
              >
                <Text>About Us</Text>
                <Text>Contact Us</Text>
                <Box w="fit-content" p="0.4rem 0.8rem" bg="white">
                  Button
                </Box>
              </VStack>
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
