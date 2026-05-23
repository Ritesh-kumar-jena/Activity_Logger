import React from "react";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

function About() {

  return (
    <Container maxW="900px" py={20}>

      <VStack spacing={8} align="start">

        <Heading
          color="blue.500"
          size="2xl"
        >
          About Project
        </Heading>

        <Text
          fontSize="lg"
          color="gray.600"
          lineHeight="2"
        >
          Activity Logger is a full-stack web application built
          using React.js, Node.js, Express.js, and MongoDB.
        </Text>

        <Text
          fontSize="lg"
          color="gray.600"
          lineHeight="2"
        >
          The system provides secure authentication, role-based
          access control, task management, and activity tracking
          for users and administrators.
        </Text>

        <Text
          fontSize="lg"
          color="gray.600"
          lineHeight="2"
        >
          Admin users can manage users, monitor tasks, and access
          analytics dashboards while normal users can manage
          their own tasks securely.
        </Text>

        <Box
          bg="blue.50"
          p={8}
          borderRadius="15px"
          w="100%"
        >

          <Heading
            size="md"
            mb={4}
            color="blue.600"
          >
            Technologies Used
          </Heading>

          <Text>• React.js</Text>
          <Text>• Chakra UI</Text>
          <Text>• Node.js</Text>
          <Text>• Express.js</Text>
          <Text>• MongoDB</Text>
          <Text>• JWT Authentication</Text>

        </Box>

      </VStack>

    </Container>
  );
}

export default About;