import {
  BarChartIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboard,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react';

export const appSidebar = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  mainMenuItems: [
    {
      title: 'Dashboard',
      url: '#',
      icon: LayoutDashboard,
    },
    {
      title: 'Lifecycle',
      url: '#',
      icon: ListIcon,
    },
    {
      title: 'Analytics',
      url: '#',
      icon: BarChartIcon,
    },
    {
      title: 'Projects',
      url: '#',
      icon: FolderIcon,
    },
    {
      title: 'Team',
      url: '#',
      icon: UsersIcon,
    },
  ],
  secondaryMenuItems: [
    {
      title: 'Settings',
      url: '#',
      icon: SettingsIcon,
    },
    // {
    //   title: 'Get Help',
    //   url: '#',
    //   icon: HelpCircleIcon,
    // },
    // {
    //   title: 'Search',
    //   url: '#',
    //   icon: SearchIcon,
    // },
  ],
};
