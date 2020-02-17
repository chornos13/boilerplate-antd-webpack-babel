import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { LoadComponent } from 'utils/MyLoadable'
import { isFunction } from 'formik'

const NotFound = LoadComponent(() => import('views/pages/404'))

function CreateRoute(routes) {
  function MyRouter(props) {
    const { redirectTo } = props
    return (
      <Switch>
        {routes.map((route) => {
          const { component: PageComponent, ...propsRoute } = route
          return (
            <Route
              key={route.path}
              {...propsRoute}
              render={(routeProps) => {
                if (isFunction(PageComponent)) {
                  return PageComponent()
                }

                return <PageComponent {...routeProps} {...props} />
              }}
            />
          )
        })}
        {redirectTo ? (
          <Redirect to={redirectTo} />
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
  }

  return MyRouter
}

export default CreateRoute
