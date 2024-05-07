"use client";

import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: 'aliceblue'
}));
const ResumePage = () => {
  const router = useRouter();
  return (
    <Paper elevation={3} style={{padding: 10, width: '100%'}}>
      <DemoPaper variant="elevation">default variant</DemoPaper>
      <DemoPaper variant="outlined">outlined variant</DemoPaper>
      <Button onClick={() => router.push("/demo")} variant="contained">
        ResumePage
      </Button>
    </Paper>
  );
};

export default ResumePage;