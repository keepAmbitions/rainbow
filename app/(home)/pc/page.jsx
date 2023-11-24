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
      // https://aaa.freeask.asia
      const res = await fetch("/api/raw-order", {
        method: "POST",
        body: JSON.stringify({ requestBusinessNo: inValue }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getData = async () => {
    try {
      const res = await fetch(`/api/raw-order?requestBusinessNo=${inValue}`)
      
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
      const data = await res.json()
      console.log('debug--11', data);
      
      setOutValue(data.requestBusinessNo)
    } catch (err) {
      
    };
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
      <Button variant="contained" onClick={getData}>
        查询
      </Button>
    </Paper>
  );
};

export default WelcomeHome;
