import listeners from './listeners'
import fallback from './fallback'

function findMatchingRoute (request) {
  const url = new URL(request.url)
  const path = url.pathname.replace(/:\w+/g, '([a-z0-9-_]+)')
  const pattern = new RegExp(`^${path}$`, 'i')
  const page = listeners[request.method].find(({ path }) => pattern.test(path))
  return page ?? fallback
}

export default findMatchingRoute
