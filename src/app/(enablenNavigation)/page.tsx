"use client";

import { LogoutButton } from "@/widgets/auth/LogoutButton";
import { withAuthentication } from "@/widgets/common/withAuthentication";
import { User } from "firebase/auth";

const Page = ({ user }: { user: User | null }) => {
  return (
    <div className="m-auto max-w-[480px] p-5">
      <h1 className="text-2xl">Home</h1>
      <div>{user && "Hello! " + user.displayName}</div>
      <LogoutButton />
    </div>
  );
};

export default withAuthentication(Page, (user, router) => {
  if (!user) router.push("/auth/login");
});
