import type { ReactNode } from "react";
import BottomNav from "@/components/BottomNav";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex min-h-screen w-full max-w-120 min-w-90 flex-col bg-white ">
        {children}
        <BottomNav />
      </div>
    </div>
  );
}
