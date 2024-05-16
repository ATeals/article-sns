import { JoinSchemaType, LoginSchemaType } from "@/feature/auth/entites";
import { AuthService } from "@/feature/auth/api/interface";
import {
  Auth,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export class FirebaseAuthService implements AuthService {
  constructor(private auth: Auth) {}

  login = async (data: LoginSchemaType) => {
    await this.auth.setPersistence(browserSessionPersistence);

    const credential = await signInWithEmailAndPassword(this.auth, data.email, data.password);

    return credential.user;
  };

  logout = async () => {
    signOut(this.auth);
  };

  join = async (data: JoinSchemaType) => {
    await this.auth.setPersistence(browserSessionPersistence);

    const credential = await createUserWithEmailAndPassword(this.auth, data.email, data.password);

    await updateProfile(credential.user, {
      displayName: data.name,
    });

    return credential.user;
  };

  getAuth = async () => {
    return await new Promise((resolve) => {
      onAuthStateChanged(this.auth, (user) => {
        resolve(user);
      });
    });
  };
}
