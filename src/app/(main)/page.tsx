import PostCard from "@/components/feed/PostCard";

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
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1 className="flex-1 text-sm font-semibold text-zinc-900">Main</h1>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center text-zinc-500"
          aria-label="더보기"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="12" cy="5" r="1.6" />
            <circle cx="12" cy="12" r="1.6" />
            <circle cx="12" cy="19" r="1.6" />
          </svg>
        </button>
      </header>
      <section className="px-4 py-3">
        <PostCard chips={chips} />
      </section>
    </main>
  );
}
