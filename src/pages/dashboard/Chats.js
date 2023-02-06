import { Box, IconButton, Stack, Typography, InputBase, Button, Divider, Avatar, Badge } from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { styled, alpha, useTheme } from "@mui/material/styles";
import { ChatList } from '../../data';
import { SimpleBarStyle } from '../../components/Scrollbar';

// sub-components

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const ChatElement = ({ name, id, img, msg, time, unread, online }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: "100%",
            backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
            padding: 2,
            borderRadius: 2
        }}>
            {/* chat container */}
            <Stack
                direction={"row"}
                sx={{ height: "100%", width: "100%" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={2}
            >
                {/* group - profile + chat */}
                <Stack direction="row" gap={2}>
                    {/* section - profile image */}
                    {
                        // condition: user online? show active badge
                        online ? (
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={img} />
                            </StyledBadge>
                        ) : (
                            <Avatar src={img} />
                        )
                    }

                    {/* section - chat */}
                    <Stack spacing={0.3}>
                        {/* part name */}
                        <Typography variant={"subtitle2"} >
                            {name}
                        </Typography>
                        <Typography variant={"caption"} >
                            {msg}
                        </Typography>
                    </Stack>
                </Stack>

                {/* section - details */}
                <Stack spacing={2} alignItems="center" >
                    <Typography sx={{ fontWeight: "600" }} variant={"caption"}>
                        {time}
                    </Typography>
                    <Badge color='primary' badgeContent={unread} sx={{ bottom: "5px", left: "7px" }}>
                    </Badge>
                </Stack>
            </Stack>

        </Box>
    )
}

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "100%",
    },
}));

// main-component
const Chats = () => {
    const theme = useTheme();
    return (
        // wrapper
        <Box
            sx={{
                backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                width: 320,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
            }}
        >
            {/* container */}
            <Stack spacing={2} sx={{ height: "100vh", padding: "16px 16px 0px" }}>
                {/* section - header */}
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant={"h5"} >
                        Chats
                    </Typography>
                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                </Stack>

                {/* section - search */}
                <Stack>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass sx={{ color: "#709CE6" }} />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder='Search...' />
                    </Search>
                </Stack>



                {/* section - archives header group */}
                <Stack spacing={1}>
                    {/* part - archives header */}
                    <Stack direction={"row"} alignItems={"center"}>
                        <IconButton>
                            <ArchiveBox />
                        </IconButton>
                        <Button>Archive</Button>
                    </Stack>

                    {/* part - divider */}
                    <Divider orientation='horizontal' sx={{ width: "100%" }} />
                </Stack>

                {/* wrapper: pinned + public messages */}
                <Stack spacing={2} sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}>
                    {/* custom scroll bar */}
                    {/* <SimpleBarStyle timeout={500} clickOnTrack={false}> */}
                    {/* section - pinned messages */}
                    <Stack direction={"column"} spacing={2}>
                        {/* title */}
                        <Typography variant={"subtitle2"} sx={{ color: "#676767" }}>
                            Pinned
                        </Typography>

                        <Stack spacing={1}>
                            {
                                ChatList.filter(item => item.pinned).map(item => (
                                    <ChatElement {...item} />
                                ))
                            }
                        </Stack>
                    </Stack>

                    {/* section - public messages */}
                    <Stack direction={"column"} spacing={2} pb={2}>
                        {/* title */}
                        <Typography variant={"subtitle2"} sx={{ color: "#676767" }}>
                            All Chats
                        </Typography>

                        <Stack spacing={1}>
                            {
                                ChatList.filter(item => !item.pinned).map(item => (
                                    <ChatElement {...item} />
                                ))
                            }
                        </Stack>
                    </Stack>
                    {/* </SimpleBarStyle> */}
                </Stack>


            </Stack>

        </Box>
    )
}

export default Chats