import { LoadComponent } from 'utils/MyLoadable'

const Home = LoadComponent(() => import('views/Home/Home'))

const routes = [
  {
    path: '/admin/home',
    name: 'Home',
    exact: true,
    component: Home,
  },
]

export default routes
