import React from 'react'
import AdminNavigation from 'components/layouts/AdminNavigation'

function withAdminNavigation(Content) {
  return function WithAdminNavigation(props) {
    return (
      <AdminNavigation {...props}>
        <Content {...props} />
      </AdminNavigation>
    )
  }
}

export default withAdminNavigation
