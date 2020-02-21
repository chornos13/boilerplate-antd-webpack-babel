import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Layout, Menu, Icon, Typography, Badge, Avatar, Popover } from 'antd'
import { Link } from 'react-router-dom'
import cssAdminNavigation from './AdminNavigation.module.css'

const { Title } = Typography

const { Header, Content, Footer, Sider } = Layout

const DUMMY_CONTENT = (
  <div>
    kawla wkdawdaw dka wkd awkd awkdwa dkwa kda wkd wakd akd
    <br />
    <br />
    <br />
    <br />
    kawla wkdawdaw dka wkd awkd awkdwa dkwa kda wkd wakd akd
    <br />
    <br />
    kawla wkdawdaw dka wkd awkd awkdwa dkwa kda wkd wakd akd
    <br />
    <br />
    kawla wkdawdaw dka wkd awkd awkdwa dkwa kda wkd wakd akd
    <br />
    <br />
    kawla wkdawdaw dka wkd awkd awkdwa dkwa kda wkd wakd akd
    <br />
  </div>
)

class AdminNavigation extends Component {
  state = {
    visible: false,
  }

  hide = () => {
    this.setState({
      visible: false,
    })
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible })
  }

  render() {
    const { children } = this.props
    const { visible } = this.state
    return (
      <Layout className={cx(cssAdminNavigation.container)}>
        <div className={cx(cssAdminNavigation.logo)}>
          <Link to={'/'}>
            <Title className={cx(cssAdminNavigation.textLogo)} level={4}>
              Nusa Admin
            </Title>
          </Link>
        </div>
        <Header className={cx(cssAdminNavigation.header)}>
          <Menu
            className={cx(cssAdminNavigation.menuNavigation)}
            mode="horizontal"
            selectable={false}
          >
            <Menu.Item key="1">
              <Popover
                key={'2'}
                content={DUMMY_CONTENT}
                title="Title"
                trigger="click"
              >
                <div>
                  <Badge count={5}>
                    <div style={{ marginRight: 15 }}>
                      <Icon type="message" style={{ marginRight: 8 }} />
                      Message
                    </div>
                  </Badge>
                </div>
              </Popover>
            </Menu.Item>
            <Menu.Item key="2">
              <Popover
                key={'2'}
                content={DUMMY_CONTENT}
                title="Title"
                trigger="click"
                visible={visible}
                onVisibleChange={this.handleVisibleChange}
              >
                <div>
                  <Badge count={1} dot>
                    <div style={{ marginRight: 15 }}>
                      <Icon type="notification" style={{ marginRight: 8 }} />
                      Notification
                    </div>
                  </Badge>
                </div>
              </Popover>
            </Menu.Item>
            <Menu.Item key="3">
              <Avatar size={'large'} style={{ backgroundColor: '#87d068' }}>
                Admin
              </Avatar>
            </Menu.Item>
          </Menu>
        </Header>
        <Sider
          className={cx(cssAdminNavigation.sider)}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className={cx(cssAdminNavigation.content)}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

AdminNavigation.propTypes = {
  children: PropTypes.node,
}

export default AdminNavigation
