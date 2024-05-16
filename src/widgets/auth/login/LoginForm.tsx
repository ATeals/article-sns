"use client";

import { useLoginFromWithEmail } from "@/feature/auth";
import { useLoginMutation } from "@/feature/auth/api";
import { Button } from "@/feature/shadcn/components/ui/button";
import { Input } from "@/feature/ui/Input";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();

  const { mutate, isPending } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginFromWithEmail({
    onSubmit: (data) =>
      mutate(data, {
        onSuccess: () => router.push("/"),
      }),
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input label="이메일" {...register("email")} error={errors?.email?.message} required />
      <Input
        type="password"
        label="비밀번호"
        {...register("password")}
        error={errors?.password?.message}
        required
      />

      <Button type="submit" disabled={isPending} className="w-full mt-5">
        {isPending ? "로그인 중..." : "로그인"}
      </Button>
    </form>
  );
};
