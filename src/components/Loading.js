import React from 'react'
import { Spin } from 'antd'
import cx from 'classnames'
import cssLoading from './Loading.module.css'

function Loading() {
  return (
    <div className={cx(cssLoading.loading)}>
      <Spin size="large" />
      <p>Loading...</p>
    </div>
  )
}

export default Loading
