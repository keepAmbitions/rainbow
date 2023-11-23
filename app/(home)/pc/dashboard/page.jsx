"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
const Dashboard = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/demo")} variant="contained">
      Dashboard
    </Button>
  );
};

export default Dashboard;