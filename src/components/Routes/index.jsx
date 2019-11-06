import Home from '../Views/Home'
import About from '../Views/About'
import NoFount from '../Views/404'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About
    },
    {
        component: NoFount
    }
];

export default routes