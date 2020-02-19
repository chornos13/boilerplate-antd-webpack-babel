import { LoadComponent } from 'utils/MyLoadable'
import { addPrefixPathRoute } from 'utils/RouteHelpers'

const BASE_URL = '/home'

const Home = LoadComponent(() => import('views/Home/Home'))

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

export default addPrefixPathRoute(BASE_URL, routes)
