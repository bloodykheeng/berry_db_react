import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

//

const DashboardPage = Loadable(lazy(() => import('views/dashboard/DashboardPage')));
const UsagePage = Loadable(lazy(() => import('views/usage/UsagePage')));
const UsersPage = Loadable(lazy(() => import('views/users/UsersPage')));
const ChatPage = Loadable(lazy(() => import('views/chat/ChatPage')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardPage />
        },
        {
            path: '/dashboard',
            element: <DashboardPage />
        },
        {
            path: '/search',
            element: <SamplePage />
        },
        {
            path: '/home',
            element: <SamplePage />
        },
        {
            path: '/users',
            element: <UsersPage />
        },
        {
            path: '/account',
            element: <SamplePage />
        },
        {
            path: '/billing',
            element: <SamplePage />
        },
        {
            path: '/usage',
            element: <UsagePage />
        },
        {
            path: '/apikeys',
            element: <SamplePage />
        },
        {
            path: '/integrations',
            element: <SamplePage />
        },
        {
            path: '/content',
            element: <SamplePage />
        },
        {
            path: '/bots',
            element: <SamplePage />
        },
        {
            path: '/chat',
            element: <ChatPage />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
