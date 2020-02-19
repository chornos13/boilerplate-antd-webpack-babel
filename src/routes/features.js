import { LoadComponent } from 'utils/MyLoadable'
import { addPrefixPathRoute } from 'utils/RouteHelpers'

const BASE_URL = '/features'

const Features = LoadComponent(() => import('views/Features/Features'))

const routes = [
  {
    path: '/',
    name: 'Features',
    component: Features,
  },
]

export default addPrefixPathRoute(BASE_URL, routes)
