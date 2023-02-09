import React from "react";
const { Dialog, Slide, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } = require("@mui/material")

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const GeneralDilogue = ({ open, handleClose, question }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >

            {/* question */}
            <DialogTitle>{question}</DialogTitle>

            {/* details */}
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Please confirm. You can always revert this action in the settings.
                </DialogContentText>
            </DialogContent>

            {/* actions */}
            <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
        </Dialog>
    )
}