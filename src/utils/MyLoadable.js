import React from 'react'
import Loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import { Spin } from 'antd'
import '../App.css'

function BaseLazyHOCinRoute(HOC, Content) {
  return function LazyHOCinRoute(props) {
    return (
      <div>
        <HOC>
          {({ default: Module }) => {
            const View = Module(Content)
            return <View {...props} />
          }}
        </HOC>
      </div>
    )
  }
}

export function useLazyHOCinRoute(...args) {
  if (args.length < 2) {
    throw new Error('Min 2 arguments')
  }

  let View = args.pop()
  args.reverse()

  for (let i = 0; i < args.length; i += 1) {
    View = BaseLazyHOCinRoute(args[i], View)
  }

  return View
}

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
