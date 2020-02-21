import React from 'react'
import { LoadComponent } from 'utils/MyLoadable'

const Home = LoadComponent(() => import('views/Home/Home'))

const routes = [
  {
    path: '/admin/setting',
    name: 'Home',
    exact: true,
    component: Home,
  },
  {
    path: '/admin/setting/account',
    name: 'Account',
    component: () => <div>Account</div>,
  },
]

export default routes
