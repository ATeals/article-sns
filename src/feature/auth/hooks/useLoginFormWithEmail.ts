import { useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "../entites";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

export const useLoginFromWithEmail = ({
  onSubmit,
}: {
  onSubmit?: (data: LoginSchemaType) => unknown;
}) => {
  const { handleSubmit: submitAction, ...method } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const handleSubmit = useCallback(
    (data: LoginSchemaType) => {
      onSubmit?.(data);
    },
    [onSubmit]
  );

  return { ...method, handleSubmit: submitAction(handleSubmit) };
};
