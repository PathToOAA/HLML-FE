export default function CreatePage() {
  const isResultEdit = false;

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
        <h1 className="flex-1 text-sm font-semibold text-zinc-900">새 게시물</h1>
        {isResultEdit ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white"
            >
              성공
            </button>
            <button
              type="button"
              className="rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white"
            >
              실패
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white"
          >
            게시하기
          </button>
        )}
      </header>
      <section className="px-4 py-4">
        <div className="flex h-[360px] w-full items-center justify-center bg-[#2f2f2f] px-6 text-center text-white">
          <p className="text-xl font-semibold leading-relaxed tracking-tight">
            한 달 안에 5kg 빼게 ㅅㄱ
          </p>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
        </div>
      </section>
      <section className="mt-auto px-4 pb-8">
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "텍스트", sub: "Aa" },
            { label: "카메라", sub: "CAM" },
            { label: "갤러리", sub: "IMG" },
          ].map((item) => (
            <button
              key={item.label}
              type="button"
              className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-zinc-200 py-4 text-xs font-semibold text-zinc-700"
            >
              <span className="text-[10px] text-zinc-600">{item.sub}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
