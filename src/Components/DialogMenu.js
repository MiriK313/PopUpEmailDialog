import { Avatar, Button, Dialog, DialogTitle, IconButton, List, ListItem, ListItemAvatar, ListItemText, TableCell } from "@material-ui/core";
import Exit from '@material-ui/icons/Cancel'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    dialog: {
        marginLeft: '60%',
        marginTop: '15%',
    },
    title: {
        display: "flex",
        justifyContent: 'space-between'
    },
}));

function SimpleDialog(props) {
    const classes = useStyles();
    const emails = ['username@gmail.com', 'user02@gmail.com'];

    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open} className={classes.dialog}>
            <div className={classes.title}>
                <DialogTitle >Email List
                </DialogTitle>
                <IconButton onClick={handleClose}>
                    <Exit />
                </IconButton>
            </div>

            <List sx={{ pt: 0 }}>
                {emails.map((email) => (
                    <ListItem button key={email}>
                        <ListItemText primary={email} />
                    </ListItem>
                ))}
            </List>
        </Dialog >
    );
}

export default SimpleDialog;