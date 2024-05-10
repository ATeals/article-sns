import { useForm } from "react-hook-form";
import { JoinSchema, JoinSchemaType } from "../entites";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

export const useJoinFormWithEmail = ({
  onSubmit,
}: {
  onSubmit?: (data: JoinSchemaType) => unknown;
}) => {
  const { handleSubmit: submitAction, ...method } = useForm<JoinSchemaType>({
    resolver: zodResolver(JoinSchema),
  });

  const handleSubmit = useCallback(
    (data: JoinSchemaType) => {
      onSubmit?.(data);
    },
    [onSubmit]
  );

  return { ...method, handleSubmit: submitAction(handleSubmit) };
};
