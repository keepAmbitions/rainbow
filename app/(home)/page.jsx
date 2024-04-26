"use client";
import Paper from "@mui/material/Paper";
/**
 * 这个page是通过http://localhost:3000/这个访问的，
 * 会嵌套在平级的layout.jsx中，将来充当网站主页
*/
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
