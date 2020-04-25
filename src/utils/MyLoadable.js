import React from 'react'
import Loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import Loading from 'components/Loading'
import '../App.css'

const DELAY = 150

function lazyHOC(Library, ...args) {
  let HolderComponent = null
  return function LazyHOC(props) {
    return (
      <Library>
        {({ default: Module }) => {
          if (!HolderComponent) {
            HolderComponent = Module(...args)
            return <HolderComponent {...props} />
          }
          return <HolderComponent {...props} />
        }}
      </Library>
    )
  }
}
//
// export function lazyHOC(...args) {
//   if (args.length < 2) {
//     throw new Error('Min 2 arguments')
//   }
//
//   let View = args.pop()
//   args.reverse()
//
//   for (let i = 0; i < args.length; i += 1) {
//     View = lazyHOC(args[i], View)
//   }
//
//   return View
// }

export function LoadComponent(fnImport) {
  return Loadable(() => pMinDelay(fnImport(), DELAY), {
    fallback: <Loading />,
  })
}

export function LoadHOC(fnImport) {
  const Library = Loadable.lib(fnImport)
  return (...args) => lazyHOC(Library, ...args)
}
