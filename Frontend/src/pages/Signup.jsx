import React, { useState } from "react";

import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const toast = useToast();

  const navigate = useNavigate();

  const handleSignup = async () => {

    try {

      await api.post("/users/signIn", {
        name,
        email,
        pass,
      });

      toast({
        title: "Signup Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/login");

    } catch (error) {

      toast({
        title: "Signup Failed",
        description:
          error.response?.data || "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

    }
  };

  return (
    <Box
      maxW="400px"
      mx="auto"
      mt="60px"
      p={8}
      boxShadow="lg"
      borderRadius="15px"
    >

      <Heading textAlign="center" mb={6}>
        Signup
      </Heading>

      <VStack spacing={4}>

        <Input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Enter Password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <Button
          width="100%"
          colorScheme="blue"
          onClick={handleSignup}
        >
          Signup
        </Button>

        <Text>

          Already have an account?{" "}

          <Link
            to="/login"
            style={{
              color: "blue",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>

        </Text>

      </VStack>

    </Box>
  );
}

export default Signup;