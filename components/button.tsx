import { ComponentProps } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: ComponentProps<"button">) {
  return (
    <button
      type="button"
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="
        px-2 py-1 border-gray-500 border-2 rounded
        bg-zinc-300 hover:bg-zinc-400
        dark:bg-zinc-700 dark:hover:bg-zinc-500
        transition-colors
      "
    />
  );
}
