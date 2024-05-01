import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { FallbackLoading } from "./components/fallback-loading";
import { Toaster } from "./components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<FallbackLoading />}>
          <RouterProvider router={routes} />
        </Suspense>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}
