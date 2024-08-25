import React from 'react';
import { Card, Table, TableBody, TableCell, TableHead, TableRow, Avatar, Typography, IconButton, Button } from '@mui/material';
import { FilterList, Share } from '@mui/icons-material';

const users = [
    { id: 1, name: 'Factual Cody', accessLevel: 'Owner', createdAt: 'Sept 07, 2023', avatar: 'path/to/avatar.jpg' },
    { id: 2, name: 'Factual Cody', accessLevel: 'Owner', createdAt: 'Sept 07, 2023', avatar: 'path/to/avatar.jpg' },
    { id: 3, name: 'Factual Cody', accessLevel: 'Owner', createdAt: 'Sept 07, 2023', avatar: 'path/to/avatar.jpg' }
];

const UsersTable = () => {
    return (
        <Card style={{ padding: '16px', marginTop: '16px' }}>
            <Typography variant="h6">User</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                <FilterList /> Filter
            </Button>
            <Button variant="contained" color="secondary" style={{ marginLeft: '8px', marginTop: '16px' }}>
                + Invite
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Access Level</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <Avatar src={user.avatar} />
                                <Typography variant="body1">{user.name}</Typography>
                            </TableCell>
                            <TableCell>{user.accessLevel}</TableCell>
                            <TableCell>{user.createdAt}</TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <Share />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
};

export default UsersTable;
