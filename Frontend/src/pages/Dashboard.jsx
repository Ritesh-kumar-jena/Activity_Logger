import React, { useEffect, useState } from 'react'

import {
  Box,
  Grid,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'

import api from '../services/api'

function Dashboard() {

  const [users, setUsers] = useState([])
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {

      const userRes = await api.get('/admin/allusers')

      const taskRes = await api.get('/admin/alltasks')

      setUsers(userRes.data)
      setTasks(taskRes.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box p={6}>

      <Heading mb={8}>Admin Dashboard</Heading>

      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(3,1fr)',
        }}
        gap={6}
      >

        <Stat p={6} boxShadow='md' borderRadius='10px'>
          <StatLabel>Total Users</StatLabel>
          <StatNumber>{users.length}</StatNumber>
        </Stat>

        <Stat p={6} boxShadow='md' borderRadius='10px'>
          <StatLabel>Total Tasks</StatLabel>
          <StatNumber>{tasks.length}</StatNumber>
        </Stat>

        <Stat p={6} boxShadow='md' borderRadius='10px'>
          <StatLabel>Pending Tasks</StatLabel>
          <StatNumber>{tasks.length}</StatNumber>
        </Stat>

      </Grid>
    </Box>
  )
}

export default Dashboard
