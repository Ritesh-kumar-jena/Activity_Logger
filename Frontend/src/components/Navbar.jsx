import { Flex, Box, Button, HStack, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate=useNavigate()
  return (
    <Flex
      bg="blue.500"
      color="white"
      px={6}
      py={4}
      align="center"
      justify="space-between"
    >
    
      <Heading size="md">Activity_Logger</Heading>

      {/* Nav Links */}
      <HStack spacing={6}>
        <Box 
        cursor="pointer"
         onClick={()=>{
              navigate("/")
            }}>
                Home
                </Box>
        <Box 
        cursor="pointer"
         onClick={()=>{
              navigate("/about")
            }}>
            About
            </Box>
        <Box 
        cursor="pointer"
         onClick={()=>{
              navigate("/contactUs")
            }}>
                ContactUs
                </Box>
      </HStack>

      {/* Login Button */}
      <Button 
      colorScheme="whiteAlpha" 
      variant="outline"
      onClick={()=>{
              navigate("/login")
            }}
      >
        Login
      </Button>
    </Flex>
  );
}

export default Navbar;