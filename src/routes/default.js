import RegisterRoute from 'utils/RegisterRoute'
import home from './home'
import features from './features'
import rules from './rules'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: RegisterRoute(home),
  },
  {
    path: '/features',
    name: 'Feature',
    component: RegisterRoute(features),
  },
  {
    path: '/rules',
    name: 'Rules',
    component: RegisterRoute(rules),
  },
]

export default routes
