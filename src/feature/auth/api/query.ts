import { useMutation, useQuery } from "@tanstack/react-query";
import { AuthService } from "./interface";

export class AuthQueryFactory {
  constructor(private service: AuthService) {}

  useAuthQuery = () => {
    const method = useQuery({
      queryKey: ["AUTH"],
      queryFn: this.service.getAuth,
      staleTime: 1000 * 60 * 60,
      gcTime: 1000 * 60 * 60,
    });

    return method;
  };

  useLoginMutation = () => {
    const method = useMutation({
      mutationKey: ["AUTH"],
      mutationFn: this.service.login,
    });

    return method;
  };

  useJoinMutation = () => {
    const method = useMutation({
      mutationKey: ["AUTH"],
      mutationFn: this.service.join,
    });

    return method;
  };

  useLogoutMutation = () => {
    const method = useMutation({
      mutationKey: ["AUTH"],
      mutationFn: this.service.logout,
    });

    return method;
  };
}
