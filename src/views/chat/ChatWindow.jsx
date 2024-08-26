import React from 'react';
import { List, ListItem, ListItemText, Divider, TextField, Grid, Fab, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatWindow = ({ messages }) => {
    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <List sx={{ flexGrow: 1, overflowY: 'auto', maxHeight: 'calc(100% - 70px)' }}>
                {messages.map((message, index) => (
                    <ListItem key={index}>
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align={message.align} primary={message.text} />
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align={message.align} secondary={message.time} />
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Grid container sx={{ p: 2 }}>
                <Grid item xs={11}>
                    <TextField label="Type Something" fullWidth size="small" />
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Fab color="primary" size="small">
                        <SendIcon />
                    </Fab>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChatWindow;
