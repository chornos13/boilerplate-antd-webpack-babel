import React from 'react'
import Header from 'containers/layouts/Header'

function withHeader(Content) {
  return function LayoutHeader(props) {
    return (
      <>
        <Header {...props} />
        <Content {...props} />
      </>
    )
  }
}

export default withHeader
