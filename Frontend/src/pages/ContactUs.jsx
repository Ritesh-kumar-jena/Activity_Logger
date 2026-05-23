import React, { useState } from "react";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";

function ContactUs() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toast = useToast();

  const handleSubmit = () => {

    toast({
      title: "Message Sent Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container maxW="700px" py={20}>

      <Box
        p={10}
        boxShadow="lg"
        borderRadius="20px"
      >

        <Heading
          textAlign="center"
          mb={8}
          color="blue.500"
        >
          Contact Us
        </Heading>

        <VStack spacing={6}>

          <FormControl>

            <FormLabel>Name</FormLabel>

            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </FormControl>

          <FormControl>

            <FormLabel>Email</FormLabel>

            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </FormControl>

          <FormControl>

            <FormLabel>Message</FormLabel>

            <Textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

          </FormControl>

          <Button
            colorScheme="blue"
            width="100%"
            onClick={handleSubmit}
          >
            Send Message
          </Button>

        </VStack>

      </Box>

    </Container>
  );
}

export default ContactUs;