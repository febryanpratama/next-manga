// app/(auth)/login/page.tsx

import { LoginView } from "@/src/module/auth/login/loginView";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <LoginView />
    </>
  );
}
