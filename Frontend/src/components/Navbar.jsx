import {
  Flex,
  Box,
  Button,
  HStack,
  Heading,
} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'

import React, { useContext } from 'react'

import { AuthContext } from '../contex/AuthContextProvider'

function Navbar() {

  const navigate = useNavigate()

  const {
    isLogin,
    setIsLogin,
    isAdmin,
  } = useContext(AuthContext)

  const handleLogout = () => {

    localStorage.removeItem('token')

    setIsLogin(false)

    navigate('/login')
  }

  return (
    <Flex
      bg='blue.500'
      color='white'
      px={6}
      py={4}
      align='center'
      justify='space-between'
    >

      <Heading size='md'>Activity Logger</Heading>

      <HStack spacing={6}>

        <Box cursor='pointer' onClick={() => navigate('/')}>
          Home
        </Box>

        <Box cursor='pointer' onClick={() => navigate('/about')}>
          About
        </Box>

        <Box cursor='pointer' onClick={() => navigate('/contactUs')}>
          Contact
        </Box>

         {isLogin && (
        <Box cursor="pointer" onClick={() => navigate("/mydashboard")}>
          My Dashboard
        </Box>
        )}
        {isAdmin && (
          <>
            <Box cursor='pointer' onClick={() => navigate('/dashboard')}>
              Dashboard
            </Box>

            <Box cursor='pointer' onClick={() => navigate('/users')}>
              Users
            </Box>

            <Box cursor='pointer' onClick={() => navigate('/tasks')}>
              Tasks
            </Box>
          </>
        )}

      </HStack>

      {
        isLogin ? (
          <Button onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button onClick={() => navigate('/login')}>
            Login
          </Button>
        )
      }

    </Flex>
  )
}

export default Navbar
