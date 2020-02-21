import { LoadComponent } from 'utils/MyLoadable'

const About = LoadComponent(() => import('views/About/About'))

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

export default routes
