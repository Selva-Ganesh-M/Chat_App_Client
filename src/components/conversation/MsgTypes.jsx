import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material'
import { useTheme } from "@mui/material/styles"
import { DownloadSimple, Image } from 'phosphor-react'
import React from 'react'
import MessageOptions from './MessageOptions'


// document message
const DocMsg = ({ item }) => {
    const theme = useTheme()
    return (
        <Stack direction={"row"} justifyContent={item.incoming ? "flex-start" : "flex-end"}>
            <Box
                p={1.5}
                sx={{ backgroundColor: item.incoming ? theme.palette.background.paper : theme.palette.primary.main }}
                borderRadius={1.5}
            >
                {/* inner wrapper */}
                <Stack spacing={2} >
                    {/* doc preview and download */}
                    <Stack
                        direction={"row"}
                        alignItems="center"
                        justifyContent={"space-between"}
                        spacing={2}
                        sx={{ backgroundColor: theme.palette.background.paper, borderRadius: "10px" }}>
                        {/* img */}
                        <Image size={48} />
                        {/* name */}
                        <Typography variant={"caption"}>
                            {"Abstract.png"}
                        </Typography>
                        {/* download icon */}
                        <IconButton>
                            <DownloadSimple />
                        </IconButton>

                    </Stack>
                    {/* actual msg */}
                    <Typography variant={"body2"} color={item.incoming ? theme.palette.text : "#fff"}>
                        {item.message}
                    </Typography>
                </Stack>
            </Box>

            {/* menu */}
            <MessageOptions />
        </Stack>
    )
}

// text message
// handles [incoming, outgoing]
const TextMsg = ({ item }) => {
    const theme = useTheme()
    return (
        <>
            <Stack direction={"row"} justifyContent={item.incoming ? "flex-start" : "flex-end"}>
                {/* message */}
                <Box
                    p={1.5}
                    sx={{ backgroundColor: item.incoming ? theme.palette.background.paper : theme.palette.primary.main }}
                    borderRadius={1.5}
                >
                    <Typography variant={"body2"} color={item.incoming ? theme.palette.text : "#fff"} >
                        {item.message}
                    </Typography>
                </Box>

                {/* menu toggler */}
                <MessageOptions />

                {/* menu */}

            </Stack>
        </>
    )
}

// link msg
const LinkMsg = ({ item }) => {
    const theme = useTheme()

    return (
        <Stack direction={"row"} justifyContent={item.incoming ? "flex-start" : "flex-end"}>
            <Box
                p={1.5}
                sx={{ backgroundColor: item.incoming ? theme.palette.background.paper : theme.palette.primary.main }}
                borderRadius={1.5}
            >
                {/* inner items wrapper */}
                <Stack gap={2} alignItems={"start"} sx={{ backgroundColor: theme.palette.background.paper }} >
                    {/* image preview */}
                    <img src={item.preview} alt="link-img" style={{ maxHeight: 210, borderRadius: "12px" }} />
                    <Stack spacing={2}>
                        <Typography variant={"subtitle2"}>Creating Chat App</Typography>
                        <Typography
                            variant={"subtitle2"}
                            component={Link}
                            to={"//https://www.youtube.com"}
                            sx={{ color: theme.palette.primary.main }}
                        >www.youtube.com</Typography>
                    </Stack>

                    {/* actual message */}
                    <Typography variant="body2" sx={{ color: item.incoming ? theme.palette.text : "#fff" }}>
                        This is the message
                    </Typography>
                </Stack>
            </Box>
            {/* menu */}
            <MessageOptions />
        </Stack>
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
                <Box p={1} sx={{ backgroundColor: theme.palette.mode === "light" ? theme.palette.background.default : theme.palette.background.paper, color: theme.palette.text.secondary, font: "bold", borderRadius: 1.5 }} >
                    <Typography variant='body2' color={theme.palette.text}>
                        {item.message}
                    </Typography>
                </Box>
                {/* reply msg */}
                <Box>
                    <Typography
                        variant='body2'
                        color={item.incoming ? theme.palette.text : "#fff"}
                    >
                        this is the reply
                    </Typography>
                </Box>
            </Stack>
        </Box>
        {/* menu */}
        <MessageOptions />
    </Stack>
}

// media-msg
// handles images
const MediaMsg = ({ item }) => {
    const theme = useTheme()
    return (
        <Stack direction={"row"} justifyContent={item.incoming ? "flex-start" : "flex-end"}>

            {/* actual msg */}
            <Box
                p={1.5}
                sx={{ backgroundColor: item.incoming ? theme.palette.background.default : theme.palette.primary.main }}
                borderRadius={1.5}
                width="max-content"
            >
                <Stack spacing={1}>

                    {/* image */}
                    <img src={item.img} alt="msg-img" style={{ borderRadius: "12px", maxHeight: "210px" }} />

                    {/* msg content */}
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

            {/* menu */}
            <MessageOptions />
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

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg }