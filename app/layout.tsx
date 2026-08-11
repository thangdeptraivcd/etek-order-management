import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ETEK ERP - Quản lý đơn hàng",
  description: "Giao diện quản lý đơn hàng ETEK ERP",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}
