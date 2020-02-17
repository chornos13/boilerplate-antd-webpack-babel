import { LoadComponent } from 'utils/MyLoadable'

const Home = LoadComponent(() => import('views/Home/Home'))

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
]

export default routes
