import { LoadComponent } from 'utils/MyLoadable'

const Features = LoadComponent(() => import('views/Features/Features'))

const routes = [
  {
    path: '/features',
    name: 'Features',
    component: Features,
  },
]

export default routes
