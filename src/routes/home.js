import MyLoadable from 'utils/MyLoadable'

const Home = MyLoadable(() => import('views/Home/Home'))

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
]

export default routes
