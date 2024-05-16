"use client";

import { QueryProvider } from "@/feature/common/ReactQuery/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      {children}
      <ReactQueryDevtools />
    </QueryProvider>
  );
};
