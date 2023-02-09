import { faker } from '@faker-js/faker'
import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { useTheme } from "@mui/material/styles"
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react'
import React from 'react'
import { useState } from 'react'
import Shortcuts from '../../components/Dilogues/Settings/Shortcuts'
import { useNeutralBg } from '../../hooks/useNeutralBg'

const Settings = () => {
    const theme = useTheme()
    const neutralBg = useNeutralBg()


    // #region : Shortcuts modal
    const [openShortcuts, setOpenShortcuts] = useState(false)

    const handleOpenShortcuts = () => {
        setOpenShortcuts(true)
    }
    const handleCloseShortcuts = () => {
        setOpenShortcuts(false)
    }
    //#endregion


    // const settings list
    const settingsList = [
        {
            key: 0,
            icon: <Bell size={20} />,
            title: "Notifications",
            onclick: () => { },
        },
        {
            key: 1,
            icon: <Lock size={20} />,
            title: "Privacy",
            onclick: () => { },
        },
        {
            key: 2,
            icon: <Key size={20} />,
            title: "Security",
            onclick: () => { },
        },
        {
            key: 3,
            icon: <PencilCircle size={20} />,
            title: "Theme",
            //   onclick: handleOpenTheme,
        },
        {
            key: 4,
            icon: <Image size={20} />,
            title: "Chat Wallpaper",
            onclick: () => { },
        },
        {
            key: 5,
            icon: <Note size={20} />,
            title: "Request Account Info",
            onclick: () => { },
        },
        {
            key: 6,
            icon: <Keyboard size={20} />,
            title: "Keyboard Shortcuts",
            onclick: handleOpenShortcuts,
        },
        {
            key: 7,
            icon: <Info size={20} />,
            title: "Help",
            onclick: () => { },
        },
    ];


    return (
        <>
            <Box width={"100%"} >
                {/* wrapper */}
                <Stack direction={"row"} width={"100%"}>
                    {/* left panel */}
                    <Box sx={{ height: "100vh", width: "320px", bgcolor: neutralBg, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" }}>
                        {/* wrapper */}
                        <Stack height={"100%"} spacing={5} padding={4} >

                            {/* header */}
                            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                <Typography variant={"h5"}>
                                    Settings
                                </Typography>
                                <IconButton>
                                    <CaretLeft />
                                </IconButton>
                            </Stack>

                            {/* profile */}
                            <Stack direction={"row"} spacing={2}>
                                <Avatar
                                    src={faker.image.people()}
                                    alt={faker.name.firstName()}
                                    sx={{ width: 64, height: 64 }}
                                />
                                <Stack justifyContent="center"  >
                                    <Typography variant={"h6"}>Selva Ganesh M</Typography>
                                    <Typography variant={"body2"} >Everything is relative</Typography>
                                </Stack>
                            </Stack>

                            {/* list of settings */}
                            <Stack spacing={2}>
                                {
                                    settingsList.map((item, index) => (
                                        <>
                                            <Stack
                                                direction={"row"}
                                                spacing={2}
                                                alignItems={"center"}
                                                key={item.key}
                                                onClick={item.onclick}
                                                sx={{ cursor: "pointer" }}
                                            >
                                                <IconButton >
                                                    {item.icon}
                                                </IconButton>
                                                <Typography variant={"body2"}>
                                                    {item.title}
                                                </Typography>
                                            </Stack>
                                            {
                                                settingsList.length === index + 1 ? null : (
                                                    <Divider flexItem width={"100%"} />
                                                )
                                            }

                                        </>
                                    ))
                                }
                            </Stack>

                            {/* popup dialogues */}
                            {
                                openShortcuts && (
                                    <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} />
                                )
                            }

                        </Stack>

                    </Box>
                    {/* right panel */}
                </Stack>
            </Box>
        </>
    )
}

export default Settings