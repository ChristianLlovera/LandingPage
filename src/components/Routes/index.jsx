import Home from '../Views/Home'
import NoFount from '../Views/404'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        component: NoFount
    }
];

export default routes