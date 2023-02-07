import { Stack, Box } from '@mui/material'
import React from 'react'
import Header from "./Header"
import Footer from "./Footer"


const Conversation = () => {

    return (

        // overall container
        <Stack height={"100%"} maxHeight={"100vh"} width={"100%"} >

            {/* header */}
            <Header />

            {/* section - message flow  `````````````````````````````````````````````````` */}
            <Box sx={{ flexGrow: 1 }} >

            </Box>

            {/* footer */}
            <Footer />

        </Stack>
    )
}

export default Conversation