"use client";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const WelcomeHome = () => {
  const [inValue, setInValue] = useState("");
  const [outValue, setOutValue] = useState("");
  const postData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/raw-order", {
        method: "POST",
        body: JSON.stringify({ inValue }),
      });
      console.log("debug--11", res);
    } catch (err) {}
  };
  return (
    <Paper
      elevation={3}
      sx={{ width: "100%", height: "120vh", bgcolor: "antiquewhite" }}
    >
      <TextField
        id="outlined-basic"
        size="small"
        label="输入"
        variant="outlined"
        value={inValue}
        onChange={(event) => {
          setInValue(event.target.value);
        }}
      />
      <Button variant="contained" onClick={postData}>
        提交
      </Button>
      <TextField
        id="outlined-basic"
        size="small"
        label="输出"
        variant="outlined"
        value={outValue}
        onChange={(event) => {
          setOutValue(event.target.value);
        }}
      />
    </Paper>
  );
};

export default WelcomeHome;
