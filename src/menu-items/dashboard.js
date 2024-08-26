// assets
import {
    IconDashboard,
    IconHome,
    IconUsers,
    IconUserCircle,
    IconReceipt,
    IconChartBar,
    IconKey,
    IconPlug,
    IconFileText,
    IconRobot,
    IconMessageCircle,
    IconSearch
} from '@tabler/icons-react';

// constant
const icons = {
    IconDashboard,
    IconHome,
    IconUsers,
    IconUserCircle,
    IconReceipt,
    IconChartBar,
    IconKey,
    IconPlug,
    IconFileText,
    IconRobot,
    IconMessageCircle,
    IconSearch
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'chat',
            title: 'Chat',
            type: 'item',
            icon: icons.IconMessageCircle,
            url: '/chat',
            breadcrumbs: false
        },
        // {
        //     id: 'search',
        //     title: 'Search',
        //     type: 'item',
        //     icon: icons.IconSearch,
        //     url: '/search',
        //     breadcrumbs: false
        // },
        // {
        //     id: 'home',
        //     title: 'Home',
        //     type: 'item',
        //     icon: icons.IconHome,
        //     url: '/home',
        //     breadcrumbs: false
        // },
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            icon: icons.IconUsers,
            url: '/users',
            breadcrumbs: false
        },
        {
            id: 'usage',
            title: 'Usage',
            type: 'item',
            icon: icons.IconChartBar,
            url: '/usage',
            breadcrumbs: false
        },
        {
            id: 'account',
            title: 'Account',
            type: 'item',
            icon: icons.IconUserCircle,
            url: '/account',
            breadcrumbs: false
        },
        {
            id: 'billing',
            title: 'Billing',
            type: 'item',
            icon: icons.IconReceipt,
            url: '/billing',
            breadcrumbs: false
        },

        {
            id: 'apikeys',
            title: 'API Keys',
            type: 'item',
            icon: icons.IconKey,
            url: '/apikeys',
            breadcrumbs: false
        },
        {
            id: 'integrations',
            title: 'Integrations',
            type: 'item',
            icon: icons.IconPlug,
            url: '/integrations',
            breadcrumbs: false
        },
        {
            id: 'content',
            title: 'Content',
            type: 'item',
            icon: icons.IconFileText,
            url: '/content',
            breadcrumbs: false
        },
        {
            id: 'bots',
            title: 'Bots',
            type: 'item',
            icon: icons.IconRobot,
            url: '/bots',
            breadcrumbs: false
        }
    ]
};

export default dashboard;
