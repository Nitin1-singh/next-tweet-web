"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactNode, useMemo } from "react";

export function ReactQueryCustom({ children }: { children: ReactNode }) {
  const client = useMemo(() => new QueryClient(), [])
  return (
    <QueryClientProvider client={client}>
      {/* <ReactQueryDevtools /> */}
      {children}
    </QueryClientProvider>
  )
}