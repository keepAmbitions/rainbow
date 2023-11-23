"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
const LogoutPage = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/demo")} variant="contained">
      LogoutPage
    </Button>
  );
};

export default LogoutPage;