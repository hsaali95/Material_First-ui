import { Box } from '@mui/system'
import React from 'react'

const TestMui = () => {
  return (
    // <Box sx={{color:{xs:'red',sm:'yellow',md:'powderblue',lg:'black',xl:'brown'}}}>
    //     Ahmed 
    // </Box>
    <Box sx={{color:{lg:'red',md:'blue'},display:{sm:'none',md:'block'}}}>
        i am a good boy
    </Box>
  )
}

export default TestMui