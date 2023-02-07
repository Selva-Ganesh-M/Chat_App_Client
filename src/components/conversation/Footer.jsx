import { Box, IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react'
import React from 'react'

// styled inputBase
const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px"
    }
}))

const Footer = () => {
    const theme = useTheme()
    return (
        <>
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
        </>
    )
}

export default Footer