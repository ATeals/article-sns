"use client";

import { JoinForm } from "@/widgets/auth/join";
import { withAuthentication } from "@/widgets/common/withAuthentication";

import Link from "next/link";

function Page() {
  return (
    <div className="m-auto max-w-[480px] p-5">
      <h1 className="text-2xl">Join</h1>
      <JoinForm />
      <Link href="/auth/login">로그인 &rarr;</Link>
    </div>
  );
}

export default withAuthentication(Page, (user, router) => {
  if (user) router.push("/");
});
