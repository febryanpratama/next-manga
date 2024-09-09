import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/src/repository/auth/authRepository";

const LoginService = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const router = useRouter();

  const submit = async () => {
    const resp = await login(username, password);

    console.log(resp);

    if (resp !== null) {
      router.push("/");
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    submit,
    validEmail,
    setValidEmail,
  };
};

export default LoginService;
