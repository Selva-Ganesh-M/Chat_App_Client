import { Box, Divider, Stack, Typography } from '@mui/material'
import { useTheme } from "@mui/material/styles"
import React from 'react'


// text message
// handles [incoming, outgoing]
const TextMsg = ({ item }) => {
    const theme = useTheme()
    return (
        <>
            <Stack direction={"row"} justifyContent={item.incoming ? "flex-start" : "flex-end"}>
                <Box
                    p={1.5}
                    sx={{ backgroundColor: item.incoming ? theme.palette.background.paper : theme.palette.primary.main }}
                    borderRadius={1.5}
                >
                    <Typography variant={"body2"} color={item.incoming ? theme.palette.text : "#fff"} >
                        {item.message}
                    </Typography>
                </Box>
            </Stack>
        </>
    )
}


// reply to a msg
const ReplyMsg = ({ item }) => {
    const theme = useTheme()
    return <Stack direction={"row"} justifyContent={item.incoming ? "flex-start" : "flex-end"}>
        <Box
            p={1.5}
            sx={{ backgroundColor: item.incoming ? theme.palette.background.paper : theme.palette.primary.main }}
            borderRadius={1.5}
        >
            <Stack gap={2} >
                {/* current msg */}
                <Box p={1} sx={{ backgroundColor: "#fff", color: theme.palette.text.secondary, font: "bold", borderRadius: 1.5 }} >
                    <Typography variant='body2' color={theme.palette.text}>
                        {item.message}
                    </Typography>
                </Box>
                {/* reply msg */}
                <Box>
                    <Typography variant='body2' color={item.incoming ? theme.palette.text : "#fff"}>
                        this is the reply
                    </Typography>
                </Box>
            </Stack>
        </Box>
    </Stack>
}

// media-msg
// handles [docs, images, links, reply]
const MediaMsg = ({ item }) => {
    const theme = useTheme()
    return (
        <Stack direction={"row"} justifyContent={item.incoming ? "flex-start" : "flex-end"}>
            <Box
                p={1.5}
                sx={{ backgroundColor: item.incoming ? theme.palette.background.default : theme.palette.primary.main }}
                borderRadius={1.5}
                width="max-content"
            >
                <Stack spacing={1}>
                    <img src={item.img} alt="msg-img" style={{ borderRadius: "12px", maxWidth: "210px" }} />
                    <Box
                        p={1.5}
                        sx={{ backgroundColor: item.incoming ? theme.palette.background.paper : theme.palette.primary.main }}
                        borderRadius={1.5}
                        width={"max-content"}
                    >
                        <Typography variant={"body2"} color={theme.palette.mode === "light" ? theme.palette.text : "#fff"}>
                            {item.message}
                        </Typography>
                    </Box>
                </Stack>
            </Box >
        </Stack >
    )
}

// timeline
const Timeline = ({ item }) => {
    const theme = useTheme()
    return (
        <Stack direction={"row"} alignItems={"center"} >
            <Divider width={"46%"} />
            <Typography variant={"caption"} sx={{ color: theme.palette.text }} >
                {item.text}
            </Typography>
            <Divider width={"46%"} />
        </Stack>
    )
}

export { Timeline, TextMsg, MediaMsg, ReplyMsg }