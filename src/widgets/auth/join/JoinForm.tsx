"use client";

import { useJoinMutation } from "@/feature/auth/api";
import { useJoinFormWithEmail } from "@/feature/auth/hooks/useJoinFormWithEmail";
import { Button } from "@/feature/shadcn/components/ui/button";
import { Input } from "@/feature/ui/Input";
import { useRouter } from "next/navigation";

export const JoinForm = () => {
  const router = useRouter();

  const { mutate } = useJoinMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useJoinFormWithEmail({
    onSubmit: (data) =>
      mutate(data, {
        onSuccess: () => router.push("/"),
      }),
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input label="이름" {...register("name")} error={errors?.name?.message} required />
      <Input label="이메일" {...register("email")} error={errors?.email?.message} required />
      <Input
        type="password"
        label="비밀번호"
        {...register("password")}
        error={errors?.password?.message}
        required
      />

      <Button type="submit" className="w-full mt-5">
        Submit
      </Button>
    </form>
  );
};
