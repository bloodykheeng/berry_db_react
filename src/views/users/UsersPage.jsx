import React from 'react';
import UsersList from './UsersList';
import MainCard from 'ui-component/cards/MainCard';

function UsersPage() {
    return (
        <MainCard>
            <UsersList />
        </MainCard>
    );
}

export default UsersPage;
