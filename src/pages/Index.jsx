import { Box, Flex, Text, VStack, Input, Button, Heading, useBreakpointValue } from '@chakra-ui/react';
import { FaEnvelope, FaUser, FaPhone } from 'react-icons/fa';

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
        <Heading as="h1" size="2xl" mb={2}>Welcome!</Heading>
        <Text fontSize="xl" mb={4}>Discover the world of modern web design.</Text>
        <VStack spacing={4} align="stretch" maxW="lg" w="full">
          <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading size="lg">About Me</Heading>
            <Text mt={2}>I am a passionate web developer with a knack for creating visually appealing and functional websites.</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg">
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
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;