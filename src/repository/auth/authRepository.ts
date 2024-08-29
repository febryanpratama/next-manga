import { ConvertModelUser, ModelUser } from "@/src/model/modelUser";
import { loginLoading } from "@/src/core/api/baseApi";

export const login = async (
  email: string,
  password: string,
): Promise<ModelUser | null> => {
  const resp = loginLoading("/auth/login", {
    username: email,
    password: password,
    expiresInMins: 30,
  });
  //   await post("/auth/login", {
  //   username: email,
  //   password: password,
  //   expiresInMins: 30,
  // });

  if (resp === null) {
    return null;
  }

  return ConvertModelUser.toModelUser(JSON.stringify(resp));
};

export const register = async(
  email: string,
  username: string,
  password: string,
): Promise<ModelUser | null> => {
  const resp = loginLoading("/auth/register", {
    email: email,
    username: username,
    password: password,
  });

  if (resp === null) {
    return null;
  }

  return ConvertModelUser.toModelUser(JSON.stringify(resp));
}
