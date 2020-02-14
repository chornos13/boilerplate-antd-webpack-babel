import React from 'react'
import routes from 'routes/default'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './layouts/Header'
// import cx from 'classnames'
// import cssDefaultLayout from './DefaultLayout.module.css'
// import Header from './layouts/Header'

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        {/*<Header {...this.props} />*/}
        <Switch>
          {routes.map((route) => {
            const { component: PageComponent, ...propsRoute } = route
            return (
              <Route
                key={route.path}
                {...propsRoute}
                render={(props) => <PageComponent {...props} />}
              />
            )
          })}
          <Redirect to={routes[0].path} />
        </Switch>
      </div>
    )
  }
}

export default DefaultLayout
