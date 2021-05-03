import AdminExamplesPage from './components/Admin/Pages/ExamplePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import AdminShell from './components/Admin/Pages/MainPage';

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage,
    },
    // {
    //     name: 'Examples',
    //     path: '/examples',
    //     component: AdminExamplesPage
    // },
    {
        path: '/admin',
        name: 'admin',
        component: AdminShell,
        children: [
            {
                path: '/examples',
                name: 'admin_examples',
                component: AdminExamplesPage
            },
        ]
    },
];
