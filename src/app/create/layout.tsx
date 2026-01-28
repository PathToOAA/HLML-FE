import type { ReactNode } from "react";
import AppShell from "@/components/AppShell";

type CreateLayoutProps = {
  children: ReactNode;
};

export default function CreateLayout({ children }: CreateLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
