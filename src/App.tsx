import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { FallbackLoading } from "./components/fallback-loading";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <>
      <Suspense fallback={<FallbackLoading />}>
        <RouterProvider router={routes} />
      </Suspense>
      <Toaster />
    </>
  );
}
