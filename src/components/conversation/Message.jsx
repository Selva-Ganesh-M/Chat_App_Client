import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes'

const Message = ({ menu }) => {
    return (
        <Box p={2} >
            <Stack gap={3} >
                {
                    Chat_History.map((item, index) => {
                        switch (item.type) {
                            case "divider":
                                return (
                                    <Timeline item={item} key={index} />
                                )

                            default:
                                // handle diff types of msg
                                switch (item.subtype) {
                                    case "img":
                                        return <MediaMsg item={item} key={index} menu={menu} />
                                    case "doc":
                                        return <DocMsg item={item} key={index} menu={menu} />
                                    case "link":
                                        return <LinkMsg item={item} key={index} menu={menu} />
                                    case "reply":
                                        return <ReplyMsg item={item} key={index} menu={menu} />
                                    default:
                                        // this runs only if the item.subtype is null
                                        // text msg
                                        return <TextMsg item={item} key={index} menu={menu} />
                                }
                        }
                    })
                }
            </Stack>
        </Box>
    )
}

export default Message