import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Logo from './Logo';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={'none'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'brand.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={'brand.300'} color={'white'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={6}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Logo />
        <Link
          href="https://irfanasif.me"
          _hover={{
            color: 'brand.200',
          }}
        >
          Developed by Irfan Asif
        </Link>
        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label={'Twitter'}
            href={'https://twitter.com/RachitGoyalChd'}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={'Facebook'}
            href={'https://www.facebook.com/carachitgoyal'}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={'https://instagram.com/ca.rachit_goyal?utm_medium=copy_link'}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={'Linkedin'}
            href={'https://www.linkedin.com/in/rachit-goyal-69a70b1aa'}
          >
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
