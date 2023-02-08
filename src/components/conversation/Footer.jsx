import { Box, IconButton, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { PaperPlaneTilt } from 'phosphor-react'
import React from 'react'
import ChatInput from "../../components/Chat/ChatInput"
import data from "@emoji-mart/data"
import Picker from "@emoji-mart/react"



const Footer = () => {
    const theme = useTheme()
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = React.useState(false)
    return (
        <>
            {/* section - footer    `````````````````````````````````` */}
            <Box width={"100%"} sx={{ backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper }} p={2}>
                {/* container */}
                <Stack direction={"row"} gap={3} alignItems={"center"} width={"100%"}>

                    {/* chat input + floaters(emoji + file) */}
                    <Stack sx={{ flexGrow: 1 }}>
                        {/* emoji picker */}
                        {
                            isEmojiPickerOpen && (
                                <Box sx={{ position: "fixed", bottom: 81, right: 100 }}>
                                    <Picker theme={theme.palette.mode} data={data} onEmojiSelect={() => { }} />
                                </Box>
                            )
                        }
                        <ChatInput setIsEmojiPickerOpen={setIsEmojiPickerOpen} />
                    </Stack>

                    {/* send button */}
                    <Box sx={{ height: "48px", width: "48px", backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                        <Stack alignItems={"center"} justifyContent={"center"} height={"100%"} width={"100%"}>
                            <IconButton sx={{ color: "#fff" }} >
                                <PaperPlaneTilt />
                            </IconButton>
                        </Stack>
                    </Box>

                </Stack>
            </Box>
        </>
    )
}

export default Footer