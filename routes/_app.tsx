import type { PageProps } from "$fresh/server.ts";
import { siGithub } from "simple-icons";
import { SimpleIcon } from "../components/simple-icon.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark light" />
        <title>Transdevice</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="h-dvh bg-zinc-200 dark:bg-zinc-900">
        <header class="px-8 py-3 mx-auto flex gap-2 items-center bg-lime-500 dark:bg-lime-600">
          <div class="flex-1">
            <p class="text-xl">
              Transdevice
            </p>
          </div>
          <a
            href="https://github.com/uzmoi/transdevice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SimpleIcon icon={siGithub} />
          </a>
        </header>
        <div class="max-w-screen-md mx-auto py-8">
          <Component />
        </div>
      </body>
    </html>
  );
}
