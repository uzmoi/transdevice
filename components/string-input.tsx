import type { Signal } from "@preact/signals";
import { editable, plainSchema } from "edix";
import { useEffect, useRef } from "preact/hooks";

export function StringInput({ string }: { string: Signal<string> }) {
  const preEl = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (preEl.current == null) return;

    const editor = editable(preEl.current, {
      schema: plainSchema(),
      onChange(value) {
        string.value = value;
      },
    });

    return () => {
      editor.dispose();
    };
  }, []);

  return (
    <pre
      ref={preEl}
      class="
        px-4 py-2 rounded border border-zinc-500 text-lg
        empty:before:content-['_']
      "
    >
      {string}
    </pre>
  );
}
