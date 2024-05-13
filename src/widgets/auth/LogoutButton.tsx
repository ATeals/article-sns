"use client";

import { useLogoutMutation } from "@/feature/auth/api";
import { Button } from "@/feature/shadcn/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const { mutate } = useLogoutMutation();
  const client = useQueryClient();

  const router = useRouter();

  const handleCLick = () => {
    mutate(undefined, {
      onSuccess: () => {
        router.push("/auth/login");
        client.invalidateQueries({ queryKey: ["AUTH"] });
      },
    });
  };

  return <Button onClick={handleCLick}>Logout</Button>;
};
