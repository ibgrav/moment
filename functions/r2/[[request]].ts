export interface Env {
  BUCKET: R2Bucket;
}

function getURL(requestUrl: string) {
  const url = new URL(requestUrl);
  const path = url.pathname.substring(4); // assuming path starts with /r2/
  return { url, path };
}

const get: PagesFunction<Env> = async (ctx) => {
  const { path } = getURL(ctx.request.url);
  const file = await ctx.env.BUCKET.get(path);

  console.log({ path, file });

  if (!file) return new Response(undefined, { status: 404 });

  const headers = new Headers();
  file.writeHttpMetadata(headers);
  headers.set("etag", file.httpEtag);

  return new Response(file.body, { headers, status: 200 });
};

const post: PagesFunction<Env> = async (ctx) => {
  const items = await ctx.env.BUCKET.list();

  console.log({ items });

  return new Response(JSON.stringify({ items }, null, 2), {
    headers: { "content-type": "text/html" },
  });
};

export const onRequest: PagesFunction<Env> = async (ctx) => {
  if (ctx.request.method === "GET") return get(ctx);
  if (ctx.request.method === "POST") return post(ctx);

  return new Response(undefined, { status: 400 });
};
