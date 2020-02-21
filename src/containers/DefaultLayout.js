import React from 'react'
import routes from 'routes/default'
import { Redirect, Route, Switch } from 'react-router-dom'
import ReactRouterPropTypes from 'react-router-prop-types'

class DefaultLayout extends React.Component {
  render() {
    const { location } = this.props
    return (
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
      </Switch>
    )
  }
}

DefaultLayout.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
}

export default DefaultLayout
