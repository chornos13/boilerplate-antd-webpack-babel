import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'

import { LoadComponent } from 'utils/MyLoadable'

const NotFound = LoadComponent(() => import('views/pages/404'))

function CreateRoute(routes, redirectToIfNotMatch) {
  function MyRouter(props) {
    const { redirectTo: propRedirectTo } = props
    const curRedirectTo = propRedirectTo || redirectToIfNotMatch
    console.log({ curRedirectTo })
    return (
      <Switch>
        {routes.map((route) => {
          const { component: PageComponent, ...propsRoute } = route
          return (
            <Route
              key={route.path}
              {...propsRoute}
              render={(routeProps) => (
                <PageComponent {...routeProps} {...props} />
              )}
            />
          )
        })}

        {curRedirectTo ? (
          <Redirect to={curRedirectTo} />
        ) : (
          <Route path="*">
            <NotFound />
          </Route>
        )}
      </Switch>
    )
  }

  MyRouter.propTypes = {
    redirectTo: PropTypes.string,
    location: ReactRouterPropTypes.location.isRequired,
  }

  return withRouter(MyRouter)
}

export default CreateRoute
