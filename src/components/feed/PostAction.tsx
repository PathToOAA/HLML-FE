import { Heart, MessageCircle } from "lucide-react";

export default function PostAction() {
  return (
    <div className="px-4 pb-3 pt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-black"
            aria-label="좋아요"
          >
            <Heart />
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-black"
            aria-label="댓글"
          >
            <MessageCircle />
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
