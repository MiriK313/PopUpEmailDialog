import React, { useState } from "react";
import Email from '@material-ui/icons/Email'
import DialogMenu from './DialogMenu'
import { Fab, IconButton } from "@material-ui/core";

const emails = ['username@gmail.com', 'user02@gmail.com', 'user01@gmail.com'];


function MyCard(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (

        <Fab  >
            <IconButton onClick={handleClickOpen} color='primary'>
                <Email />
            </IconButton>
            <DialogMenu
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </Fab >

    );
}

export default MyCard;