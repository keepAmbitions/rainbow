"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/demo")} variant="contained">
      LoginPage
    </Button>
  );
};

export default LoginPage;