import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import Allroutes from './components/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Allroutes/>
     <Button colorScheme="blue" mt="10px">
        Chakra UI Working
      </Button>
    </>
  )
}

export default App
