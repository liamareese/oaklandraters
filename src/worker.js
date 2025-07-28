import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

export default {
  async fetch(request, env, ctx) {
    try {
      // getAssetFromKV is the magic that serves your static files
      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.ASSET_NAMESPACE,
          ASSET_MANIFEST: env.ASSET_MANIFEST,
        }
      );
    } catch (e) {
      // If the asset isn't found, return a 404
      let pathname = new URL(request.url).pathname;
      return new Response(`File ${pathname} not found`, {
        status: 404,
        statusText: "not found",
      });
    }
  },
};
