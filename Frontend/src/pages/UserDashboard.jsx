import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";

import api from "../services/api";

function UserDashboard() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tasks, setTasks] = useState([]);

  const toast = useToast();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    try {

      const res = await api.get("/tasks/mytasks");

      setTasks(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async () => {

    try {

      await api.post("/tasks/create", {
        title,
        description,
      });

      toast({
        title: "Task Created",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setTitle("");
      setDescription("");

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {

    try {

      await api.delete(`/tasks/delete/${id}`);

      toast({
        title: "Task Deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box p={6}>

      <Heading mb={8}>
        My Dashboard
      </Heading>

      {/* Create Task */}
      <Box
        p={6}
        boxShadow="md"
        borderRadius="15px"
        mb={10}
      >

        <Heading size="md" mb={4}>
          Create Task
        </Heading>

        <VStack spacing={4}>

          <Input
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button
            colorScheme="blue"
            width="100%"
            onClick={createTask}
          >
            Create Task
          </Button>

        </VStack>

      </Box>

      {/* My Tasks */}
      <Heading size="lg" mb={6}>
        My Tasks
      </Heading>

      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing={6}
      >

        {tasks.map((task) => (

          <Box
            key={task._id}
            p={6}
            boxShadow="md"
            borderRadius="15px"
          >

            <Heading size="md" mb={3}>
              {task.title}
            </Heading>

            <Text mb={4}>
              {task.description}
            </Text>

            <Flex gap={3}>

              <Button
                colorScheme="red"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </Button>

            </Flex>

          </Box>

        ))}

      </SimpleGrid>

    </Box>
  );
}

export default UserDashboard;