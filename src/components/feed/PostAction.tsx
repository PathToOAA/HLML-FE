export default function PostAction() {
  return (
    <div className="px-4 pb-3 pt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-rose-500 transition hover:bg-rose-50"
            aria-label="좋아요"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.5l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.54C11.09 5.01 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.68L12 21.5z" />
            </svg>
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100"
            aria-label="댓글"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 text-[10px]">
            M
          </span>
          조롱멘트
        </button>
      </div>
      <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
        <span className="font-semibold text-zinc-900">74 likes</span>
      </div>
    </div>
  );
}
