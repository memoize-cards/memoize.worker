import '@pixel'
import '@api'
import '@pages'

import asset from '@standard/asset'
import router from '@standard/router'

export default {
  async fetch (request) {
    return asset.is(request)
      ? await asset.handle(...arguments)
      : await router.handle(...arguments)
  }
}
