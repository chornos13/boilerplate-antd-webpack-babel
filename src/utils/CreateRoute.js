import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { LoadComponent } from 'utils/MyLoadable'

const NotFound = LoadComponent(() => import('views/pages/404'))
export const listRoute = []
const breadcrumbNameMap = {}

export function getBreadcrumbNameMap() {
  return breadcrumbNameMap
}

function CreateRoute(routes, redirectToIfNoMatch) {
  listRoute.push(...routes)
  routes.map((item) => {
    breadcrumbNameMap[item.path] = item.name
    return breadcrumbNameMap
  })

  function MyRouter(props) {
    const { redirectTo } = props
    const curRedirect = redirectTo || redirectToIfNoMatch
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
        {curRedirect ? (
          <Redirect to={curRedirect} />
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
