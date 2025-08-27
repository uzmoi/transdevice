import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";
import { ScreenShare } from "lucide-preact";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "../components/button.tsx";
import { StringInput } from "../components/string-input.tsx";

export default function Send() {
  const string = useSignal("");

  const [dataId, setDataId] = useState<string | null>(null);
  const url = dataId == null ? null : `${location.origin}/receive/${dataId}`;

  const send = async () => {
    console.log("send.data %o", string.value);
    const res = await fetch("/api/data", {
      method: "POST",
      body: string.value,
    });
    const result: { dataId: string } = await res.json();
    console.log("send.result %o", result);
    setDataId(result.dataId);
  };

  return (
    <div class="flex flex-col gap-4">
      <StringInput string={string} />
      <div class="flex">
        <div class="flex-1" />
        <Button onClick={send}>
          Send <ScreenShare class="inline-block" />
        </Button>
      </div>
      {url && (
        <div class="flex flex-col gap-4 items-center">
          <p class="select-all">{url}</p>
          <QRCodeSVG value={url} marginSize={4} size={192} />
        </div>
      )}
    </div>
  );
}
