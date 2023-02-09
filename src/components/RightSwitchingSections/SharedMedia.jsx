import { Box, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles"
import { ArrowLeft, X } from 'phosphor-react'
import { toggleSidebar, updateSidebarType } from '../../redux/slices/app.slice'
import { useDispatch } from 'react-redux'
import SharedImages from './sharedMediaTypes/SharedImages'
import { DOC_MESSAGES, LINK_MESSAGE } from '../../data'
import { DocMsg, LinkMsg } from '../conversation/MsgTypes'

const SharedMedia = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        // cotact info - wrapper
        <Box width={"320px"} height="100vh">

            {/* stop if you see this */}

            {/* container */}
            < Stack height="100%" width={"100%"}>

                {/* header */}
                < Box
                    sx={{
                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
                    }}
                    p={2}
                >
                    <Stack direction={"row"}
                        spacing={3}
                        alignItems={"center"}
                        width={"100%"}
                        justifyContent={"space-between"}
                        px={2}
                    >
                        {/* title */}
                        <Typography variant="article" >
                            Shared Media
                        </Typography>
                        {/* icon */}
                        <Stack alignItems={"center"} direction={"row"} >

                            {/* go back icon */}
                            <IconButton onClick={() => {
                                dispatch(updateSidebarType("CONTACT"))
                            }}>
                                <ArrowLeft />
                            </IconButton>

                            {/* close icon */}
                            <IconButton onClick={() => {
                                dispatch(toggleSidebar())
                                dispatch(updateSidebarType("CONTACT"))
                            }} >
                                <X />
                            </IconButton>
                        </Stack>
                    </Stack>
                </ Box>

                {/* body */}
                <Box width={"100%"} sx={{ flexGrow: 1, overflowY: "scroll", position: "relative" }}>

                    {/* static */}
                    <Box sx={{ width: '100%', bgcolor: 'background.paper', position: "sticky", top: "-1" }}>
                        <Tabs px={2} pt={2} value={value} onChange={handleChange} centered>
                            <Tab label="Media" />
                            <Tab label="Links" />
                            <Tab label="Docs" />
                        </Tabs>
                    </Box>

                    {/* switchable */}
                    <Box p={2} width={"100%"} >
                        {
                            (
                                () => {
                                    switch (value) {
                                        case 0:
                                            return <SharedImages />
                                        case 1:
                                            return (
                                                <Stack gap={2}>
                                                    {LINK_MESSAGE.map((item, index) => <LinkMsg item={item} key={index} />)}
                                                </Stack>
                                            )
                                        case 2:
                                            return (
                                                <Stack gap={2}>
                                                    {DOC_MESSAGES.map((item, index) => <DocMsg item={item} key={index} />)}
                                                </Stack>
                                            )
                                        default:
                                            break;
                                    }
                                }
                            )()
                        }
                    </Box>


                </Box>


            </Stack>
        </Box>
    )
}

export default SharedMedia