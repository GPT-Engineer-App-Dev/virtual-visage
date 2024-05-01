import { Box, Flex, Text, VStack, Input, Button, Heading, useBreakpointValue, Container, Link } from '@chakra-ui/react';
import { FaEnvelope, FaUser, FaPhone, FaBars } from 'react-icons/fa';

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Box as="header" w="full" p={4} shadow="sm">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Portfolio</Heading>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link p={2} href="#welcome">Welcome</Link>
              <Link p={2} href="#about">About</Link>
              <Link p={2} href="#contact">Contact</Link>
            </Box>
            <Box display={{ base: 'block', md: 'none' }}>
              <FaBars />
            </Box>
          </Flex>
        </Box>
        <Flex direction="column" align="center" justify="center" flexGrow={1} id="welcome">
          <Heading as="h2" size="2xl" mb={2}>Welcome!</Heading>
          <Text fontSize="xl" mb={4}>Discover the world of modern web design.</Text>
        </Flex>
        <Box p={4} bg="gray.100" id="about">
          <Heading size="lg">About Me</Heading>
          <Text mt={2}>I am a passionate web developer with a knack for creating visually appealing and functional websites.</Text>
        </Box>
        <Box p={4} bg="gray.200" id="contact">
          <Heading size="lg">Contact</Heading>
          <VStack spacing={3} mt={2}>
            <Flex align="center">
              <FaUser />
              <Input placeholder="Your Name" ml={2} />
            </Flex>
            <Flex align="center">
              <FaEnvelope />
              <Input placeholder="Your Email" ml={2} />
            </Flex>
            <Flex align="center">
              <FaPhone />
              <Input placeholder="Your Phone" ml={2} />
            </Flex>
            <Button colorScheme="blue" alignSelf="flex-end">Send</Button>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;