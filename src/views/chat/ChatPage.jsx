import React, { useState } from 'react';
import { useMediaQuery, useTheme, Paper, Grid, Typography, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChatSideBar from './ChatSideBar';
import ChatWindow from './ChatWindow';

const ChatPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedChat, setSelectedChat] = useState(null);

    const handleChatSelect = (chatName) => {
        setSelectedChat(chatName);
    };

    const handleBackClick = () => {
        setSelectedChat(null);
    };

    const messages = [
        { text: "Hey man, What's up ?", align: 'right', time: '09:30' },
        { text: 'Hey, Iam Good! What about you ?', align: 'left', time: '09:31' },
        { text: "Cool. i am good, let's catch up!", align: 'right', time: '10:30' }
    ];

    return (
        <Paper sx={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                    {isMobile && selectedChat && (
                        <IconButton edge="start" color="inherit" onClick={handleBackClick} sx={{ mr: 1 }}>
                            <ArrowBackIcon />
                        </IconButton>
                    )}
                    Chat
                </Typography>
            </Box>
            <Grid container sx={{ flexGrow: 1, overflow: 'hidden' }}>
                {(!isMobile || !selectedChat) && (
                    <Grid item xs={isMobile ? 12 : 3} sx={{ borderRight: '1px solid #e0e0e0', height: '100%' }}>
                        <ChatSideBar onChatSelect={handleChatSelect} />
                    </Grid>
                )}
                {(!isMobile || selectedChat) && (
                    <Grid item xs={isMobile ? 12 : 9} sx={{ height: '100%' }}>
                        <ChatWindow messages={messages} />
                    </Grid>
                )}
            </Grid>
        </Paper>
    );
};

export default ChatPage;
