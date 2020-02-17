import CreateRoute from 'utils/CreateRoute'
import { LoadHOC } from 'utils/MyLoadable'
// import withHeader from 'components/HOC/withHeader'
import home from './home'
import features from './features'
import rules from './rules'

const withHeader = LoadHOC(() => import('components/HOC/withHeader'))

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
]

export default routes
