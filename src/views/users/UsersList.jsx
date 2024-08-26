import React from 'react';
import MaterialTable from '@material-table/core';
import { Box, Typography, useTheme } from '@mui/material';
import Header from 'components/Header';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';

const mockDataTeam = [
    { id: 1, name: 'Jon Snow', email: 'jonsnow@gmail.com', age: 35, phone: '(665)121-5454', access: 'admin' },
    { id: 2, name: 'Cersei Lannister', email: 'cerseilannister@gmail.com', age: 42, phone: '(421)314-2288', access: 'manager' },
    { id: 3, name: 'Jaime Lannister', email: 'jaimelannister@gmail.com', age: 45, phone: '(422)982-6739', access: 'user' },
    { id: 4, name: 'Anya Stark', email: 'anyastark@gmail.com', age: 16, phone: '(921)425-6742', access: 'admin' },
    { id: 5, name: 'Daenerys Targaryen', email: 'daenerystargaryen@gmail.com', age: 31, phone: '(421)445-1189', access: 'user' },
    { id: 6, name: 'Ever Melisandre', email: 'evermelisandre@gmail.com', age: 150, phone: '(232)545-6483', access: 'manager' },
    { id: 7, name: 'Ferrara Clifford', email: 'ferraraclifford@gmail.com', age: 44, phone: '(543)124-0123', access: 'user' },
    { id: 8, name: 'Rossini Frances', email: 'rossinifrances@gmail.com', age: 36, phone: '(222)444-5555', access: 'user' },
    { id: 9, name: 'Harvey Roxie', email: 'harveyroxie@gmail.com', age: 65, phone: '(444)555-6239', access: 'admin' }
];

const UsersList = () => {
    const theme = useTheme();

    const columns = [
        { title: 'ID', field: 'id' },
        { title: 'Name', field: 'name' },
        { title: 'Age', field: 'age', type: 'numeric' },
        { title: 'Phone Number', field: 'phone' },
        { title: 'Email', field: 'email' },
        {
            title: 'Access Level',
            field: 'access',
            render: (rowData) => (
                <Box width="120px" p={1} display="flex" alignItems="center" justifyContent="center" gap={1} borderRadius={1}>
                    {rowData.access === 'admin' && <AdminPanelSettingsOutlined />}
                    {rowData.access === 'manager' && <SecurityOutlined />}
                    {rowData.access === 'user' && <LockOpenOutlined />}
                    <Typography textTransform="capitalize">{rowData.access}</Typography>
                </Box>
            )
        }
    ];

    return (
        <Box m="20px">
            <Header title="Users" subtitle="Managing the Users" />
            <Box mt="40px" height="75vh" flex={1} sx={{ overflow: 'auto' }}>
                <MaterialTable
                    title="Members"
                    columns={columns}
                    data={mockDataTeam}
                    options={{
                        pageSize: 5,
                        paging: true,
                        search: false,
                        sorting: true,
                        selection: true
                    }}
                />
            </Box>
        </Box>
    );
};

export default UsersList;
