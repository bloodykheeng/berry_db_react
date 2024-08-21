// assets
import { IconDashboard } from '@tabler/icons';

import {
    Home as HomeIcon,
    People as UsersIcon,
    AccountCircle as AccountIcon,
    Receipt as BillingIcon,
    BarChart as UsageIcon,
    VpnKey as APIKeysIcon,
    IntegrationInstructions as IntegrationsIcon,
    Description as ContentIcon,
    SmartToy as BotsIcon,
    Chat as ChatIcon,
    Search as SearchIcon
} from '@mui/icons-material';

// constant
const icons = { IconDashboard };

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
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'search',
            title: 'Search',
            type: 'item',
            icon: SearchIcon,
            url: '/search',
            breadcrumbs: false
        },
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            icon: HomeIcon,
            url: '/home',
            breadcrumbs: false
        },
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            icon: UsersIcon,
            url: '/users',
            breadcrumbs: false
        },
        {
            id: 'account',
            title: 'Account',
            type: 'item',
            icon: AccountIcon,
            url: '/account',
            breadcrumbs: false
        },
        {
            id: 'billing',
            title: 'Billing',
            type: 'item',
            icon: BillingIcon,
            url: '/billing',
            breadcrumbs: false
        },
        {
            id: 'usage',
            title: 'Usage',
            type: 'item',
            icon: UsageIcon,
            url: '/usage',
            breadcrumbs: false
        },
        {
            id: 'apikeys',
            title: 'API Keys',
            type: 'item',
            icon: APIKeysIcon,
            url: '/apikeys',
            breadcrumbs: false
        },
        {
            id: 'integrations',
            title: 'Integrations',
            type: 'item',
            icon: IntegrationsIcon,
            url: '/integrations',
            breadcrumbs: false
        },
        {
            id: 'content',
            title: 'Content',
            type: 'item',
            icon: ContentIcon,
            url: '/content',
            breadcrumbs: false
        },
        {
            id: 'bots',
            title: 'Bots',
            type: 'item',
            icon: BotsIcon,
            url: '/bots',
            breadcrumbs: false
        },
        {
            id: 'chat',
            title: 'Chat',
            type: 'item',
            icon: ChatIcon,
            url: '/chat',
            breadcrumbs: false
        }
    ]
};

export default dashboard;
