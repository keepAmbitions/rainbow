"use client";
import Paper from "@mui/material/Paper";
const Container = () => {
  return (
    <div
      onClick={() => {
        // todo something
      }}
    >
      <Paper elevation={3} sx={{ width: "100%", height: "120vh", bgcolor: "antiquewhite" }}>
        Container
      </Paper>
    </div>
  );
};

export default Container;
