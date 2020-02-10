import MyLoadable from 'utils/MyLoadable'

const Rules = MyLoadable(() => import('views/Rules/Rules'))

const routes = [
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
  },
]

export default routes
