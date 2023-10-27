import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d6a5e6',
      // light: '#42a5f5',
      // dark: '#1565c0',
      contrastText: '#fff',
    },
    // secondary: {
    //   main: '#b6a5e6',
    //   // light: '#42a5f5',
    //   // dark: '#1565c0',
    //   contrastText: '#fff',
    // },
    // // error: {
    // //   main: '#1976d2',
    // //   light: '#42a5f5',
    // //   dark: '#1565c0',
    // //   contrastText: '#fff',
    // // },
    // warning: {
    //   main: '#a00021',
    //   light: '#42a5f5',
    //   dark: '#1565c0',
    //   contrastText: '#fff',
    // },
    // info: {
    //   main: '#b6a5e6',
    //   // light: '#42a5f5',
    //   // dark: '#1565c0',
    //   contrastText: '#fff',
    // },
    // success: {
    //   main: '#b6e6a5',
    //   // light: '#42a5f5',
    //   // dark: '#1565c0',
    //   contrastText: '#fff',
    // },
    // 其他颜色变量和属性...
  },
  // 其他主题属性...
});

export default theme;