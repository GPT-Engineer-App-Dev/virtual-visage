import { Box, Flex, Text, Heading, Input, Button, VStack, FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaPhone, FaHome } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="lg">My Portfolio</Heading>
        <Flex>
          <Button variant="ghost" p={4}>Home</Button>
          <Button variant="ghost" p={4}>About</Button>
          <Button variant="ghost" p={4}>Contact</Button>
        </Flex>
      </Flex>
      <Flex direction="column" align="center" justify="center" h="90vh" bg="gray.100">
        <Heading>Welcome to My Portfolio</Heading>
        <Text mt={4}>Discover my world of web development and design.</Text>
      </Flex>
      <Flex p={8} direction="column" bg="white">
        <Heading size="lg" mb={6}>About Me</Heading>
        <Text fontSize="lg">
          I am a passionate web developer with a knack for creating visually appealing and functional websites.
          With a strong focus on user experience, I ensure that all my projects are accessible and enjoyable for everyone.
        </Text>
      </Flex>
      <Flex p={8} direction="column" bg="gray.200">
        <Heading size="lg" mb={6}>Contact Me</Heading>
        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message" />
          </FormControl>
          <Button colorScheme="blue" alignSelf="flex-end">Send Message</Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;