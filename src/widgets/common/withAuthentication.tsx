"use client";

import { useSessionUserListener } from "@/feature/firebase/useIsUser";
import { User } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useRouter } from "next/navigation";

type RenderComponentType<T> = React.ComponentType<T>;

export const withAuthentication = (
  Component: RenderComponentType<any>,
  callback?: (user: User | null, router: AppRouterInstance) => unknown
) => {
  const WithAuthenticationRenderComponent = (props: any) => {
    const router = useRouter();

    const sessionUser = useSessionUserListener({
      callback: (user) => {
        callback?.(user, router);
      },
    });

    return <Component user={sessionUser} {...props} />;
  };

  return WithAuthenticationRenderComponent;
};
