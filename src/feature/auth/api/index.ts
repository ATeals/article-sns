import { FirebaseAuthService } from "@/feature/firebase/services/auth";
import { AuthQueryFactory } from "./query";
import { auth } from "@/feature/firebase/bootstrap";

const authQueryFactory = new AuthQueryFactory(new FirebaseAuthService(auth));

export const useJoinMutation = authQueryFactory.useJoinMutation;
export const useLoginMutation = authQueryFactory.useLoginMutation;
export const useLogoutMutation = authQueryFactory.useLogoutMutation;

export const useAuthQuery = authQueryFactory.useAuthQuery;
