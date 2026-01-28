import type { ReactNode } from "react";
import BottomNav from "@/components/BottomNav";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#3c3c3c] flex justify-center px-4 py-6">
      <div className="flex min-h-screen w-full max-w-[390px] flex-col bg-white shadow-[0_16px_30px_rgba(0,0,0,0.3)]">
        {children}
        <BottomNav />
      </div>
    </div>
  );
}
