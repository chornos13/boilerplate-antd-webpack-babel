import React from 'react'
import { PageHeader, Tabs, Button } from 'antd'
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
    url: '/home',
  },
  {
    name: 'Rules',
    url: '/rules',
  },
  {
    name: 'Features',
    url: '/features',
  },
  {
    name: 'About',
    url: '/about',
  },
]

function Header(props) {
  const { history, location } = props
  const curBaseURL = `/${location.pathname.split('/')[1]}`
  const isNavExist = !!TABS.find((x) => x.url === curBaseURL)

  return (
    <div className={cx(cssHeader.customTitle)}>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        title={<div className={cx(cssHeader.rainbowText)}>Nusa Front-End</div>}
        extra={EXTRA_BUTTONS}
        footer={
          <Tabs
            activeKey={isNavExist ? curBaseURL : 'random'}
            onChange={(key) => {
              history.push(key)
            }}
          >
            {TABS.map((tab) => {
              return <TabPane tab={tab.name} key={tab.url} />
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
