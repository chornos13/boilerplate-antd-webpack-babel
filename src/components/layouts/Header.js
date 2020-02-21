import React from 'react'
import { PageHeader, Tabs, Button } from 'antd'
import { Link } from 'react-router-dom'
import ReactRouterPropTypes from 'react-router-prop-types'
import cx from 'classnames'
import cssHeader from './Header.module.css'

const { TabPane } = Tabs

export const EXTRA_BUTTONS = [
  {
    id: 1,
    name: 'Masuk',
  },
  {
    id: 2,
    name: 'Daftar',
    type: 'primary',
  },
].map((btn) => {
  const { name, id, ...props } = btn
  return (
    <Button key={id} {...props}>
      {name}
    </Button>
  )
})

export const TABS = [
  {
    name: 'Home',
    path: '/home',
  },
  {
    name: 'Rules',
    path: '/rules',
  },
  {
    name: 'Features',
    path: '/features',
  },
  {
    name: 'About',
    path: '/about',
  },
]

function Header(props) {
  const { history, location } = props
  const curTab = TABS.find((x) => location.pathname.startsWith(x.path))

  return (
    <div className={cx(cssHeader.customTitle)}>
      <PageHeader
        className={cx(cssHeader.headerBorder)}
        title={
          <Link className={cx(cssHeader.rainbowText)} to={'/'}>
            Nusa Front-End
          </Link>
        }
        extra={EXTRA_BUTTONS}
        footer={
          <Tabs
            activeKey={curTab && curTab.path}
            onChange={(key) => {
              history.push(key)
            }}
          >
            {TABS.map((tab) => {
              return <TabPane tab={tab.name} key={tab.path} />
            })}
          </Tabs>
        }
      />
    </div>
  )
}

Header.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
}

export default Header
