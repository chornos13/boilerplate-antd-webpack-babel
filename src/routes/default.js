import CreateRoute from 'utils/CreateRoute'
import { LoadHOC } from 'utils/MyLoadable'
import home from './home'
import features from './features'
import rules from './rules'
import about from './about'

const withHeader = LoadHOC(() => import('components/HOC/Layout/withHeader'))

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: withHeader(CreateRoute(home)),
  },
  {
    path: '/features',
    name: 'Feature',
    component: withHeader(CreateRoute(features)),
  },
  {
    path: '/rules',
    name: 'Rules',
    component: withHeader(CreateRoute(rules)),
  },
  {
    path: '/about',
    name: 'About',
    component: withHeader(CreateRoute(about)),
  },
]

export default routes
