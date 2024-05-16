import { User, onAuthStateChanged } from "firebase/auth";
import { useLayoutEffect, useState } from "react";
import { auth } from "./bootstrap";

export const useSessionUserListener = ({
  callback,
}: { callback?: (user: User | null) => unknown } = {}) => {
  const [user, setUser] = useState<User | null>(null);

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      callback?.(user);
    });
  }, [callback]);

  return user;
};
