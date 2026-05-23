import React from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <Box>

      {/* Hero Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: 6, md: 20 }}
        py={20}
        bg="gray.50"
      >

        <VStack
          align="start"
          spacing={6}
          maxW="600px"
        >

          <Heading
            size="2xl"
            color="blue.600"
          >
            Activity Logger Dashboard
          </Heading>

          <Text
            fontSize="lg"
            color="gray.600"
          >
            Manage users, monitor tasks, and track activities
            with a secure role-based dashboard system.
          </Text>

          <Button
            colorScheme="blue"
            size="lg"
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>

        </VStack>

        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt="dashboard"
          borderRadius="20px"
          w={{ base: "100%", md: "450px" }}
          mt={{ base: 10, md: 0 }}
        />

      </Flex>

      {/* Features Section */}
      <Container maxW="1200px" py={20}>

        <Heading
          textAlign="center"
          mb={12}
          color="blue.500"
        >
          Features
        </Heading>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(3,1fr)",
          }}
          gap={8}
        >

          <Box
            p={8}
            boxShadow="lg"
            borderRadius="15px"
            textAlign="center"
          >
            <Heading size="md" mb={4}>
              User Management
            </Heading>

            <Text color="gray.600">
              Admin can manage users, roles, and account status.
            </Text>
          </Box>

          <Box
            p={8}
            boxShadow="lg"
            borderRadius="15px"
            textAlign="center"
          >
            <Heading size="md" mb={4}>
              Task Monitoring
            </Heading>

            <Text color="gray.600">
              Track all tasks and monitor user activities easily.
            </Text>
          </Box>

          <Box
            p={8}
            boxShadow="lg"
            borderRadius="15px"
            textAlign="center"
          >
            <Heading size="md" mb={4}>
              Secure Authentication
            </Heading>

            <Text color="gray.600">
              JWT authentication with role-based route protection.
            </Text>
          </Box>

        </Grid>

      </Container>

    </Box>
  );
}

export default Home;