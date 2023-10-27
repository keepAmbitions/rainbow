"use client";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import theme from "@/style/palette";
import styles from "./home.module.css";
import GlobalStyles from '@mui/material/GlobalStyles';

export default function HomeLayout({ children }) {
  return (
    <main className={styles.main}>
      <ThemeProvider theme={theme}>
        {/* <GlobalStyles styles={{ button: { textTransform: 'none' } }} /> */}
        <Button variant="contained">HomeLayout</Button>
        {children}
      </ThemeProvider>
    </main>
  );
}
