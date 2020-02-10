import React from 'react'
import Loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import { Spin } from 'antd'
import '../App.css'

export default function ReactLoadable(fnImport) {
  return Loadable(() => pMinDelay(fnImport(), 200), {
    fallback: (
      <div className="loading">
        <Spin size="large" />
        <p>Loading...</p>
      </div>
    ),
  })
}
