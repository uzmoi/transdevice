import { Copy } from "lucide-preact";
import { Button } from "../components/Button.tsx";

export function StringDataView({ string }: { string: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(string);
  };

  return (
    <div class="flex flex-col gap-4 py-6">
      <div class="flex gap-2 items-center">
        <h2 class="flex-1 text-2xl before:content-['#'] before:me-1 before:text-gray-500">
          String
        </h2>
        <Button onClick={copyToClipboard}>
          Copy <Copy class="inline-block" />
        </Button>
      </div>
      <pre class="
        px-4 py-2 rounded border border-zinc-500 text-lg
        empty:before:content-['Empty_string.'] before:text-zinc-400
      ">
        {string}
      </pre>
    </div>
  );
}
