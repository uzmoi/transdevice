import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <div class="flex flex-col gap-4 items-center justify-center">
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <h1 class="text-4xl font-bold">404 - Page not found</h1>
      <p>The page you were looking for doesn't exist.</p>
      <a href="/" class="underline">Go back home</a>
    </div>
  );
}
