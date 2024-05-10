import { z } from "zod";

export type LoginSchemaType = z.infer<typeof LoginSchema>;

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const LoginSchema = z.object({
  email: z.string().email("정확하지 않은 이메일 입니다."),
  password: z
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .regex(PASSWORD_REGEX, "비밀번호는 최소 하나의 영문자, 숫자, 특수문자를 포함해야 합니다."),
});
