import React from 'react';
import { Container, Grid } from '@mui/material';
import CreditUsage from './CreditUsage';
import Documents from './Documents';
import UsersTable from './UsersTable';

const UsagePage = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <CreditUsage />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Documents />
                </Grid>
                <Grid item xs={12}>
                    <UsersTable />
                </Grid>
            </Grid>
        </Container>
    );
};

export default UsagePage;
