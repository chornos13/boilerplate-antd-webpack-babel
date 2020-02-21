import React from 'react'
import Header from 'components/layouts/Header'

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
