import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, TextField, Box } from '@mui/material';

const ChatSideBar = ({ onChatSelect }) => {
    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Avatar
                            alt="John Wick"
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                            sx={{ width: 40, height: 40, mr: 2 }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="John Wick" />
                </ListItem>
            </List>
            <Divider />
            <TextField label="Search" variant="outlined" size="small" sx={{ m: 1 }} />
            <Divider />
            <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
                {['Remy Sharp', 'Alice', 'Cindy Baker'].map((name, index) => (
                    <ListItem button key={name} onClick={() => onChatSelect(name)} sx={{ py: 1 }}>
                        <ListItemIcon>
                            <Avatar
                                alt={name}
                                src={`https://material-ui.com/static/images/avatar/${index + 1}.jpg`}
                                sx={{ width: 40, height: 40, mr: 2 }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={name}
                            secondary={index === 0 ? 'online' : null}
                            secondaryTypographyProps={{ align: 'right' }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ChatSideBar;
