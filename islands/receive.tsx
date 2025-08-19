import useSWR from "swr";
import { LoaderCircle } from "lucide-preact";
import { StringDataView } from "../components/string-view.tsx";

const get = async (id: string) => {
  console.log("receive.id %o", id);
  const res = await fetch(`/api/data?id=${id}`);
  const result: { value: string } = await res.json();
  console.log("receive.result %o", result);
  return result.value;
};

interface ReceiveProps {
  id: string;
}

export default function Receive({ id }: ReceiveProps) {
  const { data, isLoading, error } = useSWR(id, get);

  if (isLoading) {
    return (
      <div class="py-24">
        <LoaderCircle class="animate-spin m-auto" size={48} />
      </div>
    );
  }

  if (error != null) {
    return <p>Error: {error}</p>;
  }

  if (data == null) return <p>メッセージはでないはずだよ</p>;

  return <StringDataView string={data} />;
}
