/* eslint-disable module-resolver/use-alias */
import loadable from '@loadable/component'
import CreateRoute from 'utils/CreateRoute'
import { useLazyHOCinRoute } from 'utils/MyLoadable'
import home from './home'
import features from './features'
import rules from './rules'

const withHeader = loadable.lib(() => import('../components/HOC/withHeader'))
const withTest = loadable.lib(() => import('../components/HOC/withTest'))

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: useLazyHOCinRoute(withTest, withHeader, CreateRoute(home)),
  },
  {
    path: '/features',
    name: 'Feature',
    component: useLazyHOCinRoute(withHeader, CreateRoute(features)),
  },
  {
    path: '/rules',
    name: 'Rules',
    component: useLazyHOCinRoute(withHeader, CreateRoute(rules)),
  },
]

export default routes
