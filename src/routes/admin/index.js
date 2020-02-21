import CreateRoute from 'utils/CreateRoute'
import { addPrefixPathRoute } from 'utils/RouteHelpers'
import home from 'routes/admin/home'
import setting from 'routes/admin/setting'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: CreateRoute(home),
  },
  {
    path: '/setting',
    name: 'Setting',
    component: CreateRoute(setting),
  },
]

export default addPrefixPathRoute('/admin', routes)
