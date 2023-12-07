import manifest from '__STATIC_CONTENT_MANIFEST'
import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

const asset = {
  handle (request, env, ctx) {
    return getAssetFromKV(
      {
        request,
        waitUntil: ctx.waitUntil.bind(ctx)
      },
      {
        ASSET_NAMESPACE: env.__STATIC_CONTENT,
        ASSET_MANIFEST: JSON.parse(manifest)
      }
    )
  },

  is (request) {
    const url = new URL(request.url)
    const file = url.pathname.slice(1)
    return (file && manifest.includes(file))
  }
}

export default asset
