import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/widgets/layout";

type RouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Header />
      <main className="mb-8">
        <Outlet />
      </main>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
      <Analytics />
    </>
  ),
});
