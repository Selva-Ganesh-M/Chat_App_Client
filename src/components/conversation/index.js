import { faker } from '@faker-js/faker'
import { styled, useTheme } from "@mui/material/styles"
import { Stack, Box, Badge, IconButton, Avatar, Typography, Divider, TextField, InputAdornment } from '@mui/material'
import { ArrowDown, CaretDown, LinkSimple, MagnifyingGlass, PaperPlane, PaperPlaneTilt, Phone, Smiley, VideoCamera } from 'phosphor-react'
import React from 'react'
import { StyledBadge } from '../Badge/StyledBadge'


// styled inputBase
const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px"
    }
}))

const Conversation = () => {

    const theme = useTheme()

    return (

        // overall container
        <Stack height={"100%"} maxHeight={"100vh"} width={"100%"} >

            {/* section - header '''''''''''''''''''''''''''''''''''''''''' */}
            <Box width={"100%"} sx={{ backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper }} p={2}>

                {/* header container */}
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ width: "100%", height: "100%" }} >

                    {/* LEFT: image + name & status */}
                    <Stack direction={"row"} gap={2}>

                        {/* part - image */}
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar src={faker.image.avatar()} />
                        </StyledBadge>

                        {/* part - name + status */}
                        <Stack>

                            {/* name */}
                            <Typography variant={"subtitle2"} >{faker.name.fullName()}</Typography>

                            {/* status */}
                            <Typography variant={"caption"}  >Online</Typography>

                        </Stack>

                    </Stack>

                    {/* RIGHT - Group */}
                    <Stack direction={"row"} gap={3}>

                        {/* left - 3 icons */}
                        <IconButton>
                            <VideoCamera />
                        </IconButton>
                        <IconButton>
                            <Phone />
                        </IconButton>
                        <IconButton>
                            <MagnifyingGlass />
                        </IconButton>

                        {/* divider */}
                        <Divider orientation='vertical' height={"100%"} flexItem />

                        {/* right */}
                        <IconButton>
                            <CaretDown />
                        </IconButton>

                    </Stack>

                </Stack>

            </Box>

            {/* section - messages  `````````````````````````````````````````````````` */}
            <Box sx={{ flexGrow: 1 }} >

            </Box>

            {/* section - footer    `````````````````````````````````` */}
            <Box width={"100%"} sx={{ backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper }} p={2}>
                {/* container */}
                <Stack direction={"row"} gap={3}>

                    {/* input */}
                    <StyledInput placeholder={'send a message...'} fullWidth variant='filled' InputProps={{
                        disableUnderline: true,
                        // Adornment: are things that you can add to the start and end of an input InputBase
                        startAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <LinkSimple />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <Smiley />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }} />

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

        </Stack>
    )
}

export default Conversation