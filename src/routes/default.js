import CreateRouter from 'utils/CreateRouter'
import home from './home'
import features from './features'
import rules from './rules'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: CreateRouter(home),
  },
  {
    path: '/features',
    name: 'Feature',
    component: CreateRouter(features),
  },
  {
    path: '/rules',
    name: 'Rules',
    component: CreateRouter(rules),
  },
]

export default routes
