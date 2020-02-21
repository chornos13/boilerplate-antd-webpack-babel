import { LoadComponent } from 'utils/MyLoadable'

const Rules = LoadComponent(() => import('views/Rules/Rules'))

const routes = [
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
  },
]

export default routes
