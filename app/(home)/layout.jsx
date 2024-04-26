"use client";
// home目录下所有嵌套的目录共享此布局
// 这个布局是通过http://localhost:3000/这个访问的，将来充当网站主页
import { useState } from "react";
// import { ThemeProvider } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/Inbox";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import Switch from "@mui/material/Switch";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import theme from "@/style/palette";
import styles from "./index.module.css";

export default function HomeLayout({ children }) {
  // const [selectedIndex, setSelectedIndex] = useState(1);

  // const [auth, setAuth] = useState(true);
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };
  return (
    // <ThemeProvider theme={theme}>
      <main className={styles.main}>
        {children}
      </main>
    // </ThemeProvider>
  );
}
