import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, Stack, Typography } from '@mui/material'
import React from 'react'



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const shortcuts = [
    {
        key: 0,
        title: "Mark as unread",
        combination: ["Cmd", "Shift", "U"],
    },
    {
        key: 1,
        title: "Mute",
        combination: ["Cmd", "Shift", "M"],
    },
    {
        key: 2,
        title: "Archive Chat",
        combination: ["Cmd", "Shift", "E"],
    },
    {
        key: 3,
        title: "Delete Chat",
        combination: ["Cmd", "Shift", "D"],
    },
    {
        key: 4,
        title: "Pin Chat",
        combination: ["Cmd", "Shift", "P"],
    },
    {
        key: 5,
        title: "Search",
        combination: ["Cmd", "F"],
    },
    {
        key: 6,
        title: "Search Chat",
        combination: ["Cmd", "Shift", "F"],
    },
    {
        key: 7,
        title: "Next Chat",
        combination: ["Cmd", "N"],
    },
    {
        key: 8,
        title: "Next Step",
        combination: ["Ctrl", "Tab"],
    },
    {
        key: 9,
        title: "Previous Step",
        combination: ["Ctrl", "Shift", "Tab"],
    },
    {
        key: 10,
        title: "New Group",
        combination: ["Cmd", "Shift", "N"],
    },
    {
        key: 11,
        title: "Profile & About",
        combination: ["Cmd", "P"],
    },
    {
        key: 12,
        title: "Increase speed of voice message",
        combination: ["Shift", "."],
    },
    {
        key: 13,
        title: "Decrease speed of voice message",
        combination: ["Shift", ","],
    },
    {
        key: 14,
        title: "Settings",
        combination: ["Shift", "S"],
    },
    {
        key: 15,
        title: "Emoji Panel",
        combination: ["Cmd", "E"],
    },
    {
        key: 16,
        title: "Sticker Panel",
        combination: ["Cmd", "S"],
    },
];

const Shortcuts = ({ open, handleClose }) => {

    return (
        <>
            <Dialog
                keepMounted
                fullWidth
                maxWidth={'md'}
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                sx={{ p: 4 }}
            >

                {/* title */}
                <DialogTitle>
                    Keyboard Shortcuts
                </DialogTitle>

                {/* content */}
                <DialogContent sx={{ mt: 3 }} >
                    <Grid container gap={2} justifyContent="center" >
                        {
                            shortcuts.map(item => (
                                <Grid xs={5} justifyContent="center" >
                                    <Stack direction={"row"} alignItems="center" justifyContent={"space-between"}>
                                        <Typography fz={14} variant="caption" >
                                            {item.title}
                                        </Typography>
                                        <Stack direction="row" gap={1} alignItems="center">
                                            {
                                                item.combination.map((item, index) => (
                                                    <Button key={index} disabled variant="contained">
                                                        {item}
                                                    </Button>
                                                ))
                                            }
                                        </Stack>
                                    </Stack>
                                </Grid>
                            ))
                        }
                    </Grid>
                </DialogContent>

                {/* actions */}
                <DialogActions>
                    <Button variant={"contained"} onClick={handleClose}>
                        Done
                    </Button>
                </DialogActions>

            </Dialog>
        </>
    )
}

export default Shortcuts