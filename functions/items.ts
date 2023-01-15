export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  BUCKET: R2Bucket;
}

export const onRequest: PagesFunction<Env> = async (ctx) => {
  const items = await ctx.env.BUCKET.list();

  console.log({ items });

  return new Response(JSON.stringify({ test: 1, items }, null, 2));
};
