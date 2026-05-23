import React, { useEffect, useState } from 'react'

import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from '@chakra-ui/react'

import api from '../services/api'

function TaskMonitoring() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const res = await api.get('/admin/alltasks')
      setTasks(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/admin/deletetask/${id}`)
      fetchTasks()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box p={6}>

      <Heading mb={6}>Task Monitoring</Heading>

      <Table variant='simple'>

        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>User</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>

        <Tbody>

          {tasks.map((el) => (
            <Tr key={el._id}>

              <Td>{el.title}</Td>
              <Td>{el.description}</Td>
              <Td>{el.createdBy?.name}</Td>

              <Td>
                <Button
                  colorScheme='red'
                  onClick={() => handleDelete(el._id)}
                >
                  Delete
                </Button>
              </Td>

            </Tr>
          ))}

        </Tbody>

      </Table>
    </Box>
  )
}

export default TaskMonitoring
