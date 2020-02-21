import CreateRoute from 'utils/CreateRoute'
import home from 'routes/web/home'
import features from 'routes/web/features'
import rules from 'routes/web/rules'
import about from 'routes/web/about'

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
  {
    path: '/about',
    name: 'About',
    component: CreateRoute(about),
  },
]

export default routes
