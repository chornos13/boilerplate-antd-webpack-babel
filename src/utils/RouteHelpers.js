// eslint-disable-next-line import/prefer-default-export
export function addPrefixPathRoute(baseURL, routes) {
  return routes.map((item) => {
    let path = item.path || ''

    if (path[path.length - 1] === '/') {
      path = path.substring(0, path.length - 1)
    }

    return { ...item, path: baseURL + path }
  })
}
