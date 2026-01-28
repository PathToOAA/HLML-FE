import PostCard from "@/components/feed/PostCard";
import { ChevronLeft, EllipsisVertical } from "lucide-react";

export default function MainPage() {
  const showReactions = true;
  const chips = showReactions ? ["응가", "되겠냐ㅋ"] : [];

  return (
    <main className="flex flex-1 flex-col overflow-y-auto bg-white">
      <header className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-900"
          aria-label="뒤로"
        >
          <ChevronLeft />
        </button>
        <h1 className="flex-1 text-sm font-semibold text-zinc-900">Main</h1>
        {/* <button
          type="button"
          className="flex h-8 w-8 items-center justify-center text-zinc-500"
          aria-label="더보기"
        >
          <EllipsisVertical />
        </button> */}
      </header>
      <section className="px-4 py-3">
        <PostCard chips={chips} />
      </section>
    </main>
  );
}
