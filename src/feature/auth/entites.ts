import { z } from "zod";

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type JoinSchemaType = z.infer<typeof JoinSchema>;

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const userValidator = {
  email: z.string().email("정확하지 않은 이메일 입니다."),
  password: z
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .regex(PASSWORD_REGEX, "비밀번호는 최소 하나의 영문자, 숫자, 특수문자를 포함해야 합니다."),
  name: z.string().min(2, "이름은 2자 이상이어야 합니다."),
};

export const LoginSchema = z.object({
  email: userValidator.email,
  password: userValidator.password,
});

export const JoinSchema = z.object({
  name: userValidator.name,
  email: userValidator.email,
  password: userValidator.password,
});
