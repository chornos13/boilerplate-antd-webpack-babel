import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import PropTypes from 'prop-types'
import MyLoadable from 'utils/MyLoadable'

const NotFound = MyLoadable(() => import('views/pages/404'))

function CreateRoute(routes) {
  return function MyRouter() {
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    )
  }
}

// MyRouter.propTypes = {
//   routes: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default CreateRoute
