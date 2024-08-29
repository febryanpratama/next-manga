import { useState } from "react";
import { toast } from "react-toastify";

import { login, register } from "@/src/repository/auth/authRepository";

const RegisterService = () => {
  const [email, setEmail] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [username, setUsername] = useState("emilys");



//   const submit = async () => {
//     const resp = await login(email, password);

//     console.log(resp);
//     // call1();
//   };


const submit = async () => {
        console.log(email,username,password);
        // const resp = await register(email,username,password);
    }

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    submit,
    // notify,
  };
};

export default RegisterService;
