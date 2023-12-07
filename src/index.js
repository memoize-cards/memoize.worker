import '@pixel'
import '@api'
import '@pages'

import asset from '@standard/asset'
import router from '@standard/router'

export default {
  async fetch (request, ...args) {
    return asset.is(request)
      ? await asset.handle(request, ...args)
      : await router.handle(request, ...args)
  }
}
