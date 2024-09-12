// components/MyComponent.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

const MyComponent = () => {
  const router = useRouter();

  const redirectToHome = () => {
    console.debug("Redirecting to home due to status 423");
    router.push("/"); // Redirect to home page
  };

  const handleClick = async () => {
    // const result = await getFetchData(
    //   "/some-path",
    //   { key: "value" },
    //   redirectToHome,
    // );
    // if (result.statusCode === 200) {
    //   console.log("Data fetched successfully", result.data);
    // } else {
    //   console.error("Error fetching data", result.message);
    // }
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Data and Handle Redirect</button>
    </div>
  );
};

export default MyComponent;
