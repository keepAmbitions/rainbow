"use client";
// 这是平级共享的布局
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import theme from "@/style/palette";
import styles from "./index.module.css";
import GlobalStyles from "@mui/material/GlobalStyles";

export default function PCLayout({ children }) {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    // <ThemeProvider theme={theme}>
      <main className={styles.main}>
        {/* 左侧的导航 navBar */}
        <Box sx={{ position: 'fixed', width: "100%", maxWidth: 260, bgcolor: "background.paper" }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <InboxIcon />
              <ListItemText primary="Dashboard" />
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <InboxIcon />
              <ListItemText primary="Tables" />
            </ListItemButton>
          </List>
        </Box>
        {/* 右侧吸顶的 topBar */}
        <Box position="relative" sx={{ flexGrow: 1, marginLeft: '280px' }}>
          <AppBar position="sticky" color="transparent">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {auth ? "Logout" : "Login"}
              </Typography>
              {auth && (
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
          {children}
        </Box>
        {/* <GlobalStyles styles={{ button: { textTransform: 'none' } }} /> */}
        {/* <Button variant="contained">PCLayout</Button> */}
      </main>
    // </ThemeProvider>
  );
}
