import { Stack, Box } from '@mui/material'
import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Timeline } from './MsgTypes'
import Message from './Message'


const Conversation = () => {

    return (

        // overall container
        <Stack height={"100vh"} maxHeight={"100vh"} width={"100%"} >

            {/* header */}
            <Header />

            {/* section - message flow  `````````````````````````````````````````````````` */}
            <Box sx={{ flexGrow: 1, overflowY: "scroll" }} >
                <Message />
            </Box>

            {/* footer */}
            <Footer />

        </Stack>
    )
}

export default Conversation