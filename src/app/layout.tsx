import "@/styles/globals.css";

import { cn } from "@/feature/shadcn/utils";
import { Inter as FontSans } from "next/font/google";

import { ClientProvider } from "@/widgets/common";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
