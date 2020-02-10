import MyLoadable from 'utils/MyLoadable'

const Features = MyLoadable(() => import('views/Features/Features'))

const routes = [
  {
    path: '/features',
    name: 'Features',
    component: Features,
  },
]

export default routes
