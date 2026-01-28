export default function BottomNav() {
  return (
    <nav className="mt-auto border-t border-zinc-200 bg-white px-6 py-3">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 transition hover:bg-zinc-100"
          aria-label="홈"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 10.5V21h14V10.5" />
          </svg>
        </button>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 transition hover:bg-zinc-100"
          aria-label="추가"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
        </button>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 transition hover:bg-zinc-100"
          aria-label="알림"
        >
          <span className="h-2 w-2 rounded-full bg-blue-500" />
        </button>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 transition hover:bg-zinc-100"
          aria-label="프로필"
        >
          <span className="h-6 w-6 rounded-full border border-rose-400 bg-rose-50" />
        </button>
      </div>
    </nav>
  );
}
