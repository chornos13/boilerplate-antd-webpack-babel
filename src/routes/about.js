import { LoadComponent } from 'utils/MyLoadable'
import { addPrefixPathRoute } from 'utils/RouteHelpers'

const BASE_URL = '/about'

const About = LoadComponent(() => import('views/About/About'))

const routes = [
  {
    path: '/',
    name: 'About',
    component: About,
  },
]

export default addPrefixPathRoute(BASE_URL, routes)
