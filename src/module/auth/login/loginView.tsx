"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import LoginService from "@/src/module/auth/login/loginService";

export const LoginView = () => {
  const { username, setUsername, password, setPassword, submit } =
    LoginService();

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center w-1/3 border-1 border-gray-600 shadow-lg rounded-3xl py-5">
        <h1 className="text-4xl font-bold text-white">NextManga</h1>
        <form className="flex flex-col w-2/4 gap-4 py-8">
          <Input
            required
            label="Username"
            type="text"
            value={username}
            variant="bordered"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            required
            label="Password"
            type="password"
            value={password}
            variant="bordered"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            color="default"
            size="lg"
            variant="ghost"
            onClick={() => submit()}
          >
            Submit
          </Button>
        </form>
      </div>
      {/* Your login form or content */}
    </div>
  );
};
