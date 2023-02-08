import { Menu, MenuItem, Stack } from '@mui/material'
import { DotsThreeVertical } from 'phosphor-react'
import React from 'react'
import { Message_Menu_Items } from '../../data'

const MessageOptions = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <DotsThreeVertical
                size={20}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu

                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onBlur={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Stack spacing={1}>
                    {
                        Message_Menu_Items.map((item, index) => (
                            <MenuItem onClick={handleClose} key={index} >{item.title}</MenuItem>
                        ))
                    }
                </Stack>

            </Menu>
        </>
    )
}

export default MessageOptions