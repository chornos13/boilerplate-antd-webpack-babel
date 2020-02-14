import React from 'react'

function withHeader(Content) {
  return function LayoutHeader(props) {
    return (
      <>
        {'Test'}
        <Content {...props} />
      </>
    )
  }
}

export default withHeader
