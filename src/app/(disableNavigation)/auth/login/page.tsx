"use client";

import { LoginForm } from "@/widgets/auth/login";
import { withAuthentication } from "@/widgets/common/withAuthentication";
import Link from "next/link";

const Page = () => {
  return (
    <div className="m-auto max-w-[480px] p-5">
      <h1 className="text-2xl">Login </h1>
      <LoginForm />
      <Link href="/auth/join">회원 가입 &rarr;</Link>
    </div>
  );
};

export default withAuthentication(Page, (user, router) => {
  if (user) router.push("/");
});
