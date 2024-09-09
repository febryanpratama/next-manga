import React from "react";

import ToastProvider from "@/src/components/toast/toastProvider";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Rendering LoginLayout"); // Debug line

  return (
    <ToastProvider>
      {/* This layout is specifically for the login page without the sidebar */}
      {children}
    </ToastProvider>
  );
}
