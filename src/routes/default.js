import CreateRoute from 'utils/CreateRoute'
import home from './home'
import features from './features'
import rules from './rules'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: CreateRoute(home),
  },
  {
    path: '/features',
    name: 'Feature',
    component: CreateRoute(features),
  },
  {
    path: '/rules',
    name: 'Rules',
    component: CreateRoute(rules),
  },
]

export default routes
