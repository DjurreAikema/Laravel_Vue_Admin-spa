import AdminExamplesPage from './components/Admin/Pages/ExamplePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import AdminShell from './components/Admin/AdminShell';

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
