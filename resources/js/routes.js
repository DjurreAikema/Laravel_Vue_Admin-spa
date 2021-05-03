import AdminExamplesPage from './components/Admin/Pages/ExamplePage';
import AdminProfilePage from './components/Admin/Pages/ProfilePage';
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
        beforeEnter:(to, from, next) => {
            axios.get('/api/authenticated')
                .then(()=>{
                    next()
                }).catch(()=>{
                    return next({name: 'login'})
            })
        },
        children: [
            {
                path: '/examples',
                name: 'admin_examples',
                component: AdminExamplesPage
            },
            {
                path: '/profile',
                name: 'admin_profile',
                component: AdminProfilePage
            },
        ]
    },
];
