"use client";
// import styles from './index.module.css';
import Grid from '@mui/material/Unstable_Grid2';
export default function ResumeLayout({ children }) {
  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Grid xs={12} sm={12} md={12} lg={10} xl={10}>
        {children}
      </Grid>
    </Grid>
  )
}
