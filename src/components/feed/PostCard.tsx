import PostAction from "@/components/feed/PostAction";
import PostImage from "@/components/feed/PostImage";
import { EllipsisVertical } from "lucide-react";

type PostCardProps = {
  title?: string;
  chips?: string[];
};

export default function PostCard({
  title = "한 달 안에 5kg 뺄게 ㅅㄱ",
  chips = [],
}: PostCardProps) {
  return (
    <article className="overflow-hidden rounded-none border border-zinc-200 bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full border border-rose-300 bg-rose-100" />
          <span className="text-sm font-semibold text-zinc-900">조민혁</span>
        </div>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center text-zinc-500"
          aria-label="더보기"
        >
          <EllipsisVertical />
        </button>
      </div>
      <PostImage text={title} chips={chips} />
      <PostAction />
      <div className="px-4 pb-4 text-xs text-zinc-600">
        <p className="font-semibold text-zinc-900">김지상 되겠냐?</p>
        <p>조한솔 ㅗ이나 먹어</p>
        <p className="mt-1 font-semibold text-zinc-900">구본희 응가</p>
      </div>
    </article>
  );
}
