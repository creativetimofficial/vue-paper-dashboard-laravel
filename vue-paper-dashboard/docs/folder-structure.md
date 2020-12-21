## Folder Structure

This is the main project structure.
We will go over some of the main project folders below.

```
├───vue-paper-dashboard
│   App.vue
│   main.js
│   polyfills.js
│
├───assets
│   ├───css
│   │   │   style.css
│   │   │
│   │   └───nucleo
│   └───sass
│       │   argon.scss
│       │
│       ├───core
│       └───custom
├───axios
│       index.js
│
├───components
|    ├── Dashboard
|    │   ├── Layout
|    │   │   ├── ContentFooter.vue
|    │   │   ├── Content.vue
|    │   │   ├── DashboardLayout.vue
|    │   │   ├── LoadingMainPanel.vue
|    │   │   └── TopNavbar.vue
|    │   └── Views
|    │       ├── Components
|    │       │   ├── Buttons.vue
|    │       │   ├── GridSystem.vue
|    │       │   ├── Icons.vue
|    │       │   ├── Notifications.vue
|    │       │   ├── NotificationTemplate.vue
|    │       │   ├── Panels.vue
|    │       │   ├── SweetAlert.vue
|    │       │   └── Typography.vue
|    │       ├── Dashboard
|    │       │   ├── Overview.vue
|    │       │   ├── Widgets
|    │       │   │   ├── TaskList.vue
|    │       │   │   └── Task.vue
|    │       │   └── Widgets.vue
|    │       ├── Examples
|    │       │   ├── UserManagement
|    │       │   │   └── ListUserPage.vue
|    │       │   ├── UserProfile
|    │       │   │   ├── EditPasswordCard.vue
|    │       │   │   └── EditProfileCard.vue
|    │       │   └── UserProfile.vue
|    │       ├── Maps
|    │       │   ├── API_KEY.js
|    │       │   ├── GoogleMaps.vue
|    │       ├── Pages
|    │       │   ├── Layout
|    │       │   │   ├── AppFooter.vue
|    │       │   │   └── AppNavbar.vue
|    │       │   ├── Lock.vue
|    │       │   ├── Login.vue
|    │       │   ├── Register.vue
|    │       │   ├── TimeLinePage.vue
|    │       │   ├── UserProfile
|    │       │   │   ├── EditProfileForm.vue
|    │       │   │   ├── MembersCard.vue
|    │       │   │   └── UserCard.vue
|    │       │   └── UserProfile.vue
|    │       ├── Password
|    │       │   ├── Reset.vue
|    │       │   └── Email.vue
|    │       └── Tables
|    │           ├── RegularTables.vue
|    ├── GeneralViews
|    │   └── NotFoundPage.vue
|    └── UIComponents
|        ├── Cards
|        │   ├── Card.vue
|        │   ├── ChartCard.vue
|        │   ├── CircleChartCard.vue
|        │   └── StatsCard.vue
|        ├── Charts
|        │   ├── BarChart.js
|        │   ├── DoughnutChart.js
|        │   ├── LineChart.js
|        │   ├── mixins
|        │   │   └── reactiveChart.js
|        │   ├── PieChart.js
|        │   ├── plugins
|        │   │   └── plugin-chart-text.js
|        │   └── utils.js
|        ├── Collapse
|        │   ├── CollapseItem.vue
|        │   └── Collapse.vue
|        ├── Dropdown.vue
|        ├── index.js
|        ├── InfoSection.vue
|        ├── Inputs
|        │   ├── Checkbox.vue
|        │   ├── formGroupInput.vue
|        │   ├── IconCheckbox.vue
|        │   └── Radio.vue
|        ├── Modal.vue
|        ├── Navbar
|        │   ├── NavbarToggleButton.vue
|        │   └── Navbar.vue
|        ├── Pagination.vue
|        ├── Progress.vue
|        ├── SidebarPlugin
|        │   ├── index.js
|        │   ├── SidebarItem.vue
|        │   ├── SideBar.vue
|        │   └── UserMenu.vue
|        ├── Switch.vue
|        ├── Tabs
|        │   ├── PillsLayout.vue
|        │   ├── TabsLayout.vue
|        │   ├── Tabs.vue
|        │   └── Tab.vue
|        ├── TimeLine
|        │   ├── TimeLineItem.vue
|        │   └── TimeLine.vue
|        ├── ValidationError.vue
|        └── Wizard
|            ├── WizardTab.vue
|            └── Wizard.vue
│
├───middleware
│       auth.js
│       guest.js
│
├───mixins
│       form-mixin.js
│
├───plugins
│       dashboard-plugin.js
│       globalComponents.js
│       globalDirectives.js
│
├───router
│       index.js
│       routes.js
│       starterRouter.js
│
├───store
│   │   index.js
│   │
│   ├───modules
│   │       auth.js
│   │       profile-module.js
│   │       reset.js
│   │       users-module.js
│   │
│   └───services
│           profile-service.js
│           users-service.js
│
├───util
│       throttle.js
```

