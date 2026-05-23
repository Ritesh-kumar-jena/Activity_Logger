import React, { useEffect, useState } from 'react'

import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Heading,
} from '@chakra-ui/react'

import api from '../services/api'

function UserManagement() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const res = await api.get('/admin/allusers')
      setUsers(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/admin/deleteuser/${id}`)
      fetchUsers()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box p={6}>

      <Heading mb={6}>User Management</Heading>

      <Table variant='simple'>

        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Status</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>

        <Tbody>

          {users.map((el) => (
            <Tr key={el._id}>

              <Td>{el.name}</Td>
              <Td>{el.email}</Td>
              <Td>{el.role}</Td>
              <Td>{el.status}</Td>

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

export default UserManagement
