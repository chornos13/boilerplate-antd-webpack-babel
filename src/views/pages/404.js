import React from 'react'
import { Result, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import ReactRouterPropTypes from 'react-router-prop-types'

function NotFound(props) {
  const { history } = props
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() => {
            history.goBack()
          }}
        >
          Back
        </Button>
      }
    />
  )
}

NotFound.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default withRouter(NotFound)
