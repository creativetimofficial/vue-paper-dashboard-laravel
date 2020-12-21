export default [
  {
    name: 'Dashboard',
    icon: 'nc-icon nc-bank',
    path: '/admin/overview'
  },
  {
    name: 'Examples (API)',
    icon: 'nc-icon nc-book-bookmark',
    children: [
      {
        name: 'User Profile',
        path: '/examples/user-profile',
      },
      {
        name: 'User Management',
        path: '/examples/user-management/list-users',
      },
    ]
  },
  {
    name: 'Pages',
    icon: 'nc-icon nc-book-bookmark',
    children: [
      {
        name: 'Timeline',
        path: '/pages/timeline'
      },
      {
        name: 'User Profile',
        path: '/pages/user'
      },
      {
        name: 'Lock',
        path: '/lock'
      }
    ]
  },
  {
    name: 'Components',
    icon: 'nc-icon nc-layout-11',
    children: [{
      name: 'Buttons',
      path: '/components/buttons'
    },
    {
      name: 'Grid System',
      path: '/components/grid-system'
    },
    {
      name: 'Panels',
      path: '/components/panels'
    },
    {
      name: 'Sweet Alert',
      path: '/components/sweet-alert'
    },
    {
      name: 'Notifications',
      path: '/components/notifications'
    },
    {
      name: 'Icons',
      path: '/components/icons'
    },
    {
      name: 'Typography',
      path: '/components/typography'
    }]
  },
  {
    name: 'Forms',
    icon: 'nc-icon nc-ruler-pencil',
    children: [{
      name: 'Regular Forms',
      path: '/forms/regular'
    },
    {
      name: 'Extended Forms',
      path: '/forms/extended'
    },
    {
      name: 'Validation Forms',
      path: '/forms/validation'
    },
    {
      name: 'Wizard',
      path: '/forms/wizard'
    }
    ]
  },
  {
    name: 'Table List',
    icon: 'nc-icon nc-single-copy-04',
    collapsed: true,
    children: [{
      name: 'Regular Tables',
      path: '/table-list/regular'
    },
    {
      name: 'Extended Tables',
      path: '/table-list/extended'
    },
    {
      name: 'Paginated Tables',
      path: '/table-list/paginated'
    }
    ]
  },
  {
    name: 'Maps',
    icon: 'nc-icon nc-pin-3',
    children: [{
      name: 'Google Maps',
      path: '/maps/google'
    },
    {
      name: 'Full Screen Maps',
      path: '/maps/full-screen'
    },
    {
      name: 'Vector Maps',
      path: '/maps/vector-map'
    }
    ]
  },
  {
    name: 'Widgets',
    icon: 'nc-icon nc-box',
    path: '/admin/widgets'
  },
  {
    name: 'Charts',
    icon: 'nc-icon nc-chart-bar-32',
    path: '/charts'
  },
  {
    name: 'Calendar',
    icon: 'nc-icon nc-calendar-60',
    path: '/calendar'
  },
]
