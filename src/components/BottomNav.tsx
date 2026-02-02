import { Bell, Home, Plus, UserRound } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="mt-auto border-t border-zinc-200 bg-white px-6 py-3">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 transition hover:bg-zinc-100"
        >
          <Home />
        </button>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 transition hover:bg-zinc-100"
          aria-label="추가"
        >
          <Plus />
        </button>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 transition hover:bg-zinc-100"
          aria-label="알림"
        >
          <Bell />
        </button>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 transition hover:bg-zinc-100"
          aria-label="프로필"
        >
          <UserRound />
          {/* <span className="h-6 w-6 rounded-full border border-rose-400 bg-rose-50" /> */}
        </button>
      </div>
    </nav>
  );
}
