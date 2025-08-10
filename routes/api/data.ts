/// <reference lib="deno.unstable" />

import type { Handlers } from "$fresh/server.ts";
import { nanoid } from "nanoid";

const json = (value: unknown): Response =>
  new Response(JSON.stringify(value), {
    headers: { "Content-Type": "application/json" },
  });

export const handler: Handlers = {
  async GET(_req, ctx) {
    const dataId = ctx.url.searchParams.get("id");

    let string: string | undefined;
    if (dataId != null) {
      const kv = await Deno.openKv();
      const entry = await kv.get(["data", dataId]);
      if (typeof entry.value === "string") {
        string = entry.value;
      }
    }

    return json({ value: string });
  },
  async POST(req, ctx) {
    const string = await req.text();
    const dataId = ctx.url.searchParams.get("id") ?? nanoid();

    const kv = await Deno.openKv();

    kv.set(["data", dataId], string, {
      expireIn: 86400_000,
    });

    return json({ dataId });
  },
};
