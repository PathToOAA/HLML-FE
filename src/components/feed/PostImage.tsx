import { ChevronDown } from "lucide-react";

type PostImageProps = {
  text?: string;
  chips?: string[];
  showDetailLink?: boolean;
};

export default function PostImage({
  text = "한 달 안에 5kg 뺄게 ㅅㄱ",
  chips = [],
  showDetailLink = true,
}: PostImageProps) {
  return (
    <div className="relative flex h-90 w-full items-center justify-center bg-[#2f2f2f] px-6 text-center text-white">
      {chips.length > 0 && (
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-900"
            >
              {chip}
            </span>
          ))}
        </div>
      )}
      <p className="text-xl font-semibold leading-relaxed tracking-tight">
        {text}
      </p>
      {showDetailLink && (
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 text-xs text-white/80">
          <span>자세히 보기</span>
          <ChevronDown />
        </div>
      )}
    </div>
  );
}
