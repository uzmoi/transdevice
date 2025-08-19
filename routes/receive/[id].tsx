import type { PageProps } from "$fresh/server.ts";
import Receive from "../../islands/receive.tsx";

export default function ReceivePage({ params }: PageProps) {
  return <Receive id={params.id} />;
}
