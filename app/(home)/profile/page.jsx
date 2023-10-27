"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
const Profile = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/demo")} variant="contained">
      Profile
    </Button>
  );
};

export default Profile;
