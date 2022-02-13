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
    <Container maxW="8xl">
      <HStack justifyContent={'space-between'} p={'1rem'}>
        <Logo />
        <HStack spacing="2rem" display={{ base: 'none', lg: 'flex' }}>
          <Text>AboutUs</Text>
          <Text>ContactUs</Text>
          <Box>Button</Box>
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
                spacing="2rem"
                my="4rem"
                alignItems={'right'}
                color={'black'}
                fontWeight="700"
              >
                <Text>About Us</Text>
                <Text>Contact Us</Text>
               <Button />
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
