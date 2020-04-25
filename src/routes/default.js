import CreateRoute from 'utils/CreateRoute'
import { LoadHOC } from 'utils/MyLoadable'
import web from 'routes/web'
import admin from 'routes/admin'

const withHeader = LoadHOC(() => import('components/HOC/layouts/withHeader'))

const withAdminNavigation = LoadHOC(() =>
  import('components/HOC/layouts/withAdminNavigation'),
)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: withAdminNavigation(CreateRoute(admin, '/admin/home')),
  },
  {
    path: '/',
    name: 'Public',
    component: withHeader(CreateRoute(web, '/home')),
  },
]

export default routes
